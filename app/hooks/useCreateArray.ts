// import { construct2DArray, shuffleArray } from "../utils"

// export const useCreateArray = (dimension: number): (number | null)[][] => {
//   const set = new Set<number | null>()
//   const maxSize = Math.pow(dimension, 2) - 1

//   while (set.size < maxSize) {
//     set.add(Math.floor(Math.random() * maxSize) + 1)
//   }

//   set.add(null)

//   const oneDimensionalArray: (number | null)[] = Array.from(set)

//   const shuffled1DArray = shuffleArray(oneDimensionalArray)

//   const result = construct2DArray(shuffled1DArray, dimension)

//   return result
// }
