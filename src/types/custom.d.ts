type Trigger = 'blur' | 'change' | 'input'
interface Rule {
  required?: boolean
  type?: string
  message?: string
  min?: number
  max?: number
  trigger?: Trigger | Array<Trigger>
  pattern?: RegExp
  validator?: (
    rule: Rule,
    value: any,
    callback: (params?: Error | string) => void
  ) => void | boolean
}
declare namespace Form {
  type Rules<FormItem = any> = {
    [P in keyof T]: Rule[] | Rule;
  }
}
