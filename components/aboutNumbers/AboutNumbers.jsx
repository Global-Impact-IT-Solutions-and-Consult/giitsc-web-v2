"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import React from "react";

// styles
import { Wrapper, Content, Top, Bottom } from "./AboutNumbers.Styles";

const AboutNumbers = () => {
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
            aboutNumbers {
              nodes {
                aboutNumbers {
                  clientBase
                  partners
                  completedProjects
                  content
                }
              }
            }
          }
        `,
      });

      setApiData(response.data.aboutNumbers.nodes[0].aboutNumbers);
    }

    fetchServices();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Top>
          {apiData.content}
          {/* Since 2013,Global Impact I.T Solutions & Consult (GIITSC) has remained
          on the cutting edge of technology while building a reputation as a
          trusted resource across Nigeria, USA and China.
          <br />
          Our mission is to serve as a technology consultant providing solutions
          to businesses of all sizes. Our certified experts partners with our
          customers to develop customized, cost-effective solutions that reduce
          expense, increase efficiency, and provide the competitive advantage
          you need to take your business to the next level. We combine
          creativity, innovation, and service, with a thirst for knowledge to
          stay current in the ever changing world of technology.
          <br />
          At GITSC, we have the resources to handle all your I.T needs,
          providing the peace of mind you need to concentrate on running your
          business. */}
        </Top>
        <Bottom>
          <div className="pair">
            <div className="pairTop">{apiData.completedProjects}</div>
            <div className="pairBottom">Completed Projects</div>
          </div>
          <div className="pair">
            <div className="pairTop">{apiData.clientBase}</div>
            <div className="pairBottom">Client Base</div>
          </div>
          <div className="pair">
            <div className="pairTop">{apiData.partners}</div>
            <div className="pairBottom">Partners</div>
          </div>
        </Bottom>
      </Content>
    </Wrapper>
  );
};

export default AboutNumbers;
