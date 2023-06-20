import Image from "next/image";
import ValueCard from "../../widgets/valueCard/ValueCard";

// styles
import { Wrapper, Overlay, Content } from "./WhyUs.Styles";

// icons
import clock from "../../public/icons/whyUs/clock.png";
import rate from "../../public/icons/whyUs/rate.png";
import risk from "../../public/icons/whyUs/risk.png";
import work from "../../public/icons/whyUs/work.png";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const WhyUs = ({ title }) => {
  return (
    <Wrapper>
      {/* <Overlay> */}
      {/* <div className="heading">{title}</div> */}
      <UnderlineWidget text={title} />
      <Content>
        <ValueCard icon={work} text={"Fast-paced, dynamic work environment"} />
        <ValueCard icon={rate} text={"Positive impact on the world"} />
        <ValueCard icon={risk} text={"access to specialized expertise"} />
        <ValueCard icon={clock} text={"Save cost and time on projects"} />
      </Content>
      {/* </Overlay> */}
    </Wrapper>
  );
};

export default WhyUs;
