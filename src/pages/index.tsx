import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Slider from "../components/Slider";
import db from '../../db.json';

export default function Home() {
  const { continents } = db;
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </Flex>
  );
}
