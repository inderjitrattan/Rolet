"use client";

import ThemeOptionContext from "@/context/themeOptionsContext";
import { useContext } from "react";
import WrapperComponent from "@/components/widgets/WrapperComponent";
import Breadcrumbs from "@/utils/commonComponents/breadcrumb";

import AboutUsHero from "./AboutUsHero";
import FoundationSection from "./FoundationSection";
import PillarsSection from "./PillarsSection";
import VisionMissionSection from "./VisionMissionSection";
import WhyChooseUs from "./WhyChooseUs";

import Loader from "@/layout/loader";

const AboutUsContent = () => {
  const { themeOption, isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;

  return (
    <>
      {/* PAGE BREADCRUMB */}
      <Breadcrumbs
        title={"Rolet Inception"}
        subNavigation={[{ name: "Rolet Inception" }]}
      />

      {/* HERO SECTION (Top banner like PDF Page 9) */}
      <AboutUsHero />

      {/* FOUNDATION SECTION */}
      <WrapperComponent
        classes={{
          sectionClass: "about-page section-b-space",
        }}
        noRowCol={true}
      >
        <FoundationSection />
      </WrapperComponent>

      {/* 3 PILLARS OF TRUST SECTION */}
      <PillarsSection />

      {/* 3 PILLARS OF TRUST SECTION */}
      <VisionMissionSection />

      {/* WHY CHOOSE US SECTION */}
      <WhyChooseUs />
    </>
  );
};

export default AboutUsContent;
