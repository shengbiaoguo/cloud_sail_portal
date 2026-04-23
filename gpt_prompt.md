你现在是一个资深的 Next.js 全栈前端工程师，请基于以下项目背景，帮助我设计并开发“企业官网前台”端。

# 一、项目背景
这是一个“企业官网 + CMS 管理后台 + API 服务端”的完整系统，其中你当前只负责“官网前台”端。

项目目标：
1. 对外展示公司信息、服务、案例、新闻
2. 收集用户咨询线索
3. 做好 SEO，支持企业官网常见内容展示
4. 与后台 CMS 和 API 服务端配合，形成完整交付闭环

当前项目分为 3 个端：
1. 官网前台（当前你负责）
2. 管理后台
3. API 服务端

请你始终围绕“官网前台”职责来设计，不要混入后台管理页面逻辑。

# 二、官网前台技术架构
请基于以下技术栈设计：
- Next.js
- TypeScript
- Tailwind CSS
- SSR 优先，必要时可结合 SSG/ISR 思路
- SEO 友好
- 组件化开发
- 与 API 服务端通过 HTTP 接口通信（请求时优先使用fetch方法，因为可以使用服务端缓存）

要求：
1. 代码结构清晰，适合企业官网长期维护
2. 页面路由清晰，利于 SEO
3. 组件拆分合理，避免首页和详情页过度耦合
4. 可扩展，但当前只做 MVP 版本，不要过度设计

# 三、官网前台模块与功能
请围绕以下模块设计前台页面、路由、组件结构和数据请求方式：

## 1. 首页
包含以下模块：
- Banner
- 公司简介
- 核心服务
- 案例展示
- 新闻动态
- 客户评价/合作客户（可先做占位）
- 联系方式
- 留资表单入口

## 2. 关于我们
内容包括：
- 公司介绍
- 团队/理念
- 发展历程
- 联系方式

## 3. 服务模块
页面包括：
- 服务列表页
- 服务详情页

字段大致包括：
- 标题
- 简介
- 封面图
- 正文内容
- SEO 信息

## 4. 案例模块
页面包括：
- 案例列表页
- 案例详情页

字段大致包括：
- 标题
- 简介
- 封面图
- 正文内容
- 客户名称
- 所属行业
- 项目日期
- SEO 信息

## 5. 新闻模块
页面包括：
- 新闻列表页
- 新闻详情页

需要体现：
- SEO
- 列表分页
- slug 路由
- 发布时间

字段大致包括：
- 标题
- slug
- 摘要
- 封面图
- 正文内容
- SEO 信息
- 发布时间
- 发布状态

## 6. 联系我们
内容包括：
- 联系方式
- 地址
- 地图占位
- 咨询表单

## 7. 全站公共模块
包括：
- Header 导航
- Footer 页脚
- SEO meta
- 404 页面
- 提交成功反馈

# 四、前台建议路由
请按以下路由设计：
- /
- /about
- /services
- /services/[slug]
- /cases
- /cases/[slug]
- /news
- /news/[slug]
- /contact
- /404

如果有必要，也可以补充分页路由设计，但要符合 SEO 逻辑。

# 五、与 API 服务端关联的数据表（前台需要理解，但不负责建表）
请基于以下表来理解前台数据来源：

## 1. news 新闻表
建议字段：
- id
- title
- slug
- summary
- cover_image
- content
- seo_title
- seo_keywords
- seo_description
- status
- published_at
- sort_order
- created_by
- updated_by
- created_at
- updated_at
- deleted_at

## 2. case_study 案例表
建议字段：
- id
- title
- slug
- summary
- cover_image
- content
- client_name
- industry
- project_date
- seo_title
- seo_keywords
- seo_description
- status
- sort_order
- created_by
- updated_by
- created_at
- updated_at
- deleted_at

## 3. service 服务表
建议字段：
- id
- title
- slug
- summary
- cover_image
- content
- seo_title
- seo_keywords
- seo_description
- status
- sort_order
- created_by
- updated_by
- created_at
- updated_at
- deleted_at

## 4. site_config 站点配置表
建议字段：
- id
- config_key
- config_value
- description
- updated_by
- created_at
- updated_at

常见配置包括：
- site_name
- site_logo
- contact_phone
- contact_email
- company_address
- icp_text
- footer_text
- home_banner

## 5. lead 线索表（前台只负责提交）
建议字段：
- id
- name
- phone
- email
- company
- source_page
- message
- status
- remark
- assigned_to
- contacted_at
- created_at
- updated_at

# 六、你输出时的要求
请你基于以上背景，优先输出以下内容：
1. 官网前台的项目目录结构建议
2. 页面路由与模块拆分
3. 公共组件拆分建议
4. 各页面的数据获取方式（SSR / SSG / 客户端请求）
5. API 调用边界
6. SEO 建议
7. 开发顺序建议

注意：
- 不要输出管理后台代码
- 不要输出服务端代码
- 只围绕官网前台职责展开
- 优先考虑“可交付、可维护、符合企业官网真实场景”
- 先从架构和结构设计开始，再逐步进入代码实现
