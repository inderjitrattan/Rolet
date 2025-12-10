import ThemeOptionContext from "@/context/themeOptionsContext";
import { storageURL } from "@/utils/constants";
import Image from "next/image";
import { useContext } from "react";

const VisionMissionSection = () => {
  return (
    <section
      className="vision-mission-wrapper"
      style={{ padding: "80px 0", background: "#f7ecdd" }}
    >
      <div className="container">

        <div className="vision-mission-row">

          {/* VISION */}
          <div className="vm-box">
            <img
              src="/assets/images/about/vision.png"
              className="vm-image"
              alt="Vision"
            />

            <div className="vm-overlay">
              <h2 className="vm-title white">VISION</h2>

              <p className="vm-text white">
                Our vision is to bring the essence of divine fragrance into every home
                and heart. We aim to become a global leader in premium incense crafting,
                delivering purity, serenity, and soulful aroma through every Rolet product.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className="vm-box">
            <img
              src="/assets/images/about/mission.png"
              className="vm-image"
              alt="Mission"
            />

            <div className="vm-overlay">
              <h2 className="vm-title white">MISSION</h2>

              <p className="vm-text white">
                To provide fragrance experiences that bring joy, tranquility, and a sense
                of well-being. From product development to customer service, we commit to
                excellence so our customers receive the best possible experience.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .vision-mission-row {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .vm-box {
          position: relative;
          flex: 1 1 45%;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }

        .vm-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.5s ease;
        }

        /* Overlay initially hidden */
        .vm-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0,0,0,0.55);
          opacity: 0;
          visibility: hidden;
          padding: 40px;
          border-radius: 12px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          transition: opacity 0.4s ease, visibility 0.4s ease;
        }

        /* Hover effect */
        .vm-box:hover .vm-overlay {
          opacity: 1;
          visibility: visible;
        }

        /* Zoom image slightly on hover */
        .vm-box:hover .vm-image {
          transform: scale(1.05);
        }

        .vm-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .vm-title.white {
          color: #fff;
        }

        .vm-text {
          font-size: 17px;
          line-height: 1.8;
          max-width: 90%;
        }

        .vm-text.white {
          color: #ffffff;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .vision-mission-row {
            flex-direction: column;
          }

          .vm-image {
            height: 260px;
          }

          .vm-title {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMissionSection;
