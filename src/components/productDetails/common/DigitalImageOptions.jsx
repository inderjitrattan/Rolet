import Btn from "@/elements/buttons/Btn";
import Link from "next/link";
import React from "react";
import VideoPlayModal from "./allModal/VideoPlayModal";
import { useTranslation } from "react-i18next";

const DigitalImageOptions = ({ product }) => {
  const [modal, setModal] = React.useState(false);
  const { t } = useTranslation("common");
  return (
    <>
      <div className="preview-box">
        {product.preview_type == "video" &&
        product.preview_video_file?.original_url ? (
          <Btn className="media-btn" onClick={() => setModal("video")}>
            {/* (click)="openModal(product.preview_video_file?.original_url || '', 'video')" */}
            <i className="ri-play-fill"></i>
          </Btn>
        ) : product.preview_type == "audio" &&
          product.preview_audio_file?.original_url ? (
          <div className="media-btn" onClick={() => setModal("audio")}>
            {/* {(click = "openModal(product.preview_audio_file?.original_url || '', 'audio')")} */}
            <i className="ri-music-2-line"></i>
          </div>
        ) : product.preview_type == "url" && product.preview_url ? (
          <div className="preview-btn">
            <Link href={product.preview_url} target="_blank">
              <span>
                <i className="ri-share-box-line"></i> {t("live_preview")}{" "}
              </span>
            </Link>
          </div>
        ) : null}
      </div>
      <VideoPlayModal
        productState={product}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
};

export default DigitalImageOptions;
