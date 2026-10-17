import assert from 'node:assert/strict'

import { countLabel, nextCount } from '../src/utils/counter.js'

describe('counter', () => {
  it('默认加 1', () => {
    assert.equal(nextCount(0), 1)
  })

  it('支持自定义步长', () => {
    assert.equal(nextCount(2, 3), 5)
  })

  it('超过上限回到 0', () => {
    assert.equal(nextCount(9, 1, 9), 0)
  })

  it('文案包含当前值', () => {
    assert.equal(countLabel(3), 'Count is 3')
  })
})
