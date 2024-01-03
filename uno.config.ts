import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    // 由 Iconify 提供支持的纯 CSS 图标解决方案
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        local: FileSystemIconLoader('./src/static/icons'),
        register: FileSystemIconLoader('./src/static/icons/register'),
      },
    }),
    /**
     * unocss uni-app 小程序预设
     * @see https://github.com/uni-helper/unocss-preset-uni
     */
    presetUni({
      remRpx: false,
      uno: {
        dark: 'class',
      },
    }),
  ],
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: [
    ['flex-center', 'flex items-center'],
    ['text-primary', 'text-[#408FFF]'],
    ['text-error', 'text-[#ff3939]'],
    ['text-danger', 'text-error'],
    ['flex-center-justify', 'flex items-center justify-center'],
    ['ellipsis', 'whitespace-nowrap overflow-hidden text-ellipsis'],
  ],
  transformers: [
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
  ],
})
