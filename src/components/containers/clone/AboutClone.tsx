import React from "react";
import Link from "next/link";
import Image from "next/image";
import Thumb from "../../../../public/images/about-thumb.jpg";

const AboutClone = () => {
  return (
    <section className="section clone about-main">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="about__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image src={Thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="clone__content section__content"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h2 className="h2">Think AI, Think Us</h2>
              <div className="paragraph">
                <p className="fw-5 text-lg">
                  we create innovative, ethical solutions that empower your future success.
                </p>
                <p>
                  In an age of fast-evolving technology, where AI goes beyond buzzwords, Mindlytic AI Studio stands out. With a bold vision to enhance human cognition and create seamless connections to the world, we focus on placing humanity at the heart of our work, aiming to redefine how businesses innovate and excel.
                </p>
                <p>
                  At the core of our philosophy is a human-first approach, ensuring our technology adapts to your needs, creating AI that understands and anticipates your future requirements.
                </p>
                <p>
                  As the world advances in AI digitalization, Mindlytic AI stands as a pioneer, not a spectator. We envision a future where businesses leverage AI to empower their workforce, driving growth and innovation. Our mission is to make AI accessible to everyone, creating technology that understands humans as deeply as we understand it. Join us on this transformative journey toward a smarter, more efficient tomorrow with Mindlytic AI Studio.
                </p>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Innovative 
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Ethical
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Empower
                </li>
              </ul>
              {/* <div className="tour__content-cta">
                <div className="trust">
                  <div className="review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="fw-7">Rated Excellent on Trustpilot</p>
                </div>
                <div className="action">
                  <Link href="/contact-us" className="btn btn--primary">
                    request A Demo - its free
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClone;
