import { Flex, Image } from "@chakra-ui/react"

export const Header = (): JSX.Element => {
  return (
    <Flex
      width="100%"
      as="header"
      height="100"
      justifyContent="center"
    >
      <Image src="header.svg"></Image>
    </Flex>
  )
}