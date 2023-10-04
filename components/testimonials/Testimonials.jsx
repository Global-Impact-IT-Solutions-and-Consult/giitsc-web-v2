"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import TestimonialCard from "../../widgets/testimonialCard/TestimonialCard";

// styles
import { Content, Overlay, Wrapper } from "./Testimonials.Styles";

// images
import ayo from "../../public/testimonials/ayo.jpg";
import may from "../../public/testimonials/may.jpg";
import vince from "../../public/testimonials/vince.jpg";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const Testimonials = () => {
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
            testimonials {
              nodes {
                testimonials {
                  content
                  name
                  organization
                  image {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.testimonials.nodes.map(
        (item) => item.testimonials
      );
      setApiData(getResponse);
    }

    fetchServices();
  }, []);

  return (
    <>
      <Wrapper>
        <UnderlineWidget text={"What our clients are saying"} />
        <Content>
          {apiData.length > 0 && (
            <>
              {apiData.map((item, i) => (
                <TestimonialCard
                  key={i}
                  name={item.name}
                  image={item.image.sourceUrl}
                  review={item.content}
                  organization={item.organization}
                />
              ))}
            </>
          )}
          {/* <TestimonialCard
            image={ayo}
            name={"Magaret Jonas"}
            review={
              "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
            }
          />
          <TestimonialCard
            image={may}
            name={"Sharon Hillary"}
            review={
              "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
            }
            float={true}
          />
          <TestimonialCard
            image={vince}
            name={"Austin Franklyn"}
            review={
              "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
            }
          /> */}
        </Content>
      </Wrapper>
    </>
  );
};

export default Testimonials;
