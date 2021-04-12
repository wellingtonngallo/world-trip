import { Box, Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { SwiperComponent } from "../components/Swiper";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Stack direction="column">
        <Box align="center" margin="20">
          <Image src="travel-types.svg" alt="Lazer nas viagens"/>
        </Box>
        <Flex justifyContent="center">
          <Box w="90px" border="1px" borderColor="gray.100"/>
        </Flex>
        <SwiperComponent/>
      </Stack>
    </>
  )
}
