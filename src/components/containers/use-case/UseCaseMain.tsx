import React from "react";
import Image from "next/image";
import Link from "next/link";

const UseCaseMain = () => {
  return (
    <section className="section use-case">
      <div className="container">
        <div className="row items-gap justify-content-center">
          <div className="col-12 col-sm-6 col-xxl-3 col-md-4">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {/* <div className="thumb">
                <Image src={one} alt="Image" />
              </div> */}
              <div className="content">
                <h5 className="h5 text-light">Generative AI</h5>
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
          <div className="col-12 col-sm-6 col-xxl-3 col-md-4">
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
                <h5 className="h5 text-light">Machine Learning</h5>
                <p>
                  Starbucks has grown beyond a coffee retailer to become a tech
                  innovator, using AI to improve customer experiences and
                  optimize operations.
                </p>
                <Link href="/res-deepLearn">
                  View Details
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-3 col-md-4">
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
                <h5 className="h5 text-light">Deep Learning</h5>
                <p>
                  The entertainment industry has undergone significant changes,
                  from cinema to home video, and from cable networks to
                  on-demand platforms.
                </p>
                <Link href="/res-ml">
                  View Details
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-3 col-md-4">
            <div
              className="use-case__item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="content">
                <h5 className="h5 text-light">Backend Developement</h5>
                <p>
                  Backend development refers to the server-side of web
                  applications that focuses on how a website or application
                  functions, processes, and manages data.
                </p>
                <Link href="/res-beckdev">
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
