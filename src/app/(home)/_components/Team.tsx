/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components";
import React from "react";

const team = [
  {
    name: "Santhosh Adiga",
    pos: "Founder & CEO",
    desc: "A passionate mobile app developer and cybersecurity expert with over a decade of experience, Santhosh is the visionary behind Anakramy Inc., driving innovation and excellence in AI-powered security solutions.",
    photo: "sant.png",
  },
  {
    name: "Sushma N R",
    pos: "Product Owner",
    desc: `With a strong background in product management, Sushma ensures Anakramy’s solutions align seamlessly with client needs, delivering unparalleled value and usability.
`,
    photo: "sush.png",
  },
  {
    name: "Sachi Mishra",
    pos: "Software Engineer",
    desc: "A driven AI enthusiast contributing to the development of cutting-edge AI features in Anakramy Guard.",
    photo: "sach.png",
  },
  {
    name: "Praneeth Reddy",
    pos: "Software Engineer",
    desc: "A talented programmer dedicated to enhancing the app’s functionality and delivering impactful solutions.",
    photo: "pran.png",
  },
];

const Team = () => {
  return (
    <div id="team">
      <Container className="relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Meet Our Experts
        </h2>
        <h4 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-500">
          Team
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((t) => (
            <div
              key={t.name}
              className="bg-cyan-950 bg-opacity-50 shadow-lg rounded-3xl p-6 text-center flex flex-col items-center"
            >
              <img
                src={`/images/${t.photo}`}
                alt="John Paul"
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
              <h3 className="text-xl font-extrabold mt-4">{t.name}</h3>
              <p className="text-gray-200 mt-2 font-semibold text-gradient">
                {t.pos}
              </p>
              <p className="text-gray-500 mt-3">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="cs_shape top-[-110px] left-[40%] h-[500px] w-[300px]" />
      </Container>
    </div>
  );
};

export default Team;
