import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
         
      </Flex>
    </Swiper>
  )
}