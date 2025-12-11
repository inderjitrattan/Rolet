import ThemeOptionContext from "@/context/themeOptionsContext";
import { storageURL } from "@/utils/constants";
import Image from "next/image";
import { useContext } from "react";

const WhyChooseUs = () => {
  return (
    <section
      className="why-choose-wrapper"
      style={{
        padding: "100px 0",
        background: "#ffffffff",
        textAlign: "center",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: "#6c3a19",
          marginBottom: "40px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        WHY CHOOSE US
      </h2>

      {/* DESCRIPTION */}
      <p
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.9",
          color: "#4b3e2b",
        }}
      >
        Choosing Rolet Incense Sticks means choosing purity, tradition, and
        craftsmanship. Each agarbatti is made from 100% natural ingredients,
        blended with premium herbs and essential oils to ensure a clean,
        long-lasting fragrance. From the soothing warmth of sandalwood and
        chandan agarbatti to the refreshing aroma of green apple and mogra, our
        range is designed to suit every mood and ritual. Whether used for
        meditation, prayer, or simply to elevate your space, Rolet incense sticks
        and dhoop sticks promise an experience that calms the senses and connects
        you to your inner self — the perfect harmony of purity and presence.
      </p>
    </section>
  );
};

export default WhyChooseUs;


