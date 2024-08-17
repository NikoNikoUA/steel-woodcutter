import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import pic1 from "../../../../public/slider-images/img_1.jpg";
import pic2 from "../../../../public/slider-images/img_2.jpg";
import pic3 from "../../../../public/slider-images/img_3.jpg";
import pic4 from "../../../../public/slider-images/img_4.jpg";
import pic5 from "../../../../public/slider-images/img_5.jpg";
import pic6 from "../../../../public/slider-images/img_6.jpg";
import pic7 from "../../../../public/slider-images/img_7.jpg";
import pic8 from "../../../../public/slider-images/img_8.jpg";
import { useState } from "react";
import {
  SliderWrapper,
  Img,
  SliderButton,
  PicWrapper,
  NavigationWrapper,
  NavigationButton,
} from "./Slider.styled";

const PICS = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

export const Slider = () => {
  const [picIndex, setPicIndex] = useState(0);

  const showPrevPic = () => {
    setPicIndex((index) => {
      if (index === 0) {
        return PICS.length - 1;
      }
      return index - 1;
    });
  };

  const showNextPic = () => {
    setPicIndex((index) => {
      if (index === PICS.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  return (
    <>
      <SliderWrapper>
        <PicWrapper>
          {PICS.map((pic) => (
            <Img
              key={pic}
              src={pic}
              style={{ translate: `${-100 * picIndex}%` }}
            />
          ))}
        </PicWrapper>

        <SliderButton onClick={showPrevPic} style={{ left: "0" }}>
          <MdKeyboardArrowLeft />
        </SliderButton>
        <SliderButton onClick={showNextPic} style={{ right: "0" }}>
          <MdKeyboardArrowRight />
        </SliderButton>
        <NavigationWrapper>
          {PICS.map((_, index) => (
            <NavigationButton
              key={index}
              $active={index === picIndex}
              onClick={() => setPicIndex(index)}
            ></NavigationButton>
          ))}
        </NavigationWrapper>
      </SliderWrapper>
    </>
  );
};
