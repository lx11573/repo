import type { REGISTER_STEP } from './enum'

type RegisterStep = typeof REGISTER_STEP
type RegisterKey = keyof RegisterStep
type Active<T extends RegisterKey = RegisterKey> = {
  [K in T]: RegisterStep[K]
}[T]

export interface BaseProps {
  isPerson?: boolean
}
export interface FlowProps extends BaseProps {
  active: Active
}
export interface BindPhoneProps extends BaseProps {
  form: any
}
export interface UploadProps extends BaseProps {
  /** MB */
  title?: string
}
