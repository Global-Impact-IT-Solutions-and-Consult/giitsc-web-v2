"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// styles
import { Content, Overlay, Wrapper } from "./Partners.Styles";

// Components
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

// images
import oracle from "../../public/icons/partners/oracle.png";
import ms from "../../public/icons/partners/ms.png";
import huawei from "../../public/icons/partners/huawei.png";
import dell from "../../public/icons/partners/dell.png";
import ibm from "../../public/icons/partners/ibm.png";
import vm from "../../public/icons/partners/vm.png";
import hp from "../../public/icons/partners/hp.png";
import cisco from "../../public/icons/partners/cisco.png";

const Partners = () => {
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
            partners {
              nodes {
                partners {
                  title
                  logo {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.partners.nodes.map(
        (item) => item.partners
      );
      setApiData(getResponse);
    }

    fetchServices();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="title">
          <UnderlineWidget text={"Partners"} />
        </div>
        <Content>
          {apiData.length > 0 && (
            <>
              {apiData.map((item, i) => (
                <Image
                  key={i}
                  src={item.logo.sourceUrl}
                  alt={item.title}
                  // fill={true}
                  width={86}
                  height={36}
                />
              ))}
            </>
          )}
          {/* <Image src={vm} alt="vmware" width="143" height="36" />
          <Image src={cisco} alt="cisco" width="69" height="41" />
          <Image src={oracle} alt="oracle" width="155" height="36" />
          <Image src={ibm} alt="ibm" width="79" height="29" />
          <Image src={huawei} alt="huawei" width="60" height="32" />
          <Image src={hp} alt="hp" width="39" height="39" />
          <Image src={ms} alt="microsoft" width="101" height="38" />
          <Image src={dell} alt="dell" width="36" height="36" /> */}
        </Content>
      </Wrapper>
    </>
  );
};

export default Partners;
