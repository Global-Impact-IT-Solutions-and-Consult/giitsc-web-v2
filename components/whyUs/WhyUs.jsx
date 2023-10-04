"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import ValueCard from "../../widgets/valueCard/ValueCard";

// styles
import { Wrapper, Overlay, Content } from "./WhyUs.Styles";

// icons
import clock from "../../public/icons/whyUs/clock.png";
import rate from "../../public/icons/whyUs/rate.png";
import risk from "../../public/icons/whyUs/risk.png";
import work from "../../public/icons/whyUs/work.png";

// widgets
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const WhyUs = ({ title }) => {
  const [whyUs, setWhyUs] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const client = new ApolloClient({
        uri: "http://localhost/wp/graphql",
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            whyUsPlural {
              nodes {
                whyUs {
                  content
                  icon {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.whyUsPlural.nodes.map(
        (item) => item.whyUs
      );
      setWhyUs(getResponse);
    }

    fetchServices();
  }, []);

  return (
    <Wrapper>
      <UnderlineWidget text={title} />
      <Content>
        {whyUs.length > 0 && (
          <>
            {whyUs.map((item, i) => (
              <ValueCard
                key={i}
                icon={item.icon.sourceUrl}
                text={item.content}
              />
            ))}
          </>
        )}
        {/* <ValueCard icon={work} text={"Fast-paced, dynamic work environment"} />
        <ValueCard icon={rate} text={"Positive impact on the world"} />
        <ValueCard icon={risk} text={"access to specialized expertise"} />
        <ValueCard icon={clock} text={"Save cost and time on projects"} /> */}
      </Content>
    </Wrapper>
  );
};

export default WhyUs;
