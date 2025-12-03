import ThemeOptionContext from "@/context/themeOptionsContext";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const CartButtons = () => {
  const { t } = useTranslation("common");
  const isAuth = Cookies.get("uat_multikart");
  const router = useRouter();
  const { setOpenAuthModal } = useContext(ThemeOptionContext);

  const redirect = (path) => {
    router.push(`/${path}`);
  };
  const handelCheckout = () => {
    if (!isAuth) {
      Cookies.set("CallBackUrl", "checkout");
      setOpenAuthModal(true);
    } else {
      redirect("checkout");
    }
  };

  return (
    <Row className=" cart-buttons">
      <Col xs="6">
        <Link href="/collections" className="btn">
          {t("continue_shopping")}
        </Link>
      </Col>
      <Col xs="6">
        <Link href="/checkout" onClick={handelCheckout} className="btn">
          {t("check_out")}
        </Link>
      </Col>
    </Row>
  );
};

export default CartButtons;
