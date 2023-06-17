export const construct2DArray = (original: (number | null)[], size: number) => {
  if (original.length !== size * size) return []
  let result = []
  let arr = []
  for (let i = 0; i < original.length + 1; i++) {
    arr.push(original[i])
    if (arr.length === size) {
      result.push(arr)
      arr = []
    }
  }

  console.log(result)
  return result
}

export const shuffleArray = (arr: (number | null)[]) => {
  const shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled
}

export const indexOfMatrix = (
  matrix: (number | null)[][],
  element: number | null
) => {
  const colOfEl = matrix.findIndex((row) => row.includes(element))
  const rowOfEl = matrix[colOfEl].indexOf(element)

  return [colOfEl + 1, rowOfEl + 1]
}
