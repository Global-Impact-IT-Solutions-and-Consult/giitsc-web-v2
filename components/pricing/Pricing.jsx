import React from "react";

// styles
import { Content, Wrapper } from "./Pricing.Styles";
import PricingCard from "../../widgets/pricingCard/PricingCard";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const Pricing = ({
  c1_href,
  c1_title,
  c1_subText,
  c1_price,
  c1_description,
  c2_href,
  c2_title,
  c2_subText,
  c2_price,
  c2_description,
  c3_href,
  c3_title,
  c3_subText,
  c3_price,
  c3_description,
}) => {
  return (
    <>
      <Wrapper>
        <UnderlineWidget text={"Pricing"} />
        <Content>
          <PricingCard
            href={c1_href}
            title={c1_title}
            subText={c1_subText}
            price={c1_price}
            description={c1_description}
          />
          <PricingCard
            href={c2_href}
            title={c2_title}
            subText={c2_subText}
            price={c2_price}
            description={c2_description}
          />
          <PricingCard
            href={c3_href}
            title={c3_title}
            subText={c3_subText}
            price={c3_price}
            description={c3_description}
          />
        </Content>
      </Wrapper>
    </>
  );
};

export default Pricing;
