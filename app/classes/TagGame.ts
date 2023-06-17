import { m } from "framer-motion"
import { construct2DArray, indexOfMatrix, shuffleArray } from "../utils"

export class TagGame {
  gameMatrix: (number | null)[][]

  constructor(volume: number) {
    const set = new Set<number | null>()
    const maxSize = Math.pow(volume, 2) - 1

    while (set.size < maxSize) {
      set.add(Math.floor(Math.random() * maxSize) + 1)
    }
    set.add(null)

    const oneDimensionalArray: (number | null)[] = Array.from(set)
    const shuffled1DArray = shuffleArray(oneDimensionalArray)
    const result = construct2DArray(shuffled1DArray, volume)

    this.gameMatrix = result
  }

  move(matrix: (number | null)[][], element: number | null) {
    const [colOfNull, rowOfNull] = indexOfMatrix(matrix, null)
    const [colOfEl, rowOfEl] = indexOfMatrix(matrix, element)
    console.log([colOfEl, rowOfEl])
    console.log(matrix)

    if (colOfNull - colOfEl === 1 && rowOfNull - rowOfEl === 0) {
      // return console.log("left")
      this.gameMatrix[colOfNull][rowOfNull] = element
      this.gameMatrix[colOfEl][rowOfEl] = null
    }

    if (colOfEl - colOfNull === 1 && rowOfNull - rowOfEl === 0) {
      return console.log("right")
    }

    if (rowOfEl - rowOfNull === 1 && colOfEl === colOfNull) {
      return console.log("down")
    }

    if (rowOfNull - rowOfEl === 1 && colOfEl === colOfNull) {
      return console.log("up")
    }

    console.log("no pos")

    // console.log([x, y])
  }
}
