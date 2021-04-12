import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface CarouselProps {
  continents: Continent[];
}

export default function Slider({ continents }: CarouselProps) {
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
        {continents.map(continent => (
          <SwiperSlide key={`slide-${continent.id}`}>
            <SliderItem
              id={continent.id}
              name={continent.name}
              image={continent.carrouselImage}
              description={continent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
