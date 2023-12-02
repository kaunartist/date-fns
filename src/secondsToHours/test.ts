/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import { secondsToHours } from './index.js'

describe('secondsToHours', () => {
  it('converts seconds to hours', () => {
    assert(secondsToHours(3600) === 1)
    assert(secondsToHours(7200) === 2)
  })

  it('uses floor rounding', () => {
    assert(secondsToHours(3601) === 1)
    assert(secondsToHours(3599) === 0)
  })

  it('handles border values', () => {
    assert(secondsToHours(3600.5) === 1)
    assert(secondsToHours(0) === 0)
  })
})
