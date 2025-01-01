import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import BlogLayoutTwo from "@/components/containers/blog/BlogLayoutTwo";

const portfolio = () => {
  return (
    <Layout header={true} footer={1}>
      <Banner desc="Our Portfolio" page="Portfolio" cls="portfolio"/>
      <BlogLayoutTwo />
    </Layout>
  );
};

export default portfolio;
