import Marquee from "react-fast-marquee";
import cannon from "../../../public/sponsor/canon_logo.jpg"
import kikko from "../../../public/sponsor/kikko-160x80.png"
import leo from "../../../public/sponsor/leo_baby-160x80.png"
import sony from "../../../public/sponsor/sony_logo-160x80.jpg"
import fb from "../../../public/sponsor/fb.png"
import twitter from "../../../public/sponsor/twitter.png"
import Youtube from "../../../public/sponsor/youtube.png"

const Sponsor = () => {

    return (
      <div className="container my-5">
        <Marquee className="text-danger d-flex justify-content-between gap-5" speed={100}>
         <img src={cannon} alt="" />
         <img className="mx-5" src={kikko} alt="" />
         <img className="mx-5" src={leo} alt="" />
         <img src={sony} alt="" />
         <img className="mx-5" src={cannon} alt="" />
         <img src={fb} alt="" />
         <img className="mx-5" src={twitter} alt="" />
         <img src={Youtube} alt="" />
        </Marquee>
      </div>
    );
};

export default Sponsor;