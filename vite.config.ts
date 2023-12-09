/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueMacros from 'unplugin-vue-macros/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    /**
     * vite-plugin-uni-pages
     * @see https://github.com/uni-helper/vite-plugin-uni-pages
     */
    UniPages({
      routeBlockLang: 'yaml',
      subPackages: [
        'src/pages-sub',
      ],
    }),

    /**
     * vite-plugin-uni-layouts
     * @see https://github.com/uni-helper/vite-plugin-uni-layouts
     */
    UniLayouts(),

    /**
     * unocss
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
    Unocss(),

    /**
     * unplugin-auto-import 按需 import
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      imports: [
        'vue',
        'uni-app',
      ],
      dts: 'src/types/auto-imports.d.ts',
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    /**
     * unplugin-vue-components 按需引入组件
     * 注意：需注册至 uni 之前，否则不会生效
     * @see https://github.com/antfu/vite-plugin-components
     */
    Components({
      dts: 'src/types/components.d.ts',
    }),

    /**
     * vite-plugin-vue-devtools 增强 Vue 开发者体验
     * @see https://github.com/webfansplz/vite-plugin-vue-devtools
     */
    VueDevTools(),

    uni(),

    VueMacros({
      plugins: {
        vueJsx: VueJsx(),
      },
      defineOptions: true,
      defineSlots: true,
      shortEmits: true,
      shortVmodel: {
        prefix: '::',
      },
    }),
  ],
})
