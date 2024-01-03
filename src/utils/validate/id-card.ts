const aCity: Record<string, any> = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门',
  91: '国外',
}
export function isIdCardCode(sCode: string) {
  if (!sCode)
    return false

  let sId = sCode.toString()
  let iSum = 0
  if (!/^\d{17}(\d|x)$/i.test(sId))
    return false
  sId = sId.replace(/x$/i, 'a')
  const provinceCode = sId.slice(0, 2)
  if (!aCity[provinceCode])
    return false

  for (let i = 17; i >= 0; i--)
    iSum += (2 ** i % 11) * Number.parseInt(sId.charAt(17 - i), 11)

  return ((iSum % 11) === 1)
}
