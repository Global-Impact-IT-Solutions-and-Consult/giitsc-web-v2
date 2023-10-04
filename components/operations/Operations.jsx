"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import React from "react";

// styles
import { Wrapper, CardHolder, CardPair } from "./Operations.Styles";

// widgets
import ServiceCard from "../../widgets/serviceCard/ServiceCard";
import OperationCard from "../../widgets/operationCard/OperationCard";

// icons
import packagee from "../../public/icons/operations/package.png";
import calendar from "../../public/icons/operations/calendar.png";
import growth from "../../public/icons/operations/growth.png";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const Operations = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const client = new ApolloClient({
        uri: "http://localhost/wp/graphql",
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            operations {
              nodes {
                operations {
                  content
                  title
                  icon {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.operations.nodes.map(
        (item) => item.operations
      );
      setApiData(getResponse);
    }

    fetchServices();
  }, []);

  return (
    <Wrapper>
      <UnderlineWidget text={"How we operate"} />
      <CardHolder>
        {apiData.length > 0 && (
          <>
            {apiData.map((item, i) => (
              <OperationCard
                key={i}
                title={item.title}
                icon={item.icon.sourceUrl}
                description={item.content}
              />
            ))}
          </>
        )}
        {/* <OperationCard
          icon={packagee}
          title={"Choose Package"}
          description={
            "We have over 5 packages you choosing one would enable us help you better"
          }
        />
        <OperationCard
          icon={calendar}
          title={"Schedule an Appointment"}
          description={
            "Should incase you find our packages to your taste please book an appointment with us. we would contact you"
          }
        />
        <OperationCard
          icon={growth}
          title={"Growth"}
          description={
            "Be ready to experience growth in all ramfications of your business"
          }
        /> */}
      </CardHolder>
    </Wrapper>
  );
};

export default Operations;
