import { calculateSafeReports } from './utils.ts'

const input = await Deno.readTextFile(new URL('./input.txt', import.meta.url))

const reports = input
  .trim()
  .split('\n')
  .map((line) => line.split(/\s+/).map(Number))

console.log(calculateSafeReports(reports))
