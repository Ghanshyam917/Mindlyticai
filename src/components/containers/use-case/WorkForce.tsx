import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const WorkForce = () => {
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
                   Prepare your workforce for the future with AI
                  </h2>
                  <h5 className="text-center text-light">
                    Unlock a new level of efficiency with Mindlytic AI Studio
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
              <div className="case__slider-single case-one-in col-lg-3 col-md-5 col-12">
                <div className="thumb">
                  <i className="fa-solid fa-dumpster"></i>
                </div>
                <div className="content">
                  <h5 className="h5">AI-enhanced Ecommerce platforms</h5>
                  <p>
                    AI-enhanced Ecommerce platforms leverage advanced technology
                    to personalize customer experiences and optimize sales
                    processes.
                  </p>
                  {/* <Link href="#" onClick={(e) => e.preventDefault()}>
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
                  </Link> */}
                </div>
              </div>

              <div className="case__slider-single case-two-in col-lg-3 col-md-5 col-12">
                <div className="thumb">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
                </div>
                <div className="content">
                  <h5 className="h5">Creative AI</h5>
                  <p>
                    Creative AI leverages advanced algorithms to generate
                    innovative content, enhancing creativity in design, writing,
                    and multimedia production.
                  </p>
                  {/* <Link href="#" onClick={(e) => e.preventDefault()}>
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
                  </Link> */}
                </div>
              </div>

              <div className="case__slider-single case-three-in col-lg-3 col-md-5 col-12">
                <div className="thumb">
                  <i className="tech-plug"></i>
                </div>
                <div className="content">
                  <h5 className="h5">Workflow optimization</h5>
                  <p>
                    Workflow optimization streamlines processes, reduces
                    inefficiencies, and improves overall productivity within an
                    organization.
                  </p>
                  {/* <Link href="#" onClick={(e) => e.preventDefault()}>
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
                  </Link> */}
                </div>
              </div>

              {/* <div className="case__slider-single case-four-in col-3">
                <div className="thumb">
                  <i className="tech-speaker"></i>
                </div>
                <div className="content">
                  <h5 className="h5">Integrated AI Solution</h5>
                  <p>
                    Merging state-of-the-art web technologies and intelligence
                    of Core AI, enhance your business operations and unlock new
                    levels of growth.
                  </p>
                  <Link href="javascript:void(0)">
                    View Details
                    <i className="fa-solid fa-angles-right"></i>
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

export default WorkForce;
