import React from "react";
import Layout from "@/components/layout/Layout";

const res_genai = () => {
  return (
    <Layout header={true} footer={1}>
      <div className="container resdetail" style={{ marginTop: "100px" }}>
        <div>
          <div className="content">
            <div className="head">
              <h4 className="mb-3">What is Generative AI ?</h4>
              <p className="text-light">
                Generative AI refers to a branch of artificial intelligence that
                focuses on creating new content, such as text, images, audio, or
                videos, by learning patterns from existing data. Unlike
                traditional AI systems, which are designed primarily to analyze
                or classify data, generative AI models, such as GPT (text),
                DALL·E (images), and others, generate outputs that mimic human
                creativity. These systems use techniques like deep learning and
                neural networks to predict and produce content that aligns with
                user prompts or input data.
              </p>
            </div>
            <div className="sub_content">
              <div>
                <h6>1. Content Creation and Marketing</h6>
                <ul><li>Automates blog writing, social media posts, and ad copy generation.</li></ul>
                <ul><li>Personalizes marketing campaigns for target audiences.</li></ul>
              </div>
              <div>
                <h6>2. Customer Support and Chatbots</h6>
                <ul><li>Enhances customer service with AI-powered chatbots for 24/7 support.</li></ul>
                <ul><li>Generates tailored responses to customer queries.</li></ul>
              </div>
              <div>
                <h6>3. Design and Prototyping</h6>
                <ul><li>Creates design mockups, wireframes, and prototypes for products or services.</li></ul>
                <ul><li>Generates creative assets like logos, banners, and videos.</li></ul>
              </div>
              <div>
                <h6>4. Data Analysis and Reporting</h6>
                <ul><li>Summarizes complex datasets into readable insights or reports.</li></ul>
                <ul><li>Automates the creation of visualizations and dashboards.</li></ul>
              </div>
              <div>
                <h6>5. Programming and Software Development</h6>
                <ul><li>Assists in code generation, debugging, and documentation.</li></ul>
                <ul><li>Generates test cases and prototypes to speed up development.</li></ul>
              </div>
              <div>
                <h6>6. Recruitment and HR Automation</h6>
                <ul><li>Generates job descriptions, resumes, and candidate evaluations.</li></ul>
                <ul><li>Streamlines onboarding by creating personalized training guides.
                </li></ul>
              </div>
              <div>
                <h6>7. Creative Industries</h6>
                <ul><li>Supports industries like film, music, and gaming with AI-generated scripts, music tracks, and character designs.</li></ul>
              </div>
            </div>
         </div>
        </div>
      </div>
    </Layout>
  );
};

export default res_genai;
