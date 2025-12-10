"use client";
import WrapperComponent from "@/components/widgets/WrapperComponent";
import ThemeOptionContext from "@/context/themeOptionsContext";
import Loader from "@/layout/loader";
import Breadcrumbs from "@/utils/commonComponents/breadcrumb";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import TrackingForm from "./TrackingForm";

const TrackingData = ({ params }) => {
  const { t } = useTranslation("common");
  const { isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs
        title={"order_tracking"}
        subNavigation={[{ name: "Order Tracking" }]}
      />
      <WrapperComponent
        classes={{
          sectionClass: "section-b-space",
          fluidClass: "container w-100",
        }}
        customCol={true}
      >
        <Col xxl={4} xl={5} lg={6} sm={8} className="mx-auto">
          <div className="order-search-content">
            <h3>{t("order_tracking")}</h3>
            <p>{t("order_tracking_description")}</p>
            <div className="input-box">
              <TrackingForm />
            </div>
          </div>
        </Col>
      </WrapperComponent>
    </>
  );
};

export default TrackingData;
