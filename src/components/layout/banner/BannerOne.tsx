import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Thumb from "../../../../public/images/banner/banner-one-thumb.png";
import Thumb from "../../../../public/images/banner/bannerAi.png";

const BannerOne = () => {
  return (
    <section className="section banner-one bg-img d-flex align-items-center">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-one__content">
              <p className="h6 banner_heading6">
                {/* <span>AI Voice</span> */}
                Empower minds, unlock potential, thrive together
              </p>
              <h1 className="h1 bannerHeading1">Unlock the Power of AI for Your Business Transformation</h1>
              <p className="bannerpara">Envision greatness for your business as we infuse the magic of AI innovation. Join us on this transformative journey.</p>
              <div className="section__content-cta">
                <Link href="#" onClick={(e) => e.preventDefault()} className="btn btn--secondary">
                  Explore AI Solution
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="banner-one__thumb text-start text-lg-end">
              <Image src={Thumb} priority alt="Image" style={{width:'90%'}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
