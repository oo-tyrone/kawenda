# 卡文达汽车胎压监测系统门户网站 (Kawenda TPMS Portal)

这是卡文达汽车胎压监测系统的官方门户网站，使用 Next.js 13+ 构建，提供产品展示、解决方案介绍、技术支持等功能。

This is the official portal website for Kawenda Tire Pressure Monitoring System, built with Next.js 13+, providing product showcase, solution introduction, technical support, and more.

## 技术栈 (Tech Stack)

- **前端框架**: Next.js 13.4+
- **状态管理**: Zustand 4.4+
- **国际化**: next-i18next 13.1+
- **UI组件库**: Headless UI + Tailwind CSS
- **图表**: Recharts 2.4+

## 功能特点 (Features)

- 响应式设计，适配各种设备
- 中英文双语支持
- 产品展示与详情页
- 解决方案介绍
- 技术支持与文档中心
- 实时数据可视化展示

## 开发环境设置 (Development Setup)

### 系统要求 (Requirements)

- Node.js 18+
- npm 或 yarn 或 pnpm

### 安装步骤 (Installation)

1. 克隆仓库 (Clone the repository)

```bash
git clone https://github.com/your-username/kawenda-tpms.git
cd kawenda-tpms
```

2. 安装依赖 (Install dependencies)

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 启动开发服务器 (Start development server)

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构 (Project Structure)

```
kawenda-tpms/
├── public/             # 静态资源
├── src/
│   ├── app/            # Next.js App Router 页面
│   ├── components/     # 可复用组件
│   └── store/          # Zustand 状态管理
├── next.config.ts      # Next.js 配置
└── tailwind.config.js  # Tailwind CSS 配置
```

## 部署 (Deployment)

本项目可以部署到 Vercel、Netlify 或其他支持 Next.js 的平台。

This project can be deployed to Vercel, Netlify, or other platforms that support Next.js.

```bash
# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build
```

## 许可证 (License)

[MIT](LICENSE)
