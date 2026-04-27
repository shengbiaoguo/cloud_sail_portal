type HomeSectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function HomeSectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: HomeSectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-2xl font-semibold tracking-tight md:text-4xl ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm md:text-base ${
            light ? "text-blue-100/90" : "text-[var(--muted)]"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
