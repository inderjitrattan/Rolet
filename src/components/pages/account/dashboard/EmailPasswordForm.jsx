import SearchableSelectInput from "@/components/widgets/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/widgets/inputFields/SimpleInputField";
import { AllCountryCode } from "@/data/CountryCode";
import Btn from "@/elements/buttons/Btn";
import { useTranslation } from "react-i18next";
import { Col, ModalFooter, Row } from "reactstrap";

const EmailPasswordForm = ({ isLoading, setModal }) => {
  const { t } = useTranslation("common");
  return (
    <Row className="g-sm-3 g-2">
      <SimpleInputField
        nameList={[
          {
            name: "name",
            placeholder: t("enter_name"),
            toplabel: "Name",
            colprops: { xs: 12 },
            require: "true",
          },
          {
            name: "email",
            placeholder: t("enter_email_address"),
            toplabel: "Email",
            disabled: true,
            colprops: { xs: 12 },
            require: "true",
          },
        ]}
      />
      <Col xs={12} className="phone-field">
        <div className="country-input position-relative">
          <SimpleInputField
            nameList={[
              {
                name: "phone",
                type: "number",
                placeholder: t("enter_phone"),
                require: "true",
                toplabel: "Phone",
                colclass: "country-input-box",
              },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: "country_code",
                notitle: "true",
                inputprops: {
                  name: "country_code",
                  id: "country_code",
                  options: AllCountryCode,
                },
              },
            ]}
          />
        </div>
      </Col>
      <Col xs={12}>
        <ModalFooter className="ms-auto justify-content-end save-back-button pt-0">
          <Btn
            color="transparent"
            className="btn-md btn-outline fw-bold"
            onClick={() => setModal(false)}
          >
            {t("cancel")}
          </Btn>
          <Btn
            color="transparent"
            className="btn-solid"
            type="submit"
            loading={Number(isLoading)}
          >
            {t("submit")}
          </Btn>
        </ModalFooter>
      </Col>
    </Row>
  );
};

export default EmailPasswordForm;
