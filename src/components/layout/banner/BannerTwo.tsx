import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "../../../../public/images/banner/anime-one.png";
import Two from "../../../../public/images/banner/anime-two.png";
import Three from "../../../../public/images/banner/anime-three.png";
import Four from "../../../../public/images/banner/anime-four.png";
import Five from "../../../../public/images/banner/anime-five.png";

import TypedText from "./TypedText";

const BannerTwo = () => {
  const strings = ["facebook posts", "twitter posts", "instagram posts"];

  return (
    <section className="section banner-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="banner-two__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="h1 text-light">Revolutionizing Creativity and Innovation with</h1>
              <h2 className="h1">
                <span id="textTyped">
                  {/* <TypedText
                    strings={strings}
                    loop={true}
                    startDelay={50}
                    backDelay={1000}
                    backSpeed={50}
                  /> */}
                  Generative AI 
                </span>
              </h2>
              <p className="text-lg text-light">
                Empowering AI-driven creativity through ChatGPT, NLP, and LangChain innovation.
              </p>
              <div className="section__content-cta">
                <Link href="/res-genai" className="btn btn--senary">
                  Explore Generative AI
                </Link>
                {/* <p>7-day trial. No credit card required.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        {/* <Image src={One} alt="Image" className="one" /> */}
        {/* <Image src={Two} alt="Image" className="two" /> */}
        {/* <Image src={Three} alt="Image" className="three" /> */}
        {/* <Image src={Four} alt="Image" className="four" /> */}
        {/* <Image src={Five} alt="Image" className="five" /> */}
      </div>
    </section>
  );
};

export default BannerTwo;
