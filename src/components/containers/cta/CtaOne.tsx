import React from "react";
import Link from "next/link";

const CtaOne = () => {
  return (
    <section className="section cta bg-img ctaa  ctaone_sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="section__header m-0 text-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="ctaone_heading">
                Connect with our AI experts for a no-obligation call
              </p>
              <p>
                We aim to demonstrate how AI can effortlessly integrate into
                your current operations and open up fresh possibilities for your
                business.
              </p>
              <div className="form-cta">
                <Link href="#" onClick={(e) => e.preventDefault()} className="btn btn--quinary">
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
