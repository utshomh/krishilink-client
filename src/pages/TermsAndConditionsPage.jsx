// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ScrollToTop from "../components/shared/ScrollToTop";
import PageTitle from "../components/shared/PageTitle";

const TermsAndConditionsPage = () => {
  const lastUpdated = "October 24, 2025";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing KrishiLink, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our platform.",
    },
    {
      title: "2. User Eligibility",
      content:
        "Users must be at least 18 years old or legal entities capable of forming legally binding contracts. Farmers and Buyers must provide accurate, current, and complete information during registration.",
    },
    {
      title: "3. Crop Listings & Trading",
      content:
        "Farmers are responsible for the accuracy of crop descriptions, quality, and pricing. KrishiLink facilitates connections but is not responsible for the physical quality of delivered goods or final payment disputes.",
    },
    {
      title: "4. Secure Conduct",
      content:
        "Users agree not to use the platform for any fraudulent activities, including posting fake listings, price manipulation, or harassing other community members through the chat system.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "KrishiLink provides a marketplace 'as is.' We are not liable for any direct or indirect losses resulting from failed negotiations, delivery delays, or technical downtime of the service.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="max-w-4xl mx-auto"
    >
      <ScrollToTop />
      <PageTitle title="Terms & Conditions" />

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-base-content/60">Last Updated: {lastUpdated}</p>
      </div>

      {/* Content Container */}
      <div className="bg-base-200/50 rounded-2xl p-6 md:p-10 border border-base-300 shadow-sm">
        <div className="prose max-w-none text-base-content/80 space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-primary">KrishiLink</span>. These
              terms and conditions outline the rules and regulations for the use
              of our platform. We aim to provide a transparent and fair
              marketplace for farmers and buyers alike.
            </p>
          </section>

          <div className="divider opacity-50"></div>

          {/* Mapping Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <h2 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h2>
                <p className="leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="divider opacity-50"></div>

          <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-2">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact our
              support team at
              <span className="font-semibold"> support@krishilink.com</span>.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditionsPage;
