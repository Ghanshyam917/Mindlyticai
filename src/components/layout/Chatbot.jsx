import Script from "next/script";

const Chatbot = () => {
  return (
    <>
      {/* Load jQuery */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive" // Ensures jQuery is loaded before other scripts
      />

      {/* Load the chatbot script */}
      <Script
        src="http://34.196.63.239:8000/Static/assets1/js/updated-chatbot-loader.js"
        strategy="afterInteractive" // Ensures the chatbot script is loaded after the page is interactive
        chatbot-id="BXZPIVBO2S9OAU6" // Custom attribute for the chatbot script
        type="application/javascript"
      />
    </>
  );
};

export default Chatbot;