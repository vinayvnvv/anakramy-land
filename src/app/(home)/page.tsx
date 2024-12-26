import Banner from "./_components/Banner";
import About from "./_components/About";
import Mission from "./_components/Mission";
import Services from "./_components/Services";
import Vision from "./_components/Vision";
import Team from "./_components/Team";
import JSEvents from "./_components/JsEvents";

export default function Home() {
  return (
    <div>
      <Banner />
      <Mission />
      <About />
      <Services />
      <Vision />
      <Team />
      <JSEvents />
    </div>
  );
}
