import Image from "next/image";

// Styles
import { Bottom, Top, Wrapper } from "./ValueCard.Styles";

const ValueCard = ({ icon, text }) => {
  return (
    <Wrapper>
      <Top>
        <Image src={icon} alt="logo" width={40} height={40} />
      </Top>
      <Bottom>
        <div className="text">{text}</div>
      </Bottom>
    </Wrapper>
  );
};

export default ValueCard;
