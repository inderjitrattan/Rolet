import React from "react";
import { useTranslation } from "react-i18next";
import { RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitterFill } from "react-icons/ri";

const ContactDetails = () => {
  const { t } = useTranslation("common");
  return (
    <div className="contact-title">
      <h2>{t("get_in_touch")}</h2>
      <p>Have a question or need assistance? Connect with us for product details, orders, or collaborations. Our team will be happy to assist you promptly.</p>
      <div className="footer-social">
        <ul>
          <li>
            <a target="_blank" href="https://facebook.com/">
              <RiFacebookFill />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/">
              <RiTwitterFill />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/">
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://pinterest.com/">
              <RiPinterestFill />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
