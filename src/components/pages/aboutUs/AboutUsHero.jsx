import ThemeOptionContext from "@/context/themeOptionsContext";
import { storageURL } from "@/utils/constants";
import Image from "next/image";
import { useContext } from "react";

const AboutUsHero = () => {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: "url('/assets/images/about/hero-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "150px 0",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h1 className="hero-title"></h1>
    </section>
  );
};

export default AboutUsHero;

