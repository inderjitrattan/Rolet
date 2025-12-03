import SimpleInputField from "@/components/widgets/inputFields/SimpleInputField";
import Btn from "@/elements/buttons/Btn";
import request from "@/utils/axiosUtils";
import { PaymentAccountAPI } from "@/utils/axiosUtils/API";
import useCreate from "@/utils/hooks/UseCreate";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody } from "reactstrap";
import AccountHeading from "../common/AccountHeading";
import Loader from "@/layout/loader";
import { useRouter } from "next/navigation";

const BankDetailForm = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    data,
    refetch,
    isLoading: paymentLoader,
  } = useQuery(
    { queryKey: [PaymentAccountAPI],
      queryFn: () => request({ url: PaymentAccountAPI }, router),
        enabled: false,
        refetchOnWindowFocus: false,
        select: (res) => res?.data,
    }
  );
  useEffect(() => {
    refetch();
  }, []);
  const { mutate, isLoading } = useCreate(
    PaymentAccountAPI,
    false,
    false,
    "Account Details Updated Successfully."
  );

  if (paymentLoader) return <Loader />;
  return (
    <Card className="mt-0">
      <CardBody>
        <Formik
          initialValues={{
            bank_account_no: data ? data?.bank_account_no : "",
            bank_holder_name: data ? data?.bank_holder_name : "",
            bank_name: data ? data?.bank_name : "",
            paypal_email: data ? data?.paypal_email : "",
            swift: data ? data?.swift : "",
            ifsc: data ? data?.ifsc : "",
            paypal_email: data ? data?.paypal_email : "",
          }}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          <Form className="themeform-auth">
            <AccountHeading title="BankDetails" classes={"top-sec"} />
            <SimpleInputField
              nameList={[
                {
                  name: "bank_account_no",
                  placeholder: t("enter_bank_account_no"),
                  type: "number",
                  title: "bank_account_no",
                },
                {
                  name: "bank_name",
                  placeholder: t("enter_bank_name"),
                  title: "bank_name",
                },
                {
                  name: "bank_holder_name",
                  placeholder: t("enter_bank_holder_name"),
                  title: "holder_name",
                },
                {
                  name: "swift",
                  placeholder: t("enter_swift"),
                  title: "swift",
                },
                { name: "ifsc", placeholder: t("enter_ifsc"), title: "ifsc" },
              ]}
            />
            <AccountHeading
              title="PaymentDetails"
              classes={"mb-3 top-sec top-sec-2"}
            />
            <SimpleInputField
              nameList={[
                {
                  name: "paypal_email",
                  type: "email",
                  placeholder: t("enter_paypal_email"),
                  title: "paypal_email",
                },
              ]}
            />
            <div className="text-end">
              <Btn className="btn-solid" loading={Number(isLoading)}>
                {t("save")}
              </Btn>
            </div>
          </Form>
        </Formik>
      </CardBody>
    </Card>
  );
};

export default BankDetailForm;
