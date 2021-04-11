import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider() {
  return (
    <Flex
      w="100%"
      maxWidth="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["258px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            algin="center"
            justify="center"
            direction="column"
            bgImage="url('/europe.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link hrf="/continent/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  marginTop={["2", "4"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            algin="center"
            justify="center"
            direction="column"
            bgImage="url('/europe.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  marginTop={["2", "4"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
