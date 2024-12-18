import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimeOne from "../../../../public/images/footer-anime-one.png";
import AnimeTwo from "../../../../public/images/footer-anime-two.png";
import LogoTwo from "../../../../public/images/logo-two.png";
import logo from "../../../../public/images/logo/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer section pb-0">
      <div className="container">
        <div className="row items-gap-two justify-content-between">
          <div className="col-12 col-sm-6 col-lg-5">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h5 className="">
                <div className="logo text-center text-lg-start footerlogo d-flex align-items-center gap-3">
                  <Link href="/">
                    <Image src={logo} alt="Image" />
                  </Link>
                  <p>Mindlytic AI</p>
                </div>
              </h5>
              <ul>
                <p>
                  MindlyticAI is a technology-driven company revolutionizing
                  industries with AI solutions, enhancing customer experiences,
                  optimizing operations, and driving innovation to help
                  businesses thrive in a digital-first world.
                </p>
              </ul>
              <div className="col-12">
                <div className="social justify-content-start mt-4">
                  <Link href="#" onClick={(e) => e.preventDefault()} aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="#" onClick={(e) => e.preventDefault()} aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/company/mindlytic-ai/posts/?feedView=all" target="_blank" aria-label="social media">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="#" onClick={(e) => e.preventDefault()} aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <h5 className="h5">Links</h5>
              <ul>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Home</Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>About Us</Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Services</Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Portfolio</Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Resources</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">support</h5>
              <ul>
                <li>
                  <Link href="/about-us">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about-us">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/about-us">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/use-case">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact-us">Helpdesk</Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">Contact Us</h5>
              <ul>
                <li>
                  <p>
                    Our support available to help you 24 hours a day, seven days
                    a week.
                  </p>
                </li>
                  <li className="text-light d-flex align-items-center gap-3">
                    <i className="fa-solid fa-phone"></i>{" "}
                    <a href="tel: +916355528336"> +91 63555 28336</a>
                  </li>   
                  <li className="text-light d-flex gap-3">
                    <i className="fa-solid fa-envelope mt-2"></i>
                    <div>
                      <a href="mailto:mindlyticai@gmail.com">
                        mindlyticai@gmail.com
                      </a>
                      <a href="mailto:sales.mindlyticai@gmail.com">
                        sales.mindlyticai@gmail.com
                      </a>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="copyright-inner">
              <div className="row items-gap align-items-center">
                <div className="col-12 col-lg-3">
                  {/* <div className="logo text-center text-lg-start footerlogo">
                    <Link href="/">
                      <Image src={logo} alt="Image" />
                    </Link>
                  </div> */}
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-center">
                    Copyright &copy;
                    <span id="copyYear"> {currentYear} </span>
                     MindyticAI - All Rights Reserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={AnimeOne} alt="Image" className="one" />
        <Image src={AnimeTwo} alt="Image" className="two" />
      </div>
    </footer>
  );
};

export default Footer;
