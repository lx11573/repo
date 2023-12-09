export function webviewOptions(options?: PlusWebviewWebviewStyles): PlusWebviewWebviewStyles {
  const statusbarHeight = plus.navigator.getStatusbarHeight()
  return { top: String(statusbarHeight + 44), ...options }
}
export function createWebview(options?: PlusWebviewWebviewStyles) {
  const viewOptions = webviewOptions(options)
  return plus.webview.create('', '', viewOptions)
}
