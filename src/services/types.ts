import type { Un, UnConfig, UnData, UnResponse } from '@uni-helper/uni-network'

export interface LoadingOptions {
  startLoading?: () => void
  endLoading?: () => void
  delay?: number
  showtime?: number
  enabled: boolean
}

export interface Config<T = UnData, D = UnData> extends UnConfig<T, D> {
  useLoading?: LoadingOptions
  isForce?: boolean
}

export interface Response {
  code: number
  msg: string
  result: any
}

export interface Inst<T = UnData, D = UnData> extends Pick<Un, 'get' | 'post' | 'put' | 'delete'> {
  <TT = T, DD = D, R = UnResponse<TT, DD>>(config: Config<TT, DD>): Promise<R>
}
