# Kawenda TPMS - 胎压监测系统网站

这是一个使用Next.js和TypeScript构建的胎压监测系统(TPMS)产品展示网站。该网站展示了卡文达公司的TPMS产品、解决方案和服务。

## 功能特点

- 响应式设计，适配各种设备尺寸
- 多语言支持（中文和英文）
- 产品展示和详情页面
- 解决方案介绍
- 胎压数据可视化图表
- 轮播图组件
- 联系表单
- 关于我们页面

## 技术栈

- Next.js 15+
- TypeScript
- Tailwind CSS
- Zustand (状态管理)
- Recharts (数据可视化)

## 开发环境设置

1. 克隆仓库

```bash
git clone https://github.com/yourusername/kawenda-tpms.git
cd kawenda-tpms
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 在浏览器中访问 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
```

## 部署

该项目可以部署到Vercel平台：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fkawenda-tpms)

## 项目结构

```
kawenda-tpms/
├── public/            # 静态资源
├── src/
│   ├── app/           # 页面组件
│   ├── components/    # 可复用组件
│   ├── store/         # Zustand状态管理
│   └── styles/        # 全局样式
├── .eslintrc.json     # ESLint配置
├── next.config.ts     # Next.js配置
├── package.json       # 项目依赖
├── tailwind.config.js # Tailwind CSS配置
└── tsconfig.json      # TypeScript配置
```

## 许可证

MIT
