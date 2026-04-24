type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type ApiFetchOptions = {
  method?: ApiMethod;
  body?: unknown;
  headers?: Record<string, string>;
  searchParams?: Record<string, string | number | undefined>;
  revalidate?: number;
  tags?: string[];
};

type ApiEnvelope<T> = {
  code: number;
  message: string;
  data: T;
};

const API_BASE_URL =
  process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

function buildUrl(path: string, searchParams?: ApiFetchOptions["searchParams"]) {
  const url = new URL(path, API_BASE_URL);
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }
  }
  return url.toString();
}

function isApiEnvelope<T>(value: unknown): value is ApiEnvelope<T> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return (
    "code" in value &&
    "message" in value &&
    "data" in value &&
    typeof (value as { message?: unknown }).message === "string"
  );
}

export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  const response = await fetch(buildUrl(path, options.searchParams), {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    next: {
      revalidate: options.revalidate,
      tags: options.tags,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as unknown;
  if (isApiEnvelope<T>(json)) {
    if (json.code !== 0) {
      throw new Error(json.message || "API business error");
    }
    return json.data;
  }

  return json as T;
}
