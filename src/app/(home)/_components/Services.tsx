import { Container } from "@/components";
import { Bug, GearFine, Siren } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    label: "Product As A Service",
    icon: <Siren size={80} />,
    desc: `Anakramy offers its flagship product, Anakramy Guard, as a service—an AI-driven cybersecurity solution for penetration testing, red team simulations, and comprehensive vulnerability assessments.`,
  },
  {
    label: "Bug Hunting Services",
    icon: <Bug size={80} />,
    desc: `Our expert team conducts meticulous bug hunting to identify and resolve security vulnerabilities, safeguarding your applications from potential threats.`,
  },
  {
    label: "Security Audits",
    icon: <GearFine size={80} />,
    desc: `Anakramy provides detailed security audits to ensure your systems meet the highest standards, enhancing overall resilience and compliance.`,
  },
];

export default function Services() {
  return (
    <div className="bg-code-scroll my-16" id="service">
      <Container className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold">Services</h2>
          <p className="text-lg md:text-xl mt-4">What We Offer</p>
        </div>
        <section className="min-h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 p-4 py-8 rounded-lg shadow-md text-center outline outline-slate-800 relative "
            >
              <div className="my-1 flex justify-center">{service.icon}</div>
              <h3 className="mt-9 font-extrabold capitalize text-2xl text-gradient font-title">
                {service.label}
              </h3>

              <p className="text-gray-400 pt-3">{service.desc}</p>
              <div className="cs_shape shapes_2 top-6  h-[200px] w-[300px]" />
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
}
