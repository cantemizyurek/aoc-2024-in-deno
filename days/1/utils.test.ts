import { calculateDistanceBetweenLists } from './utils.ts'
import { describe, it } from '@std/testing/bdd'
import { expect } from '@std/expect'

describe('calculateDistanceBetweenLists', () => {
  it('should return 0 for the same list', () => {
    expect(calculateDistanceBetweenLists([1, 2, 3], [1, 2, 3])).toBe(0)
  })

  it('should return 1 for lists with one different element', () => {
    expect(calculateDistanceBetweenLists([1, 2, 3], [1, 2, 4])).toBe(1)
  })

  it('should return 2 for total difference of the list is 2', () => {
    expect(calculateDistanceBetweenLists([1, 2, 3], [1, 2, 5])).toBe(2)
  })
})
