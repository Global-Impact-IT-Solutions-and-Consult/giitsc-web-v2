"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import React from "react";
import Image from "next/image";

import {
  Content,
  Left,
  LeftContent,
  Right,
  Wrapper,
} from "./ContactComponent.Styles";

// widgets
import InputWidget from "../../widgets/inputWidget/InputWidget";
import ButtonWidget from "../../widgets/buttonWidget/ButtonWidget";

// image
// import contactImage from "../../public/images/contact-us/contact-image.png";

// icons
import nav from "../../public/icons/contact-us/nav.png";
import dial from "../../public/icons/contact-us/dial.png";

const ContactComponent = () => {
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
    <>
      <Wrapper>
        <Content>
          <Left>
            <LeftContent>
              <div className="bigText">{apiData.title}</div>
              <div className="introText">{apiData.tag_line}</div>
              <div className="imageBox" />
              <div className="addressHolder">
                {apiData.company?.map((item, i) => (
                  <div key={i} className="address">
                    <div className="name">HOUSTON TEXAS, USA</div>
                    <div className="location">
                      <div className="pair">
                        <Image src={nav} alt="" width={15} />
                        0103 Lansdale Dr, Houston, TX 77036, USA
                      </div>
                    </div>
                    <div className="phone">
                      <div className="pair">
                        <Image src={dial} alt="" width={15} />
                        +1713-518-6373
                      </div>
                    </div>
                  </div>
                ))}
                <div className="address">
                  <div className="name">HOUSTON TEXAS, USA</div>
                  <div className="location">
                    <div className="pair">
                      <Image src={nav} alt="" width={15} />
                      0103 Lansdale Dr, Houston, TX 77036, USA
                    </div>
                  </div>
                  <div className="phone">
                    <div className="pair">
                      <Image src={dial} alt="" width={15} />
                      +1713-518-6373
                    </div>
                  </div>
                </div>
                <div className="address">
                  <div className="name">LAGOS , NIGERIA</div>
                  <div className="location">
                    <div className="pair">
                      <Image src={nav} alt="" width={15} />
                      14, Amoo Street, By Rainoil Filling Station Agege Ogba
                    </div>
                  </div>
                  <div className="phone">
                    <div className="pair">
                      <Image src={dial} alt="" width={15} />
                      +234 905-744-4453
                    </div>
                  </div>
                </div>
                <div className="address">
                  <div className="name">HONG KONG, CHINA</div>
                  <div className="location">
                    <div className="pair">
                      <Image src={nav} alt="" width={15} />
                      23A, KUNG TIN Hong Kong, Hong Kong
                    </div>
                  </div>
                  <div className="phone">
                    <div className="pair">
                      <Image src={dial} alt="" width={15} />
                      +86-518-6373-4664
                    </div>
                  </div>
                </div>
              </div>
            </LeftContent>
          </Left>
          <Right>
            <form action="">
              <InputWidget
                label={"First Name"}
                width={"550px"}
                height={"60px"}
                placeholder={"First Name"}
                name={"firstName"}
                type={"text"}
                required={true}
              />
              <InputWidget
                label={"Email Address"}
                width={"550px"}
                height={"60px"}
                placeholder={"youremail@email.com"}
                name={"email"}
                type={"text"}
                required={true}
              />
              <InputWidget
                label={"Company Name"}
                width={"550px"}
                height={"60px"}
                placeholder={"Company Name"}
                name={"company"}
                type={"text"}
                required={true}
              />
              <InputWidget
                label={"Phone Number"}
                width={"550px"}
                height={"60px"}
                placeholder={"Phone Number"}
                name={"phone"}
                type={"text"}
                required={true}
              />
              <InputWidget
                label={"Message"}
                width={"550px"}
                height={"180px"}
                // placeholder={"Message"}
                name={"message"}
                type={"text"}
                required={true}
              />
              <ButtonWidget
                width={"550px"}
                height={"60px"}
                color={"#011729"}
                text={"Send"}
              />
            </form>
          </Right>
        </Content>
      </Wrapper>
    </>
  );
};

export default ContactComponent;
