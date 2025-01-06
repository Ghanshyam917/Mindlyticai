import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import UseCaseMain from "@/components/containers/use-case/UseCaseMain";
import CtaAbout from "@/components/containers/cta/CtaAbout";
import FaqLight from "@/components/containers/faq/FaqLight";

const resources = () => {
  return (
    <Layout header={true} footer={1}>
      <Banner desc="Resources" page="Resources" cls="resources"/>
      <UseCaseMain />
      {/* <FaqLight />
      <CtaAbout /> */}
    </Layout>
  );
};

export default resources;
