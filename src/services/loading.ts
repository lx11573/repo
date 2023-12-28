/*
 * @Author: lyu
 * @Date: 2023-06-08 14:51:27
 * @FilePath: /own-axios/src/loading.ts
 */
import type { LoadingOptions } from './types'

const LOADING = 'loading'
const START = 'start'
const SECONDS = 1000

export class Loading {
  private queryCount!: number
  private timeout!: any
  private startTimestamp!: number
  private status!: string
  private options?: LoadingOptions
  startLoading?: () => void
  endLoading?: () => void
  delay!: number
  showtime!: number
  constructor(options?: LoadingOptions) {
    this.options = options
    this.init()
  }

  add() {
    this.queryCount++
    this.addTimeout()
  }

  del() {
    this.queryCount--
    this.stop()
  }

  setOptions(options: LoadingOptions) {
    this.options = options
  }

  private init() {
    const { startLoading, endLoading, delay = 2, showtime = 2 } = this.options ?? {}
    this.queryCount = 0
    this.timeout = null
    this.startTimestamp = 0
    this.showtime = showtime * SECONDS
    this.delay = delay * SECONDS
    this.status = START
    this.startLoading = startLoading
    this.endLoading = endLoading
  }

  destroy() {
    this.clearTimeout()
    this.endLoading?.()
    this.init()
  }

  private clearTimeout() {
    clearTimeout(this.timeout!)
  }

  private stop() {
    if (this.queryCount <= 0 && this.status === LOADING) {
      const now = Date.now()
      const diff = now - this.startTimestamp
      if (diff >= this.showtime) {
        this.destroy()
        return
      }
      setTimeout(() => this.destroy(), this.showtime - diff)
    }
  }

  private addTimeout() {
    if (this.timeout)
      return
    this.timeout = setTimeout(() => {
      if (this.queryCount > 0) {
        this.startTimestamp = Date.now()
        this.status = LOADING
        this.startLoading?.()
      }
      else {
        this.clearTimeout()
      }
    }, this.delay)
  }
}

export function createLoading(opt?: LoadingOptions) {
  let loadingInst = null
  if (loadingInst)
    return loadingInst

  loadingInst = new Loading(opt)
  return loadingInst
}
