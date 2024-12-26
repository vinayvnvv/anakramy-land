/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components";
import Button from "@/components/Button";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] mt-24 flex items-center md:mt-4">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 font-title tracking-widest">
              Empowering Businesses with Proactive, AI-Driven Cybersecurity
            </h1>
            <p className="text-lg md:text-xl mb-6 font-bold mt-12">
              Revolutionizing the cybersecurity landscape with cutting-edge
              AI-powered solutions.
            </p>
            <div className="flex flex-col md:flex-row  justify-center md:justify-start space-x-4 gap-4 md:gap-0">
              <div>
                <Button size="large">Get Connected</Button>
              </div>
              <div>
                <Button size="large" variant="outlined">
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={
                "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/security.png"
              }
              alt="Banner"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </Container>
      <div className="cs_shape shapes_1 w-[512px] h-[512px]" />
      <div className="cs_shape shapes_2 top-16 h-[300px] w-[500px]" />
      <div className="absolute top-24 left-[20%]">
        <img src="./hero_shape_1.svg" width={"100%"} height={"auto"} />
      </div>
    </section>
  );
};

export default Banner;
