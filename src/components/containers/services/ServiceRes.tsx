import React from "react";
import Link from "next/link";
import "swiper/css";

const ServiceRes = () => {
  return (
    <section className="section case-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center items-gap">
                <div className="col-12 col-lg-12">
                  <h2
                    className="h2 text-center work_heading"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                   Mindlytic AI Resources
                  </h2>
                  <h5 className="text-center text-light">
                  AI tools and insights to boost innovation and efficiency
                  </h5>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="case-pagination cmn-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="case__div">
              <div className="case__slider-single case-one-in ser-case-one col-lg-3 col-md-5 col-12">
                <div className="thumb">
                  <i className="fa-solid fa-dumpster"></i>
                </div>
                <div className="content">
                  <h5 className="h5">Enhance Experience with Intelligent AI Solutions</h5>
                  <p>
                  Embed personalized AI support, track interactions, and extract valuable insights. With Help Hub, every exchange fosters meaningful growth.
                  </p>
                  {/* <Link href="#" onClick={(e) => e.preventDefault()}>
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
                  </Link> */}
                </div>
              </div>

              <div className="case__slider-single case-two-in ser-case-two col-lg-3 col-md-5 col-12">
                <div className="thumb">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
                </div>
                <div className="content">
                  <h5 className="h5">Deep Learning</h5>
                  <p>
                  Human Resources (HR) is evolving rapidly, driven by the transformative power of Artificial Intelligence (AI).
                  </p>
                  {/* <Link href="#" onClick={(e) => e.preventDefault()}>
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
                  </Link> */}
                </div>
              </div>

              <div className="case__slider-single case-three-in ser-case-three col-lg-3 col-md-5 col-12">
                <div className="thumb">
                  <i className="tech-plug"></i>
                </div>
                <div className="content">
                  <h5 className="h5">Process Streamlining</h5>
                  <p>
                  An in-depth look at how natural language processing and other AI technologies are revolutionizing chatbots, virtual assistants for enhanced user experiences.
                  </p>
                  {/* <Link href="#" onClick={(e) => e.preventDefault()}>
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceRes
