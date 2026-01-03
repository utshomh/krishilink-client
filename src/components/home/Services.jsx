import { FaShieldAlt, FaChartLine, FaHeadset } from "react-icons/fa";

const steps = [
  {
    icon: <FaShieldAlt className="text-primary text-4xl mb-4" />,
    title: "Secure Payments",
    desc: "Experience peace of mind with our escrow-style payment protection, ensuring funds are only released when quality is met.",
  },
  {
    icon: <FaChartLine className="text-primary text-4xl mb-4" />,
    title: "Market Insights",
    desc: "Access real-time data on crop price trends and regional demand to make informed decisions for your next harvest.",
  },
  {
    icon: <FaHeadset className="text-primary text-4xl mb-4" />,
    title: "Dedicated Support",
    desc: "Our team of agricultural experts is available 24/7 to help resolve disputes and assist with platform navigation.",
  },
];

const Services = () => {
  return (
    <section className="border border-base-300 shadow-md rounded-xl text-center px-6 md:px-8 lg:px-16 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Why Choose Our Platform
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-base-100 rounded-xl shadow-md p-6 hover:shadow-xl transition-all flex flex-col items-center"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-base-content/80">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
