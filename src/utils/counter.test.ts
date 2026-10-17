import { describe, expect, it } from 'vitest'

import { countLabel, nextCount } from './counter'

describe('counter', () => {
  it('默认加 1', () => {
    expect(nextCount(0)).toBe(1)
  })

  it('支持自定义步长', () => {
    expect(nextCount(2, 3)).toBe(5)
  })

  it('超过上限回到 0', () => {
    expect(nextCount(9, 1, 9)).toBe(0)
  })

  it('文案包含当前值', () => {
    expect(countLabel(3)).toBe('Count is 3')
  })
})
