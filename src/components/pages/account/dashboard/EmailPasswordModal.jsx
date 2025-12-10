import CustomModal from "@/components/widgets/CustomModal";
import AccountContext from "@/context/accountContext";
import {
  UpdateProfileAPI,
  UpdateProfilePasswordAPI,
} from "@/utils/axiosUtils/API";
import useCreate from "@/utils/hooks/UseCreate";
import { Form, Formik } from "formik";
import { useContext } from "react";
import {
  YupObject,
  nameSchema,
  passwordConfirmationSchema,
  passwordSchema,
} from "@/utils/validation/ValidationSchema";
import EmailPasswordForm from "./EmailPasswordForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import { ToastNotification } from "@/utils/customFunctions/ToastNotification";

const EmailPasswordModal = ({ modal, setModal }) => {
  const { accountData, setAccountData } = useContext(AccountContext);
  const { data, mutate, isLoading, error } = useCreate(
    modal == "email" ? UpdateProfileAPI : UpdateProfilePasswordAPI,
    false,
    false,
    "Yes",
    (resDta) => {
      if (resDta.status == 200 || resDta.status == 201) {
        setModal("");
        {
          modal == "email" &&
            setAccountData((prev) => {
              return {
                ...prev,
                name: resDta?.data?.name,
                country_code: resDta?.data?.country_code,
                phone: resDta?.data?.phone,
              };
            });
        }
      } else {
        ToastNotification("error", error);
      }
    }
  );

  return (
    <>
      <CustomModal
        modal={modal == "email" || modal == "password" ? true : false}
        setModal={setModal}
        classes={{
          modalClass: "theme-modal-2",
          modalBodyClass: "address-form",
          title: `${modal == "email" ? "Edit Profile" : "ChangePassword"}`,
        }}
      >
        <Formik
          initialValues={{
            name: accountData?.name || "",
            email: accountData?.email,
            country_code: accountData?.country_code || "91",
            phone: accountData?.phone || "",
            current_password: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={YupObject({
            name: nameSchema,
            country_code: nameSchema,
            phone: nameSchema,
            current_password: modal == "password" && nameSchema,
            password: modal == "password" && passwordSchema,
            password_confirmation:
              modal == "password" && passwordConfirmationSchema,
          })}
          onSubmit={(values) => {
            let passwordObj = {
              current_password: values["current_password"],
              password: values["password"],
              password_confirmation: values["password_confirmation"],
              _method: "PUT",
            };
            let emailObj = {
              name: values["name"],
              email: values["email"],
              country_code: values["country_code"],
              phone: values["phone"],
              _method: "PUT",
            };
            if (modal == "password") {
              mutate(passwordObj);
            } else {
              mutate(emailObj);
            }
          }}
        >
          <Form>
            {modal == "email" && (
              <EmailPasswordForm isLoading={isLoading} setModal={setModal} />
            )}
            {modal == "password" && (
              <UpdatePasswordForm isLoading={isLoading} setModal={setModal} />
            )}
          </Form>
        </Formik>
      </CustomModal>
    </>
  );
};

export default EmailPasswordModal;
