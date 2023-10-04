"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import pm from "../public/images/servicePage/pm.png";
import Pricing from "../components/pricing/Pricing";
import UnderlineWidget from "../widgets/underlineWidget/UnderlineWidget";

// styles
import { Content, Wrapper } from "../components/pricing/Pricing.Styles";
import PricingCard from "../widgets/pricingCard/PricingCard";

const management = () => {
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
            service(id: "24", idType: DATABASE_ID) {
              services {
                content
                title
                image {
                  sourceUrl
                }
                pricing {
                  description
                  price
                  title
                  benefits {
                    benefit
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.service.services;

      setApiData(getResponse);
    }

    fetchServices();
  }, []);
  return (
    <>
      <ServicePage
        title={apiData.title}
        image={apiData.image?.sourceUrl}
        description={apiData.content}
      />
      <Wrapper>
        <UnderlineWidget text={"Pricing"} />
        <Content>
          {apiData.pricing?.length <= 0 ? (
            <span>No price list available yet</span>
          ) : (
            <>
              {apiData.pricing?.map((item, i) => (
                <PricingCard
                  key={i}
                  href={item.link}
                  title={item.title}
                  subText={item.description}
                  price={item.price}
                  description={[item.benefits]}
                />
              ))}
            </>
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export default management;
