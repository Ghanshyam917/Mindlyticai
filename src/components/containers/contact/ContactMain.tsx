import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../../public/images/arrow-contact.png";

const ContactMain: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: "",
    EmailID: "",
    ContactNo: "",
    Message: "",
  });

  const [errors, setErrors] = useState({
    Name: "",
    EmailID: "",
    ContactNo: "",
    Message: "",
  });

  const [status, setStatus] = useState(""); // Feedback message

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs on change
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = "";

    if (name === "Name" && !value.trim()) {
      errorMessage = "Name is required.";
    }else if(name === "EmailID" && !value.trim()){
      errorMessage = "EmailID is required.";
    }
     else if (
      name === "EmailID" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      errorMessage = "Invalid email format.";
    }
    else if (
      name === "ContactNo" &&
      (!/^\d{10}$/.test(value) || value.length !== 10)
    ) {
      errorMessage = "Contact number must be 10 digits.";
    } else if (name === "Message" && !value.trim()) {
      errorMessage = "Message is required.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const validateForm = () => {
    const newErrors = {
      Name: formData.Name.trim() ? "" : "Name is required.",
      EmailID: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.EmailID)
        ? ""
        : "Invalid email format.",
      ContactNo: /^\d{10}$/.test(formData.ContactNo)
        ? ""
        : "Contact number must be 10 digits.",
      Message: formData.Message.trim() ? "" : "Message cannot be empty.",
    };
    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(""); // Reset status message

    // Validate the form before submission
    if (!validateForm()) {
      // setStatus("Please correct the highlighted errors.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/b6640e27-ad21-4ba0-af7f-1e4598dba2ff",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({ Name: "", EmailID: "", ContactNo: "", Message: "" }); // Clear form
        setStatus("Your message has been sent successfully!");
        setErrors({ Name: "", EmailID: "", ContactNo: "", Message: "" }); // Clear errors

        setTimeout(() => {
          setStatus("");
        }, 4000);
      } else {
        const errorData = await response.json();
        setStatus(
          errorData.error || "Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="section contact-main">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div
              className="contact-main__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="h3">
                <h2 className="text-light">Have something in mind?</h2>
                <span>Let&apos;s talk.</span>
              </div>
              <p>
                Get in touch with us for inquiries, support, or feedback—we're
                here to assist you anytime!
              </p>
              <div className="arrow">
                <Image src={Arrow} alt="Image" />
              </div>
              <div className="cta-contact">
                <Link
                  href="https://calendly.com/hr-mindlyticai/30min"
                  target="_blank"
                >
                  Schedule a call <i className="fa-solid fa-angle-right"></i>
                </Link>
                <span className="text-light">OR</span>
                <Link href="mailto:hr.mindlyticai@gmail.com">
                  Request a feature <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-6 offset-xxl-1">
            <div
              className="contact-main__form"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <form onSubmit={handleSubmit}>
                <div className="contact_inp">
                  <div className="group-input">
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className={errors.Name ? "error-input" : ""}
                    />
                  </div>
                  {errors.Name && <p className="error-text">{errors.Name}</p>}
                </div>
                <div className="contact_inp">
                  <div className="group-input">
                    <input
                      type="email"
                      name="EmailID"
                      value={formData.EmailID}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={errors.EmailID ? "error-input" : ""}
                    />
                  </div>
                  {errors.EmailID && (
                    <p className="error-text">{errors.EmailID}</p>
                  )}
                </div>
                <div className="contact_inp">
                  <div className="group-input">
                    <input
                      type="text"
                      name="ContactNo"
                      value={formData.ContactNo}
                      onChange={handleInputChange}
                      placeholder="Enter your contact no."
                      className={errors.ContactNo ? "error-input" : ""}
                    />
                  </div>
                  {errors.ContactNo && (
                    <p className="error-text">{errors.ContactNo}</p>
                  )}
                </div>
                <div className="contact_inp">
                  <div className="group-input">
                    <textarea
                      name="Message"
                      value={formData.Message}
                      onChange={handleInputChange}
                      placeholder="Write a message"
                      className={errors.Message ? "error-input" : ""}
                    ></textarea>
                  </div>
                  {errors.Message && (
                    <p className="error-text">{errors.Message}</p>
                  )}
                </div>
                <div className="form-cta justify-content-start">
                  <button type="submit" className="btn btn--nonary">
                    Send Message <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
                {status && <p className="form-status">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
