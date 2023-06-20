import Image from "next/image";

// styles
import { Wrapper, Top, Bottom } from "./TestimonialCard.Styles";

// icon
import quote from "../../public/icons/testimonials/qoute.png";

const TestimonialCard = ({ image, name, review, float }) => {
  return (
    <Wrapper float={float}>
      <div className="icon">
        <Image src={quote} alt="" width="45" height="30" />
      </div>
      <div className="text">{review}</div>
      <div className="bottom">
        <div className="imgHolder">
          <Image src={image} alt="logo" width="70" height="70" />
        </div>
        <div className="bottomPair">
          <div className="name">{name}</div>
          <div className="title">{name}</div>
        </div>
      </div>
      {/* <Top>
        <div className="image" image={image}>
        <Image src={image} alt="logo" />
        </div>
      </Top>
      <Bottom>
        <div className="review">{review}</div>
      </Bottom>
      <div className="name">{name}</div> */}
    </Wrapper>
  );
};

export default TestimonialCard;
