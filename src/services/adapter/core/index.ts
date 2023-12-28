import { createLruCache } from 'lru-cache-api-notice'
import { adapters } from '@uni-helper/uni-network'
import { stringify } from 'qs'
import type { Config } from '~/services/types'

const lruCache = createLruCache({
  cacheTime: 2,
  maxCache: 20,
})
function genKey(config: Config) {
  const { method, url, params, data } = config
  return [method, url, stringify(params), stringify(data)].join('&')
}

export default function (config: Config) {
  const { method, isForce } = config
  if (method === 'get') {
    const requestKey = genKey(config)
    let responsePromise = lruCache.get(requestKey)
    if (!responsePromise || isForce) {
      console.log('请求')
      responsePromise = (() => {
        try {
          return adapters.request(config)
        }
        catch (reason) {
          lruCache.delete(requestKey)
          throw reason
        }
      })()
      lruCache.set(requestKey, responsePromise)
      console.log('得到请求数据')
      return responsePromise
    }
    console.log('缓存数据')
    return responsePromise
  }
  return adapters.request(config)
}
