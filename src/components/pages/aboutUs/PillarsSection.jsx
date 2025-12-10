import ThemeOptionContext from "@/context/themeOptionsContext";
import { storageURL } from "@/utils/constants";
import Image from "next/image";
import { useContext } from "react";

const PillarsSection = () => {
  const pillars = [
    {
      title: "PURITY",
      subtitle: "The Essence of True Fragrance",
      img: "/assets/images/about/purity.png",
      text: `Every Rolet agarbatti and premium incense stick is crafted with care,
blending handpicked herbs, resins, and essential oils. Our high-tech
manufacturing facility ensures a clean burn, long-lasting aroma, and
consistency in every stick. Rooted in traditional fragrance rituals, Rolet
promises the purest agarbatti experience-a fragrance that uplifts,
purifies, and inspires.`,
      reverse: false,
    },
    {
      title: "PRESENCE",
      subtitle: "Transforming Every Space",
      img: "/assets/images/about/presence.png",
      text: `Fragrance is not just an aroma-it's an emotion, a presence. Each Rolet
incense stick and dhoop stick is thoughtfully blended to transform your
space and mood. From Lavender's calming whisper to Chandan's
comforting warmth and Citrus's refreshing vibrance, every scent carries a
story - perfect for meditation, prayer, or peaceful reflection.`,
      reverse: true,
    },
    {
      title: "PURPOSE",
      subtitle: "Fragrance That Matters",
      img: "/assets/images/about/purpose.png",
      text: `At Rolet, our purpose goes beyond incense. We create agarbattis that
nurture mindfulness, celebrate culture, and elevate the soul. Whether
you're lighting a kasturi agarbatti for your morning puja, or using a dhoop
stand to fill your home with divine scent, Rolet brings meaning and serenity
to every ritual.`,
      reverse: false,
    },
  ];

  return (
    <section className="pillars-section" style={{ padding: "80px 0" }}>
      
      <h2 className="section-title">THE 3 PILLARS OF TRUST</h2>
      <h4 className="section-subtitle">PURITY, PRESENCE, PURPOSE</h4>

      <div className="container">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`pillar-row ${pillar.reverse ? "reverse" : ""}`}
          >
            {/* LEFT IMAGE */}
            <div className="pillar-img">
              <img src={pillar.img} alt={pillar.title} />
            </div>

            {/* RIGHT TEXT */}
            <div className="pillar-text">
              <h3>{pillar.title}</h3>
              <h5>{pillar.subtitle}</h5>
              <p>{pillar.text}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-title {
          text-align: center;
          font-size: 42px;
          font-weight: 700;
          color: #6c3a19;
        }

        .section-subtitle {
          text-align: center;
          margin-top: 10px;
          margin-bottom: 60px;
          color: #8c4d20;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .pillar-row {
          display: flex !important;
          flex-direction: row;
          align-items: center;
          gap: 40px;
          margin-bottom: 90px;
        }

        .pillar-row.reverse {
          flex-direction: row-reverse !important;
        }

        .pillar-img {
          flex: 1;
        }

        .pillar-img img {
          width: 100%;
          border-radius: 12px;
          object-fit: cover;
          display: block;
        }

        .pillar-text {
          flex: 1;
          color: #4b3e2b;
        }

        .pillar-text h3 {
          font-size: 32px;
          font-weight: 700;
          color: #6c3a19;
        }

        .pillar-text h5 {
          font-size: 20px;
          margin: 10px 0 20px;
          color: #8c4d20;
        }

        .pillar-text p {
          font-size: 17px;
          line-height: 1.8;
        }

        /* RESPONSIVE FIX */
        @media (max-width: 992px) {
          .pillar-row,
          .pillar-row.reverse {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default PillarsSection;

