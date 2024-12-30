import React, { useState } from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const GenerateThree = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate generate-two generate-three pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">AI-Powered Innovation for Business</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-lg-6 col-xl-5">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 0 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(0)}
              >
                <div className="content">
                  <h5 className="h5">Streamline Data Management</h5>
                </div>
              </div>
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 1 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(1)}
              >
                <div className="content">
                  <h5 className="h5">Intelligent Data Extraction</h5>
                </div>
              </div>
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 2 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(2)}
              >
                <div className="content">
                  <h5 className="h5">Quick Content Insights</h5>
                </div>
              </div>
              <div
                className={`generate__content-btn ${
                  activeTabIndex === 3 ? "generate__content-btn-active" : ""
                }`}
                onClick={() => handleTabClick(3)}
              >
                <div className="content">
                  <h5 className="h5">AI-Driven Chatbots</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="generate__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div
                className={`tab-content ${
                  activeTabIndex === 0 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-two">
                  <p>
                    Streamline your workflow and bring clarity to your data with ease. Our Generative AI service processes extensive datasets to classify and categorize information effectively, ensuring efficient and intuitive data retrieval. From sorting customer feedback to organizing product inventories, we simplify your data management. With powerful AI-driven insights, uncover hidden patterns and trends to make informed decisions. Let us bring order and structure to your data universe, transforming complexity into simplicity. Additionally, our solutions evolve with your business, adapting to new data sources and requirements, ensuring long-term scalability.
                  </p>
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 1 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-four">
                  <p>
                  Unlock the potential of your data with precision and ease. Dive deeper into your datasets and uncover the insights that truly matter. Our Generative AI technology intelligently scans documents, web pages, and other text sources to extract relevant data points, actionable insights, and key details. With advanced filtering and contextual analysis, we help you separate noise from value, ensuring you always have the most pertinent information at your fingertips. Empower your decision-making process with data-driven clarity and confidence. Furthermore, our AI tools continually learn and adapt, providing you with even more refined insights over time. 
                  </p>
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 2 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-three">
                  <p>
                  Quickly grasp the essence of even the most extensive content. Our Generative AI solutions read and analyze large volumes of text, delivering concise and coherent summaries tailored to your needs. Whether it’s research papers, lengthy articles, or reports, we ensure you get the crux without the need to sift through pages. Save time and focus on what matters most with summaries that retain critical insights. With our AI-powered tools, stay informed and make decisions faster, effortlessly cutting through the noise. Additionally, our solutions can be customized to highlight the specific information you need, saving you even more time and effort.
                  </p>
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 3 ? "active" : ""
                }`}
              >
                <div className="rangu rangu-one">
                  <p>
                  Leverage the full potential of Generative AI for both structured and open-ended question-answering systems. Our AI models efficiently process large datasets to deliver accurate answers to specific questions and provide detailed responses to open-ended inquiries. Whether it's for customer service or research support, our QA solutions are designed to empower your operations. Additionally, our AI-driven chatbots offer an engaging and seamless customer experience, capable of understanding natural language and providing personalized responses tailored to individual preferences and interactions. Enhance customer satisfaction and streamline communication with intelligent, conversational solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateThree;
