/**
 * 计数器逻辑（纯函数，给单元测试用）
 * @param count 当前值
 * @param step 步长，默认 1
 * @param max 上限，超过回到 0
 */
export function nextCount(count: number, step = 1, max = Infinity) {
  const next = count + step
  return next > max ? 0 : next
}

/** 计数文案 */
export function countLabel(count: number) {
  return `Count is ${count}`
}
