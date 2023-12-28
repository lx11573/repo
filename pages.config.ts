import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    navigationBarTitleText: 'gxs-app',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    backgroundColor: '@bgColor',
    backgroundTextStyle: '@bgTxtStyle',
    backgroundColorTop: '@bgColorTop',
    backgroundColorBottom: '@bgColorBottom',
    // 'app-plus': {
    //   titleNView: false, // 移除 H5、APP 顶部导航
    // },
  },
  easycom: {
    autoscan: true,
    custom: {
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
    },
  },
})
