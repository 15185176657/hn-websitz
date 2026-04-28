# 恒能数智官网

恒能数智综合能碳管理平台官方网站，基于 Next.js + TypeScript + Tailwind CSS 构建。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **部署**: 支持 Vercel / 阿里云 / 腾讯云

## 页面结构

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | Hero、平台价值、四大模块、源网荷储、决策引擎、解决方案、关于我们、CTA |
| 平台产品 | `/platform` | 五层架构、四大基础模块、两大智能引擎 |
| 核心技术 | `/technology` | 源网荷储四大技术方向、AI 能力 |
| 解决方案 | `/solutions` | 新能源电站、工业园区、工业企业、楼宇建筑 |
| 关于我们 | `/about` | 公司简介、使命愿景、发展历程 |
| 联系我们 | `/contact` | 联系表单、联系方式 |

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 构建部署

```bash
npm run build
npm run start
```

## 关键设计特点

- 响应式设计，完整适配 PC / 平板 / 手机
- SEO 优化：每个页面独立 `title` 和 `description`
- 科技感深蓝/绿配色方案
- 源网荷储协同可视化展示
- 无外部图片依赖，使用 CSS 渐变、图标与 SVG 图形
