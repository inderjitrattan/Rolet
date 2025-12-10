import Avatar from "@/components/widgets/Avatar";
import CustomModal from "@/components/widgets/CustomModal";
import SimpleInputField from "@/components/widgets/inputFields/SimpleInputField";
import { placeHolderImage } from "@/components/widgets/Placeholder";
import SettingContext from "@/context/settingContext";
import Btn from "@/elements/buttons/Btn";
import { RefundAPI } from "@/utils/axiosUtils/API";
import useCreate from "@/utils/hooks/UseCreate";
import { YupObject, nameSchema } from "@/utils/validation/ValidationSchema";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const RefundModal = ({ modal, setModal, storeData }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  const { mutate, isLoading } = useCreate(
    RefundAPI,
    false,
    false,
    "Refund request sent successfully",
    (resDta) => {
      if (resDta.status == 200 || resDta.status == 201) {
        setModal(false);
      }
    },
    false,
    false,
    false,
    false,
    false,
    () => setModal(false)
  );
  return (
    <CustomModal
      modal={modal ? true : false}
      setModal={setModal}
      classes={{
        modalClass: "theme-modal-2 refund-modal",
        modalHeaderClass: "p-0",
        title: "Refund",
      }}
    >
      <Formik
        initialValues={{
          reason: "",
          payment_type: "wallet",
          product_id: storeData?.pivot?.product_id,
          order_id: storeData?.pivot?.order_id,
        }}
        validationSchema={YupObject({
          reason: nameSchema,
          payment_type: nameSchema,
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="product-review-form">
            <div className="product-wrapper">
              <div className="product-image">
                <Avatar
                  data={
                    storeData?.product_thumbnail
                      ? storeData?.product_thumbnail
                      : placeHolderImage
                  }
                  customImageClass="img-fluid"
                  name={storeData?.name}
                />
              </div>
              <div className="product-content">
                <h5 className="name">{storeData?.name}</h5>
                <div className="product-review-rating">
                  <div className="product-rating">
                    <h6 className="price-number">
                      {convertCurrency(storeData?.pivot?.single_price)}
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-box">
              <SimpleInputField
                nameList={[
                  {
                    name: "reason",
                    placeholder: t("enter_reason"),
                    type: "textarea",
                    toplabel: "Reason",
                    require: "true",
                    rows: 3,
                  },
                ]}
              />
              {/* {errors["payment_type"] && <div className="invalid-feedback d-block">{t("Paymenttypeisrequired")}</div>} */}
            </div>
            <div className="review-box">
              <div className="form-box">
                {/* <Label htmlFor="address1">{t("PaymentOption")}</Label> */}
                <select
                  className="form-select"
                  name="payment_type"
                  value={values?.payment_type}
                  onChange={(e) =>
                    setFieldValue("payment_type", e.target.value)
                  }
                >
                  <option disabled>{t("select_payment_option")}</option>
                  <option value="wallet">{t("Wallet")}</option>
                  <option value="paypal">{t("Paypal")}</option>
                </select>
                {errors["payment_type"] && touched["payment_type"] && (
                  <div className="invalid-feedback d-block">
                    {t("payment_type_is_required")}
                  </div>
                )}
              </div>
            </div>
            <div className="refund-footer-button">
              <Btn
                className="btn-md btn-outline fw-bold"
                title="cancel"
                type="button"
                onClick={() => setModal("")}
              />
              <Btn
                className="btn-solid"
                title="Submit"
                type="submit"
                loading={Number(isLoading)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default RefundModal;
