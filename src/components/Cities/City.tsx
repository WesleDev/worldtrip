import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        h="170px"
        w="100%"
        src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
            Londres
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            Reino Unido
          </Text>
        </Flex>
        <Image
          w="30px"
          height="30px"
          borderRadius="50%"
          objectFit="cover"
          src="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1618181157~hmac=46a6f8c1e6a252d470aab5b52485c291"
        />
      </Flex>
    </Box>
  );
}
