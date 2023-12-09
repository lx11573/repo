import { createWebview, webviewOptions } from './create-webview'

let noNetworkWebview: PlusWebviewWebviewObject | null = null
export function listenerNetworkStatus() {
  uni.onNetworkStatusChange((res) => {
    if (res.isConnected) {
      // this.$vuex('vuex_showNetwork', false);
      if (typeof noNetworkWebview?.hide === 'function') {
        noNetworkWebview.hide()
      }
      else {
        uni.showToast({
          title: '网络已连接',
          icon: 'none',
          position: 'top',
        })
      }
    }
    else {
      // this.$vuex('vuex_showNetwork', true);

      // 获取当前子窗口, 目前只有 tabbar 需要
      // 其他窗口直接覆盖 webview 进行处理
      setTimeout(() => {
        const pages = getCurrentPages()
        const page = pages[pages.length - 1]
        // 页面栈最顶层就是当前webview
        const currentWebview = page.$getAppWebview?.()
        const firstChild = currentWebview?.children()[0]
        if (firstChild) {
          firstChild.setStyle(webviewOptions())
        }
        else {
          if (!noNetworkWebview) {
            noNetworkWebview = createWebview()
            noNetworkWebview.loadURL('/hybrid/html/no-network.html')
            addListener()
          }

          noNetworkWebview!.show()
        }
      }, 300)
    }
  })
}
function addListener() {
  if (!noNetworkWebview)
    return
  noNetworkWebview.addEventListener('hide', () => {
    uni.getNetworkType({
      success: (res) => {
        if (res.networkType === 'none') {
          noNetworkWebview!.show()
        }
        else {
          uni.showToast({
            title: '网络已连接',
            icon: 'none',
            position: 'top',
          })
        }
      },
    })
  }, false)
}
