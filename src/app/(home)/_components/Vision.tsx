import { Container } from "@/components";
import { Brain, ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const items = [
  {
    title: "Automation",
    desc: "At Anakramy Inc., we envision a world where every organization, regardless of size, operates in a secure digital environment. Our goal is to set new benchmarks in cybersecurity by integrating AI and automation to deliver unmatched protection and efficiency.",
    icon: <Brain weight="thin" size={60} />,
  },
  {
    title: "Businesses",
    desc: "Through innovation and continuous advancement, we strive to become the global leader in cybersecurity solutions, empowering businesses to thrive securely in an ever-evolving technological landscape.",
    icon: <ChartLineUp weight="thin" size={60} />,
  },
];

const Vision: React.FC = () => {
  return (
    <Container className="relative mb-32">
      <section className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold">Our Vision</h2>
          <p className="text-lg md:text-xl mt-4">Empowering a Secure Future.</p>
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
