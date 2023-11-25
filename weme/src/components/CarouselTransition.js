import { Carousel } from "@material-tailwind/react";
import ppt1 from "../asset/img/ppt1.png";
import ppt2 from "../asset/img/ppt2.png";
import ppt3 from "../asset/img/ppt3.png";


export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 1 }}>
      <img
        src={ppt1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={ppt2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={ppt3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}