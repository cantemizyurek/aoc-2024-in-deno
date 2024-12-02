import { BinaryHeap } from '@std/data-structures'

export function calculateDistanceBetweenLists(
  list1: number[],
  list2: number[]
): number {
  const heapList1 = new BinaryHeap<number>()
  const heapList2 = new BinaryHeap<number>()

  populateHeap(heapList1, list1)
  populateHeap(heapList2, list2)

  let distance = 0

  while (heapList1.length > 0 && heapList2.length > 0) {
    const item1 = heapList1.pop()
    const item2 = heapList2.pop()

    if (item1 && item2) {
      distance += calculateDistance(item1, item2)
    }
  }

  return distance
}

export function calculateDistanceBetweenListsPart2(
  list1: number[],
  list2: number[]
) {
  const appearanceMap = new Map<number, number>()

  for (const num of list2) {
    appearanceMap.set(num, (appearanceMap.get(num) || 0) + 1)
  }

  return list1.reduce((acc, num) => {
    return acc + num * (appearanceMap.get(num) || 0)
  }, 0)
}

function populateHeap(heap: BinaryHeap<number>, list: number[]) {
  heap.push(...list)
}

function calculateDistance(x: number, y: number) {
  return Math.abs(x - y)
}
