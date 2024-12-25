import React from "react";
import Image from "next/image";
import mission from "../../../../public/images/mission.png";
import vision from "../../../../public/images/vision.png";
import "swiper/css";

const AboutSponsor = () => {
  return (
    <div className="sponsor section pt-0 msvs_sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sponsor__inner"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {/* <div className="section__header">
                <h4 className="h4">Trusted by users and teams of all sizes</h4>
              </div> */}
              <div className="row text-center">
                <div className="col-md-6 col-12 mission">
                  <Image src={mission} alt="Our Mission" />
                  <h4 className="heading">Our Mission</h4>
                  <p>
                    AI empowers businesses to unlock workforce potential,
                    innovate for the future, and drive sustainable growth and
                    success.
                  </p>
                </div>
                <div className="col-md-6 col-12 vision">
                  <Image src={vision} alt="Our Mission" />
                  <h4 className="heading"> Our Vision</h4>
                  <p>
                    We envision AI transforming the future workforce through
                    versatile, highly optimized solutions, driving innovation
                    and sustainable success worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSponsor;
