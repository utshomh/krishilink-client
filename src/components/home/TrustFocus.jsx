import { FaCertificate, FaShield } from "react-icons/fa6";

const TrustFocus = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-block px-4 py-1 rounded-full bg-success/10 text-success text-sm font-bold">
          Quality Guaranteed
        </div>
        <h2 className="text-4xl font-black leading-tight">
          We maintain the highest <br /> standards in AgTech.
        </h2>
        <p className="text-base-content/70 text-lg">
          Our platform isn't just a directory; it's a verified ecosystem
          designed to protect the livelihoods of producers and the investments
          of buyers.
        </p>

        <div className="space-y-4">
          {[
            {
              icon: <FaShield />,
              title: "Secure Escrow",
              desc: "Payments are held safely until delivery.",
            },
            {
              icon: <FaCertificate />,
              title: "Quality Verified",
              desc: "Randomized inspections for top-tier listings.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-1 text-primary text-xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-base-content/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800"
          alt="Agriculture Tech"
          className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-8">
          <p className="text-white font-medium italic">
            "We've reduced post-harvest losses by 30% for our partner farmers
            this year alone."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustFocus;
