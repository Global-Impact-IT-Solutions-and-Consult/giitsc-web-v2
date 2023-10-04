"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import React from "react";

// Styles
import {
  TopWrapper,
  Content,
  ContentItem,
  BottomWrapper,
  StoryContent,
  StoryBody,
  Left,
} from "./AboutComponent.Styles";
import WhyUs from "../whyUs/WhyUs";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const AboutComponent = () => {
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
            pages {
              nodes {
                aboutUs {
                  whoWeAre
                  story
                  mission
                  image {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.pages.nodes[0].aboutUs;

      // map(
      //   (item) => item.operations
      // );
      setApiData(getResponse);
    }

    fetchServices();
  }, []);
  return (
    <>
      <TopWrapper>
        <Content>
          <ContentItem>
            <div className="title">Who we are</div>
            <div className="body">{apiData.whoWeAre}</div>
          </ContentItem>
          <ContentItem>
            <div className="title">Mission</div>
            <div className="body">{apiData.mission}</div>
          </ContentItem>
        </Content>
      </TopWrapper>
      <WhyUs title={"Our values"} />
      <BottomWrapper>
        <StoryContent>
          <UnderlineWidget text={"Our Story"} />
          <StoryBody>
            <div className="left"></div>
            {/* <Left>
              <div className="imageBox">
                <Image src={apiData.image?.sourceUrl} alt="#" fill={true} />
              </div>
            </Left> */}
            <div className="right">{apiData.story}</div>
          </StoryBody>
        </StoryContent>
      </BottomWrapper>
    </>
  );
};

export default AboutComponent;
