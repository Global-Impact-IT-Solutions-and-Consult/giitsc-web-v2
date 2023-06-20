import TestimonialCard from "../../widgets/testimonialCard/TestimonialCard";

// styles
import { Content, Overlay, Wrapper } from "./Testimonials.Styles";

// images
import ayo from "../../public/testimonials/ayo.jpg";
import may from "../../public/testimonials/may.jpg";
import vince from "../../public/testimonials/vince.jpg";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const Testimonials = () => {
  return (
    <>
      <Wrapper>
        {/* <Overlay> */}
        {/* <div className="heading">What our clients are saying</div> */}
        <UnderlineWidget text={"What our clients are saying"} />
        <Content>
          <TestimonialCard
            image={ayo}
            name={"Magaret Jonas"}
            review={
              "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
            }
          />
          <TestimonialCard
            image={may}
            name={"Sharon Hillary"}
            review={
              "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
            }
            float={true}
          />
          <TestimonialCard
            image={vince}
            name={"Austin Franklyn"}
            review={
              "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
            }
          />
        </Content>
        {/* </Overlay> */}
      </Wrapper>
    </>
  );
};

export default Testimonials;
