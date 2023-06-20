import Image from "next/image";

// Styles
import { Wrapper, Top, Bottom } from "./ServiceCard.Styles";

const ServiceCard = ({ icon, title, description, href }) => {
  return (
    <Wrapper href={href}>
      <Top>
        <div className="icon">
          <Image src={icon} alt="logo" />
        </div>
        {/* <Image src={image} alt="logo" /> */}
      </Top>
      <Bottom>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </Bottom>
    </Wrapper>
  );
};

export default ServiceCard;
