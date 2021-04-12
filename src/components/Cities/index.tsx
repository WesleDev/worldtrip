import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";
import { Country } from "./types";

interface Continent {
  countries: Country[];
}

export default function Cities({ countries }: Continent) {
  return (
    <>
      <Heading fontWeight="500" font={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {countries.map((country) => (
          <City
            key={country.id}
            capital={country.capital}
            name={country.name}
            image={country.image}
            flag={country.flag}
          />
        ))}
      </Grid>
    </>
  );
}
