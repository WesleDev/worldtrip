import {
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface DetailsProps {
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
}

export default function Content({ text, numberOfCountries, numberOfLanguages }: DetailsProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={["5", "16", "20"]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {text}
      </Text>

      <Flex align="center" justify="space-between">
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {numberOfCountries}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            países
          </Text>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {numberOfLanguages}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            linguas
          </Text>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            27
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            cidades +100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  Paris, Europa, China, Canadá, Chile
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
