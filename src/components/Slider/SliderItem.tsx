import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  id: number;
  image: string;
  name: string;
  description: string;
}

export default function SliderItem({
  id,
  image,
  name,
  description,
}: CarouselItemProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      algin="center"
      justify="center"
      direction="column"
      bgImage={`url(${image})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
      bgPosition="center"
    >
      <Link href={`continent/${id}`}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {name}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            marginTop={["2", "4"]}
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
