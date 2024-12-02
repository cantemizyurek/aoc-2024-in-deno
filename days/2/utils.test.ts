import { calculateSafeReports } from './utils.ts'
import { describe, it } from '@std/testing/bdd'
import { expect } from '@std/expect'

describe('calculateSafeReports', () => {
  it('should return 1 for a safe report', () => {
    expect(calculateSafeReports([[1, 2, 3]])).toBe(1)
  })

  it('should return 0 for an unsafe report', () => {
    expect(calculateSafeReports([[1, 2, 1]])).toBe(0)
  })
})
