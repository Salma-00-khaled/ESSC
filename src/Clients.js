import React from "react";
import krispy from "../src/assets/krispy.png";
import egySteel from "../src/assets/egysteel.jpeg";

const Clients = () => {
  const clients = [
    { id: 1, src: krispy, alt: "Krispy Kreme" },
    { id: 2, src: egySteel, alt: "Egyptian Steel" },
  ];

  return (
    <section className="bg-dark py-10">
      <h2 className="text-center text-4xl font-bold text-white mb-6">
        OUR <span className="text-red-600">CLIENTS</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-20">
        {clients.map((client) => (
          <img
            key={client.id}
            src={client.src}
            alt={client.alt}
            className="w-[80px] h-[60px] object-contain transition-transform hover:scale-50"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
