import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Product Designer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            {/* <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        /> */}
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          Hello! I'm Vaibhav, and I'm passionate about helping small businesses
          grow and thrive online. With a background in creating and maintaining
          modern websites and applications, I'm here to be your digital partner
          in success.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          My journey is driven by a love for finding innovative solutions to the
          unique challenges faced by startups and small businesses. Whether it's
          optimizing your online presence, streamlining processes, or designing
          user-friendly interfaces, I'm dedicated to solving problems and
          turning obstacles into opportunities.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          Aside from my professional pursuits, I have a deep personal love for
          music. Listening to songs not only makes me feel alive but also boosts
          my mood. I believe that just as music has the power to uplift the
          soul, the right digital strategy can elevate your business to new
          heights.
          <br />
          <br />
          Let's work together to harmonize your business's online presence and
          create a symphony of success. I'm excited to be your partner on this
          exciting journey!
        </Div>
        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
