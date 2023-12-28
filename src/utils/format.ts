import { commafy, isEmpty, isNumber, toDateString } from 'xe-utils-es'

type TimeFormat = 'HH:mm:ss' | 'yyyy-MM-dd' | 'yyyy-MM-dd HH:mm:ss' | 'yyyy-MM-dd hh:mm:ss.SSS'
/**
 * 时间格式化
 * @param date 待格式化的时间
 * @param format 格式
 */
export function timeFormat(date: Nil, format?: TimeFormat): Nil
export function timeFormat(date: string | number | Date, format?: TimeFormat): string
export function timeFormat(date: string | number | Date | Nil, format = 'yyyy-MM-dd') {
  if (isEmpty(date))
    return date
  return toDateString(date, format, {})
}
/**
 * 金额格式化
 * @param amt 待格式化金额
 * @param digits 小数保留位数
 */
export function amtFormat(amt: string | number, digits?: number): string
export function amtFormat(amt: Nil, digits?: number): Nil
export function amtFormat(amt: string | number | Nil, digits = 2) {
  if (!isNumber(amt) && isEmpty(amt))
    return amt
  return commafy(amt, { digits })
}
export function percentFormat() {

}
