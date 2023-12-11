export type StoreListItem = {
  enable: boolean
  id: string
  name: string
  scheme: string
  priority: number // 优先级
}

export type UniUpgradeCenterResult = {
  _id: string
  appid: string
  name: string
  title: string
  contents: string
  url: string // 安装包下载地址
  platform: Array<string> // Array<'Android' | 'iOS'>
  version: string // 版本号 1.0.0
  uni_platform: string // "android" | "ios" // 版本号 1.0.0
  stable_publish: boolean // 是否是稳定版
  is_mandatory: boolean // 是否强制更新
  is_silently: boolean	// 是否静默更新
  create_env: string // "upgrade-center"
  create_date: number
  message: string
  code: number

  type: string // "native_app" | "wgt"
  store_list: StoreListItem[] | null
  min_uni_version: string | null // 升级 wgt 的最低 uni-app 版本
}

export default function (): Promise<UniUpgradeCenterResult> {
  return new Promise<UniUpgradeCenterResult>((resolve, reject) => {
    const systemInfo = uni.getSystemInfoSync()
    console.log('systemInfo', systemInfo)
    const appId = systemInfo.appId
    const appVersion = systemInfo.appVersion
    console.log('appVersion', appVersion, typeof appId === 'string' && typeof appVersion === 'string' && appId.length > 0 && appVersion.length > 0)
    if (typeof appId === 'string' && typeof appVersion === 'string' && appId.length > 0 && appVersion.length > 0) {
      // resolve({
      //   _id: 'id',
      //   appid: 'appid',
      //   name: 'name',
      //   title: 'title',
      //   contents: 'contents',
      //   url: 'url', // 安装包下载地址
      //   platform: ['Android'], // Array<'Android' | 'iOS'>
      //   version: '1.1.0', // 版本号 1.0.0
      //   uni_platform: 'android', // "android" | "ios" // 版本号 1.0.0
      //   stable_publish: true, // 是否是稳定版
      //   is_mandatory: true, // 是否强制更新
      //   is_silently: false,	// 是否静默更新
      //   create_env: 'upgrade-center', // "upgrade-center"
      //   create_date: Date.now(),
      //   message: 'message',
      //   code: 10,

      //   type: 'wgt', // "native_app" | "wgt"
      //   store_list: null,
      //   min_uni_version: null, // 升级 wgt 的最低 uni-app 版本
      // })
      // return

      plus.runtime.getProperty(appId, (widgetInfo) => {
        console.log('widgetInfo', widgetInfo)
        if (widgetInfo.version) {
          // const data = {
          // 	action: 'checkVersion',
          // 	appid: appId,
          // 	appVersion,
          // 	wgtVersion: widgetInfo.version,
          // }

          // TODO 获取版本
          resolve({
            _id: 'id',
            appid: 'appid',
            name: 'name',
            title: 'title',
            contents: 'contents',
            url: 'url', // 安装包下载地址
            platform: ['Android'], // Array<'Android' | 'iOS'>
            version: '1.1.0', // 版本号 1.0.0
            uni_platform: 'android', // "android" | "ios" // 版本号 1.0.0
            stable_publish: true, // 是否是稳定版
            is_mandatory: true, // 是否强制更新
            is_silently: false,	// 是否静默更新
            create_env: 'upgrade-center', // "upgrade-center"
            create_date: Date.now(),
            message: 'message',
            code: 10,

            type: 'wgt', // "native_app" | "wgt"
            store_list: null,
            min_uni_version: null, // 升级 wgt 的最低 uni-app 版本
          })
          // uniCloud.callFunction({
          // 	name: 'uni-upgrade-center',
          // 	data,
          // 	success: (e) => {
          // 		resolve(e.result as UniUpgradeCenterResult)
          // 	},
          // 	fail: (error) => {
          // 		reject(error)
          // 	}
          // })
        }
        else {
          reject('widgetInfo.version is EMPTY')
        }
      })
    }
    else {
      reject('plus.runtime.appid is EMPTY')
    }
  })
}
