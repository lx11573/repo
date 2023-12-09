## 特性 [Vue 3](https://github.com/vuejs/core), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [`uni-helper`](https://github.com/uni-helper)

- 🗂 [基于文件的约定式路由](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/pages) - `Vite` 驱动的 `uni-app` 上使用基于文件的路由系统

- 📦 [组件自动化加载](https://github.com/Ares-Chang/uni-vitesse/blob/master/src/components) - `Vue` 的按需组件自动导入

- 📑 [布局系统](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/layouts) - `Vite` 下 `uni-app` 的可定制布局框架

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org) - 符合直觉的 `Vue.js` 状态管理库

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 `CSS` 引擎， [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 😃 [Iconify](https://iconify.design)- 各种图标集为你所用，浏览：[🔍Icônes](https://icones.netlify.app/)

- 🔥[`<script setup>` 语法](https://cn.vuejs.org/api/sfc-script-setup.html) - 单文件组件 (`SFC`) 中使用组合式 `API` 的编译时语法糖

- 📥 [API 自动导入](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/composables) - 直接使用 `Composition API` 等

- ⚡️ [Vueuse](https://vueuse.org/guide/) - `Vue Composition` 实用工具集

- ✅ [Vitest](https://vitest.dev/) - 进行单元和组件测试

- 👻 [Vue 的魔法糖](https://vue-macros.dev/zh-CN/guide/getting-started.html) - 探索并扩展更多的宏和语法糖到 `Vue` 中

- 🦾 `TypeScript`, 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

### 编码风格

- 使用 [`<script setup>` 的 SFC 语法](https://github.com/vuejs/rfcs/pull/227) 与 `Composition API` 结合使用。
- 使用 [ESLint](https://eslint.org/) 工具检查代码格式，并使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 配置，使用单引号并去掉分号。

## 开始

### 安装依赖

```bash
cd [project]
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

### 运行

参考 uni-app 官方文档：[运行、发布 uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)
