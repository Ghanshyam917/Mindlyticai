import React from "react";

const GoogleMapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.410727105526!2d72.83522827414552!3d21.232674277817857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec5b3b07867%3A0xe19d6dbe04ec5f3d!2sLaxmi%20Enclave!5e0!3m2!1sen!2sin!4v1735808217586!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  );
};

export default GoogleMapEmbed;
