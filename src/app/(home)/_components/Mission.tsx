import { Container } from "@/components";
import {
  LightbulbFilament,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const items = [
  {
    title: "Safeguard",
    desc: "At Anakramy Inc., our mission is to safeguard the digital landscape by delivering innovative and intelligent cybersecurity solutions. We aim to empower organizations with tools that simplify complex security processes and elevate their defense strategies.",
    icon: <TreeStructure weight="thin" size={60} />,
  },
  {
    title: "Cybersecurity",
    desc: "Through our flagship product, Anakramy Guard, we aspire to make cutting-edge cybersecurity accessible to all. By combining AI-driven insights with powerful automation, we help businesses proactively address vulnerabilities and secure their digital assets with confidence.",
    icon: <LightbulbFilament weight="thin" size={60} />,
  },
];

const Vision: React.FC = () => {
  return (
    <Container className="relative mb-32">
      <section className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>
          <p className="text-lg md:text-xl mt-4">
            We strive to achieve excellence in everything we do.
          </p>
        </div>
        <div className=" mt-20 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-20">
          {items.map((item) => (
            <div key={item.title} className="flex justify-center">
              <div className="bg-slate-900 rounded-lg shadow-md p-6 w-full sm:w-full flex flex-col items-center md:w-[400px]">
                {item.icon}
                <h3 className="text-3xl font-bold mb-4 mt-2">{item.title}</h3>
                <p className="text-lg text-center text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="cs_shape top-40 left-[40%] h-[500px] w-[300px]" />
    </Container>
  );
};

export default Vision;
