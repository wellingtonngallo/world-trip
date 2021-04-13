import { Box, Divider, Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { SwiperComponent } from "../components/Swiper";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Stack direction="column">
        <Box align="center">
          <Image src="travel-types.svg" alt="Lazer nas viagens" margin="20"/>
          <Divider w="90px" border="1px" borderColor="gray.100"/>
        </Box>
      </Stack>
      <SwiperComponent/>
    </>
  )
}
