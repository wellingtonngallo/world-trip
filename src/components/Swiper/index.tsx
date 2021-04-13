import { Flex, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const SwiperComponent = (): JSX.Element => {
  return (
    <Swiper
      style={{height: '100%', width: '100%', marginTop: 32}}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Flex
          background="url(/Europa.png)"
          h="400"
          bgSize="120%"
          bgPosition="center"
          bgRepeat="no-repeat"
          align="center"
          justify="center"
          direction="column"
        >
          <Text fontSize="40" color="white">Europa</Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
        background="url(/Europa.png)"
          h="400"
          bgSize="120%"
          bgPosition="center"
          bgRepeat="no-repeat"
          align="center"
          justify="center"
          direction="column"
        >
          <Text fontSize="40" color="white">XX</Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}