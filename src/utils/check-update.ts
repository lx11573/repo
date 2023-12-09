import type { UniUpgradeCenterResult } from './check-version'
import callCheckVersion from './check-version'
import { createWebview } from '.'

// import { useCounterStore } from '@/store/counter'

// 推荐再App.vue中使用
const PACKAGE_INFO_KEY = '__package_info__'

export function checkUpdate(): Promise<UniUpgradeCenterResult> {
  return new Promise<UniUpgradeCenterResult>((resolve, reject) => {
    callCheckVersion().then(async (uniUpgradeCenterResult) => {
      // NOTE uni-app x 3.96 解构有问题
      const code = uniUpgradeCenterResult.code
      const message = uniUpgradeCenterResult.message
      // 安装包下载地址
      // const url = uniUpgradeCenterResult.url
      // TODO 升级处理
      // 此处逻辑仅为示例，可自行编写
      if (code > 0) {
        // 腾讯云和阿里云下载链接不同，需要处理一下，阿里云会原样返回
        // const tcbRes = await uniCloud.getTempFileURL({ fileList: [url] });
        // if (typeof tcbRes.fileList[0].tempFileURL !== 'undefined') uniUpgradeCenterResult.url = tcbRes.fileList[0].tempFileURL;

        /**
         * 提示升级一
         * 使用 uni.showModal
         */
        // return updateUseModal(uniUpgradeCenterResult)

        /**
         * 提示升级二
         * 官方适配的升级弹窗，可自行替换资源适配UI风格
         */
        uni.setStorageSync(PACKAGE_INFO_KEY, uniUpgradeCenterResult)
        const webview = createWebview({
          webviewBGTransparent: true,
          background: 'transparent',
          backgroundColorTop: 'transparent',
        })
        webview.loadURL('/static/html/check-update.html')
        webview.addEventListener('loaded', () => {
          setTimeout(() => {
            webview.show()
          }, 500)
        })
        // const counter = useCounterStore()
        // counter.setVisible()
        // console.log('show')
        // router.push(`/pages/upgrade-center/upgrade-center?local_storage_key=${PACKAGE_INFO_KEY}`)
        // uni.navigateTo({
        // 	url: `/uni_modules/uni-upgrade-center-app/pages/upgrade-popup?local_storage_key=${PACKAGE_INFO_KEY}`,
        // 	fail: (err) => {
        // 		console.error('更新弹框跳转失败', err)
        // FIXME 移除缓存的更新包
        // 		uni.removeStorageSync(PACKAGE_INFO_KEY)
        // 	}
        // })

        return resolve(uniUpgradeCenterResult)
      }
      else if (code < 0) {
        console.error(message)
        return reject(uniUpgradeCenterResult)
      }
      return resolve(uniUpgradeCenterResult)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * 使用 uni.showModal 升级
 */
// function updateUseModal(packageInfo: UniUpgradeCenterResult) {
//   console.log('packageInfo', packageInfo)
//   // #ifdef APP
//   const {
//     title, // 标题
//     contents, // 升级内容
//     is_mandatory, // 是否强制更新
//     url, // 安装包下载地址
//     type,
//     platform,
//   } = packageInfo

//   const isWGT = type === 'wgt'
//   const isiOS = !isWGT ? platform.includes('iOS') : false

//   const confirmText = isiOS ? '立即跳转更新' : '立即下载更新'

//   return uni.showModal({
//     title,
//     content: contents,
//     showCancel: !is_mandatory,
//     confirmText,
//     success: (res) => {
//       if (res.cancel)
//         return

//       if (isiOS) {
//         // iOS 平台跳转 AppStore
//         plus.runtime.openURL(url)
//         return
//       }

//       uni.showToast({
//         title: '后台下载中……',
//         duration: 1000,
//       })

//       // wgt 和 安卓下载更新
//       uni.downloadFile({
//         url,
//         success: (res) => {
//           if (res.statusCode !== 200) {
//             console.error('下载安装包失败')
//             uni.showModal({
//               title: '下载安装包失败？',
//               success: (res) => {
//                 if (res.confirm) {
//                   // 更新完重启app
//                   plus.runtime.restart()
//                 }
//               },
//             })
//             return
//           }
//           // 下载好直接安装，下次启动生效
//           plus.runtime.install(res.tempFilePath, {
//             force: false,
//           }, () => {
//             if (is_mandatory) {
//               // 更新完重启app
//               plus.runtime.restart()
//               return
//             }
//             uni.showModal({
//               title: '安装成功是否重启？',
//               success: (res) => {
//                 if (res.confirm) {
//                   // 更新完重启app
//                   plus.runtime.restart()
//                 }
//               },
//             })
//           }, (err) => {
//             uni.showModal({
//               title: '更新失败',
//               content: err
//                 .message,
//               showCancel: false,
//             })
//           })
//         },
//       })
//     },
//   })
//   // #endif
// }
