import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import CtaOne from "@/components/containers/cta/CtaOne";
import ServiceRes from "@/components/containers/services/ServiceRes";
import GenerateThree from "@/components/containers/generate/GenerateThree";

const services = () => {
  return (
    <Layout header={true} footer={1} >
      <Banner desc="Our Services" page="Services" cls="service"/>
      <BannerTwo />
      <ServiceRes />
      <GenerateThree />
      <CtaOne />
    </Layout>
  );
};

export default services;
