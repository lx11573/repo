import type { UnData, UnInstance } from '@uni-helper/uni-network'
import un from '@uni-helper/uni-network'
import { cacheAdapter } from './adapter'
import { Loading, createLoading } from './loading'
import type { Config, Response } from './types'

const ownConfig: Config = {
  baseUrl: 'http://192.168.10.110',
  // next-ad-ignore
  timeout: 5 * 1000,
  adapter: cacheAdapter,
  useLoading: {
    enabled: true,
    startLoading: () => {
      console.log('start')
    },
    endLoading: () => {
      console.log('end')
    },
  },
}
class Http {
  private instance: UnInstance
  private config: Config
  private loadingInst: Loading | null = null
  constructor(config: Config) {
    this.config = config
    this.instance = un.create(config)
    this.init()
  }

  private init() {
    this.initInterceptors()
    this.initLoading()
  }

  private initLoading() {
    if (this.config?.useLoading?.enabled)
      this.loadingInst = new Loading(this.config.useLoading)
  }

  private initInterceptors() {
    this.instance.interceptors.request.use((config: Config) => {
      this.addQueryCount(config)
      return config
    })
    this.instance.interceptors.response.use((res) => {
      console.log('返回数据')
      this.delQueryCount(res.config as Config)
      if (res.status === 401) {
        uni.showModal({
          title: '登录超时, 请重新登录',
          showCancel: false,
          confirmText: '去登录',
          success() {
            uni.reLaunch({
              url: '/pages/login',
            })
          },
        })
        return
      }
      const data = res.data as Response
      console.log('data', data)
      if (data.code === 200)
        return data.result
      console.log('http response error')
      return Promise.reject(data)
    }, (error) => {
      this.destroyLoading(error.config)
      console.log('Http instance error', error)
    })
  }

  private addQueryCount(config: Config) {
    this.handleLoading(config, 'add')
  }

  private delQueryCount(config: Config) {
    this.handleLoading(config, 'del')
  }

  private destroyLoading(config: Config) {
    this.handleLoading(config, 'destroy')
  }

  private handleLoading(config: Config, method: 'add' | 'del' | 'destroy') {
    /**
     * 调用函数明确不使用 loading 时，直接不执行
     */
    if (config?.useLoading?.enabled === false)
      return
    /**
     * 如果统一配置的 loading 已启用，则直接调用实例的 loadingInst
     */
    if (config?.useLoading?.enabled) {
      if (!this.loadingInst)
        this.loadingInst = createLoading(config.useLoading)

      this.loadingInst?.[method]()
    }
  }

  get(url: string, config?: Config) {
    return this.instance.get(url, config)
  }

  post(url: string, data: UnData, config?: Config) {
    return this.instance.post(url, data, config)
  }

  put(url: string, data: UnData, config?: Config) {
    return this.instance.put(url, data, config)
  }

  delete(url: string, config?: Config) {
    return this.instance.delete(url, config)
  }

  request(config: Config) {
    return this.instance(config)
  }
}

export default new Http(ownConfig)
