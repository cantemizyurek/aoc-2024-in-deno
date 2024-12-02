import {
  calculateDistanceBetweenLists,
  calculateDistanceBetweenListsPart2,
} from './utils.ts'

const input = await Deno.readTextFile(new URL('./input.txt', import.meta.url))

const numberPairs = input
  .trim()
  .split('\n')
  .map((line) => line.split(/\s+/).map(Number))

const list1 = numberPairs.map((pair) => pair[0])
const list2 = numberPairs.map((pair) => pair[1])

console.log(calculateDistanceBetweenLists(list1, list2))
console.log(calculateDistanceBetweenListsPart2(list1, list2))
