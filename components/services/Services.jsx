"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// styles
import { Wrapper, CardHolder, CardPair } from "./Services.Styles";

// widgets
import ServiceCard from "../../widgets/serviceCard/ServiceCard";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

// svgs
import mobile from "../../public/services/svgs/mobile-development.svg";
import network from "../../public/services/svgs/cyber-security.svg";
import project from "../../public/services/svgs/development.svg";
import training from "../../public/services/svgs/education.svg";
import web from "../../public/services/svgs/coding.svg";
import marketing from "../../public/services/svgs/bullhorn.svg";

const Services = () => {
  const [wpServices, setWpServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const client = new ApolloClient({
        uri: "http://localhost/wp/graphql",
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            services {
              nodes {
                services {
                  summary
                  title
                  url
                  icon {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });

      const getServices = response.data.services.nodes.map(
        (service) => service.services
      );
      setWpServices(getServices);
    }

    fetchServices();
  }, []);

  // useEffect(async () => {
  //   const client = new ApolloClient({
  //     uri: "http://localhost/wp/graphql",
  //     cache: new InMemoryCache(),
  //   });

  //   const response = await client.query({
  //     query: gql`
  //       query unemployed {
  //         services {
  //           nodes {
  //             services {
  //               content
  //               title
  //               url
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   });

  //   const getServices = response.data.services.nodes.map(
  //     (service) => service.services
  //   );
  //   setWpServices(getServices);
  // }, [wpServices]);

  return (
    <Wrapper>
      <UnderlineWidget text={"Services"} />
      <CardHolder>
        {wpServices.length > 0 && (
          <>
            {wpServices.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon.sourceUrl}
                title={service.title}
                description={service.summary}
                href={service.url}
              />
            ))}
          </>
        )}
        {/* <ServiceCard
          icon={mobile}
          title={"Mobile Development"}
          description={
            "The team at Giitsc has the skills and years of experience in mobile application development"
          }
          href={"/mobile"}
        />
        <ServiceCard
          icon={network}
          title={"Networking"}
          description={
            "Our certified experts will analyze your business to determine the best way to keep your network safe from attacks"
          }
          href={"/networking"}
        />
        <ServiceCard
          icon={project}
          title={"Project Management"}
          description={
            "We have the best team of project managers with vast experience in project management & consulting"
          }
          href={"/management"}
        />

        <ServiceCard
          icon={training}
          title={"Corporate Training"}
          description={
            "We have a unique training that will help you as an individual, organizations and government agencies in reaching your potentials"
          }
          href={"/training"}
        />
        <ServiceCard
          icon={web}
          title={"Web Development"}
          description={
            "Our website development professionals recognize the value of solid information architecture design and integrative branding"
          }
          href={"/web"}
        />

        <ServiceCard
          icon={marketing}
          title={"Digital Marketing"}
          description={
            "Digital marketing is the delivery of advertisements through digital channels like search engines, websites, social media, email, and mobile apps."
          }
          href={"/marketing"}
        /> */}
      </CardHolder>
    </Wrapper>
  );
};

export default Services;
