import ThemeOptionContext from "@/context/themeOptionsContext";
import { storageURL } from "@/utils/constants";
import Image from "next/image";
import { useContext } from "react";

const FoundationSection = () => {
  return (
    <section
      className="foundation-wrapper"
      style={{
        background: "#f7ecdd",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "700",
          color: "#6c3a19",
          marginBottom: "10px",
          letterSpacing: "1px",
        }}
      >
        FOUNDATION
      </h2>

      {/* SUBTITLE */}
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "500",
          color: "#8c4d20",
          marginBottom: "60px",
          textTransform: "uppercase",
        }}
      >
        THE FRAGRANT LEGACY OF ROLET
      </h4>

      {/* MAIN PARAGRAPH */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.9",
          color: "#4b3e2b",
          textAlign: "left",
        }}
      >
        <p>
          Founded by Divine Industries in 2015 in Rajkot, Gujarat, Rolet emerges
          from a deep legacy of craftsmanship, devotion, and purity. For years,
          Divine Industries has been manufacturing a wide range of agarbatti,
          dhoop sticks, herbal incense sticks, cow-dung dhoop, and perfumed
          incense cones, all created under strict quality control using premium
          natural ingredients.
        </p>

        <p style={{ marginTop: "25px" }}>
          With Rolet, this heritage transforms into a premium incense brand—
          crafted to bring calmness, connection, and a touch of divinity into
          every space. Whether it’s the gentle aroma of chandan agarbatti, the
          earthy richness of loban dhoop, or the soothing purity of Mysore
          sandalwood agarbatti, every Rolet fragrance is designed to elevate
          your environment and your spirit.
        </p>

        <p style={{ marginTop: "25px" }}>
          From sacred temples to serene homes, from festive rituals to mindful
          meditation, Rolet incense sticks create an ambient world of fragrance
          and tranquility — a reflection of India’s timeless love for scent and
          spirituality.
        </p>
      </div>
    </section>
  );
};

export default FoundationSection;

