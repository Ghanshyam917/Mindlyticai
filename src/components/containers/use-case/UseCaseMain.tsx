import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "../../../../public/images/use-case/one.png";
import two from "../../../../public/images/use-case/two.png";
import three from "../../../../public/images/use-case/three.png";
import four from "../../../../public/images/use-case/four.png";
import five from "../../../../public/images/use-case/five.png";
import six from "../../../../public/images/use-case/six.png";
import seven from "../../../../public/images/use-case/seven.png";
import eight from "../../../../public/images/use-case/eight.png";

const UseCaseMain = () => {
  return (
    <section className="section use-case">
      <div className="container">
        <div className="row items-gap justify-content-center">
          <div className="col-12 col-sm-6 col-xl-4">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {/* <div className="thumb">
                <Image src={one} alt="Image" />
              </div> */}
              <div className="content">
                <h5 className="h5 text-light">
                  Generative AI
                </h5>
                <p>
                  Digisage revolutionizes digital learning by utilizing AI to
                  transform videos and documents into structured courses,
                  removing the need for human intervention.
                </p>
                <Link href="/res-genai">
                  View Details
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              {/* <div className="thumb">
                <Image src={two} alt="Image" />
              </div> */}
              <div className="content">
                <h5 className="h5 text-light">
                  Deep Learning
                </h5>
                <p>
                  The entertainment industry has undergone significant changes,
                  from cinema to home video, and from cable networks to
                  on-demand platforms.
                </p>
                <Link href="/res-deepLearn">
                  View Details
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              {/* <div className="thumb">
                <Image src={three} alt="Image" />
              </div> */}
              <div className="content">
                <h5 className="h5 text-light">
                  Machine Learning
                </h5>
                <p>
                Starbucks has grown beyond a coffee retailer to become a tech innovator, using AI to improve customer experiences and optimize operations.
                </p>
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  View Details
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseMain;
