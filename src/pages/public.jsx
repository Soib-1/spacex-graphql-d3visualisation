import Header from "components/layout/Header";
import SomeImage from "components/SomeImage";
import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Box, Center, Text, Wrap } from "@chakra-ui/layout";

const Public = (launches) => {
  console.log("launches", launches);

  return (
    <Wrap>
      {launches.launches.map((launch) => {
        return (
          <Box boxShadow="sm" p="8" m="8" w="lg" align="center">
            <Text fontWeight="bold" fontSize="lg">
              {launch.launch_date_local}
            </Text>
            {launch.rocket.second_stage.payloads.map((payload) => {
              return <p>{payload.payload_mass_kg}</p>;
            })}
          </Box>
        );
      })}
    </Wrap>
  );
};

export default Public;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://api.spacex.land/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 100) {
          launch_date_local
          rocket {
            second_stage {
              payloads {
                payload_mass_kg
              }
            }
          }
        }
      }
    `,
  });
  console.log(data);
  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
