import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  image: string;
  flag: string;
  capital: string;
  name: string;
}

export default function City({ image, name, capital, flag }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        h="170px"
        w="100%"
        src={image}
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.500"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
          {capital}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
          {name}
          </Text>
        </Flex>
        <Image
          w="30px"
          height="30px"
          borderRadius="50%"
          objectFit="cover"
          src={flag}
        />
      </Flex>
    </Box>
  );
}
