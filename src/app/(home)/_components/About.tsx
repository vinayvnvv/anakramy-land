/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components";
import React from "react";

const About: React.FC = () => {
  return (
    <div id="about">
      <Container className="relative">
        <section className=" flex flex-col md:flex-row items-center justify-between p-6 gap-3">
          <div className="md:w-1/3">
            <img
              src="https://demo.themeies.com/cybal/wp-content/uploads/2024/07/about2.png"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 bg-primary inline-flex py-2 px-4 rounded-full">
              About
            </h2>
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              {" "}
              ANAKRAMY INC.
            </h3>
            <p className="mb-3 bg-slate-800 p-4 rounded-lg text-lg">
              Founded in 2024, Anakramy Inc. is a forward- thinking
              cybersecurity company dedicated to redefining how organizations
              protect their digital assets. We aim to empower businesses with
              cutting-edge solutions that are both robust and user-friendly.
            </p>
            <p className=" bg-slate-800 p-4 rounded-lg text-lg">
              Our flagship product, Anakramy Guard, is an all- in-one
              cybersecurity platform combining AI- driven automation and
              advanced tools for penetration testing, red team simulations,
              vulnerability assessments, and more. Designed for precision and
              ease of use, it helps businesses stay one step ahead of cyber
              threats.
            </p>
          </div>
        </section>
        <div className="cs_shape  top-6 left-[10%] h-[500px] w-[500px]" />
      </Container>
    </div>
  );
};

export default About;
