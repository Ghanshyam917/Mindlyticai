import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import ContactMain from "@/components/containers/contact/ContactMain";
import GoogleMapEmbed from "@/components/containers/contact/GoogleMapEmbed";
import CtaBlack from "@/components/containers/cta/CtaBlack";

const ContactUs = () => {
  return (
    <Layout header={true} footer={1}>
      <Banner desc="Contact Us" page="Contact Us" cls="contact"/>
      <ContactMain />
      {/* <CtaBlack /> */}
      <GoogleMapEmbed/>
    </Layout>
  );
};

export default ContactUs;
