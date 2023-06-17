"use client"

import { Button, Flex, Grid, Select } from "@chakra-ui/react"
import { useState } from "react"
import { TagGame } from "./classes/TagGame"
import { v4 } from "uuid"

import { ColorName, VolumeName } from "./enums"

const Page = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [volume, setVolume] = useState<{ name: VolumeName; value: number }>({
    name: VolumeName.four,
    value: 3,
  })
  const [gameMatrix, setGameMatrix] = useState<(number | null)[][]>([])
  const [color, setColor] = useState(ColorName.green as string)
  const tagGame = new TagGame(volume.value)

  const onStartGame = () => {
    setIsGameStarted(true)
    setGameMatrix(tagGame.gameMatrix)
  }

  const onMove = (element: number | null) => {
    tagGame.move(tagGame.gameMatrix, element)
  }
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
    >
      <Flex w={"200px"} mb={"20px"}>
        <Select
          onChange={(e) => {
            setVolume({ name: volume.name, value: parseInt(e.target.value) })
          }}
        >
          <option value={3}>{VolumeName.three}</option>
          <option value={4}>{VolumeName.four}</option>
          <option value={5}>{VolumeName.five}</option>
          <option value={6}>{VolumeName.six}</option>
        </Select>

        <Select
          onChange={(e) => {
            setColor(e.target.value)
          }}
        >
          <option value={ColorName.green}>Green</option>
          <option value={ColorName.red}>Red</option>
          <option value={ColorName.gray}>Gray</option>
        </Select>
      </Flex>
      <Flex
        w={"500px"}
        h={"500px"}
        borderRadius={"md"}
        borderWidth={2}
        borderColor={"gray.500"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"5px"}
      >
        {!isGameStarted ? (
          <Button colorScheme={"teal"} onClick={onStartGame}>
            Start The Game!
          </Button>
        ) : (
          <Grid
            templateColumns={`repeat(${volume.value}, 1fr)`}
            gridAutoRows={"1fr"}
            w={"100%"}
            h={"100%"}
            gap={1}
          >
            {gameMatrix.map((row, index) => (
              <Grid key={v4()} gap={1}>
                {row.map((cellId: any) => {
                  return (
                    <Flex
                      key={v4()}
                      w={"100%"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderWidth={`${cellId ? 1 : 0}`}
                      borderColor={"gray.700"}
                      borderRadius={"md"}
                      bgColor={`${cellId ? color : "white"}`}
                      color={"white"}
                      fontSize={"3xl"}
                      onClick={() => onMove(cellId)}
                    >
                      {cellId ? cellId : 0}
                    </Flex>
                  )
                })}
              </Grid>
            ))}
          </Grid>
        )}
      </Flex>
      <Flex w={"100%"} justifyContent={"center"} mt={3}>
        <Button onClick={onStartGame}>New Game</Button>
      </Flex>
    </Flex>
  )
}

export default Page
