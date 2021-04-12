import { Flex } from "@chakra-ui/react";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import db from "../../../db.json";

export interface Country {
  id: number;
  image: string;
  name: string;
  capital: string;
  flag: string;
}

interface ContinentProps {
  id: number;
  name: string;
  description: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  jumbotronImage: string;
  carrouselImage: string;
  countries: Country[];
}

export default function Continent() {
  const router = useRouter();
  const [continent, setContinent] = useState<ContinentProps | null>(null);
  const { continents } = db;

  const { id } = router.query;

  useEffect(() => {
    const selectedContinent = continents.find(
      (continent) => continent.id === Number(id)
    );
    setContinent(selectedContinent);
  }, [id]);

  return (
    <Flex direction="column">
      <Header />
      {continent && (
        <ContinentBanner
          image={continent.jumbotronImage}
          name={continent.name}
        />
      )}
      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        {continent && (
          <Content
            text={continent.text}
            numberOfCountries={continent.numberOfCountries}
            numberOfLanguages={continent.numberOfLanguages}
          />
        )}
        {continent && <Cities countries={continent.countries} />}
      </Flex>
    </Flex>
  );
}
