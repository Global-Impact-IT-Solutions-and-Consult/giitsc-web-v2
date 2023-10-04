"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Link from "next/link";

// styles
import { Wrapper, Content, Top, Bottom } from "./Footer.Styles";

const Footer = () => {
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
            footer(id: "158", idType: DATABASE_ID) {
              footers {
                address
                company {
                  link
                  title
                }
                services {
                  link
                  title
                }
                socials {
                  link
                  title
                }
                copyright
              }
            }
          }
        `,
      });

      const getResponse = response.data.footer.footers;

      setApiData(getResponse);
    }

    fetchServices();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Top>
          <div className="pair">
            <div className="address">Address</div>
            <div className="bottom">{apiData.address}</div>
          </div>
          {/* Company */}
          <div className="pair">
            <div className="heading">Company</div>
            <div className="bottom">
              <ul>
                {apiData.company?.map((item, i) => (
                  <li key={i}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Services */}
          <div className="pair">
            <div className="heading">Services</div>
            <div className="bottom">
              <ul>
                {apiData.services?.map((item, i) => (
                  <li key={i}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Socials */}
          <div className="pair">
            <div className="heading">Socials</div>
            <div className="bottom">
              <ul>
                {apiData.socials?.map((item, i) => (
                  <li key={i}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Top>
        <Bottom className="text-white">
          {apiData.copyright}
          {/* All Rights Reserved */}
        </Bottom>
      </Content>
    </Wrapper>
  );
};

export default Footer;
