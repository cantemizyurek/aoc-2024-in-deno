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

function populateHeap(heap: BinaryHeap<number>, list: number[]) {
  for (const item of list) {
    heap.push(item)
  }
}

function calculateDistance(x: number, y: number) {
  return Math.abs(x - y)
}
