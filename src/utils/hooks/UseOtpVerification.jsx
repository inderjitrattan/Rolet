import AccountContext from "@/context/accountContext";
import CartContext from "@/context/cartContext";
import CompareContext from "@/context/compareContext";
import ThemeOptionContext from "@/context/themeOptionsContext";
import WishlistContext from "@/context/wishlistContext";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import request from "../axiosUtils";
import { CompareAPI, SyncCart, VerifyTokenAPI } from "../axiosUtils/API";
import useCreate from "./UseCreate";

const LoginWithMobileHandle = (
  responseData,
  router,
  refetch,
  compareRefetch,
  CallBackUrl,
  mutate,
  cartRefetch,
  setShowBoxMessage,
  addToWishlist,
  compareCartMutate,
  setOpenAuthModal
) => {
  if (responseData.status === 200 || responseData.status === 201) {
    Cookies.set("uat_multikart", responseData.data?.access_token, {
      path: "/",
      expires: new Date(Date.now() + 24 * 60 * 6000),
    });
    const ISSERVER = typeof window === "undefined";
    if (typeof window !== "undefined") {
      Cookies.set("account_multikart", JSON.stringify(responseData.data));
      localStorage.setItem(
        "account_multikart",
        JSON.stringify(responseData.data)
      );
    }

    const oldCartValue = JSON.parse(localStorage.getItem("cart"))?.items;
    oldCartValue?.length > 0 && mutate(transformLocalStorageData(oldCartValue));
    refetch();
    compareRefetch();
    setOpenAuthModal(false);
    cartRefetch();
    router.push("/account/dashboard");
    const wishListID = Cookies.get("wishListID");
    const CompareId = Cookies.get("compareId");
    CompareId ? compareCartMutate({ product_id: CompareId }) : null;
    const productObj = { id: wishListID };
    wishListID ? addToWishlist(productObj) : null;
    router.push(`/${CallBackUrl}`);
    Cookies.remove("wishListID");
    Cookies.remove("compareId");
    localStorage.removeItem("cart");
  } else {
    setShowBoxMessage(responseData.response.data.message);
  }
};

const useOtpVerification = () => {
  const { setOpenAuthModal } = useContext(ThemeOptionContext);
  const { mutate } = useCreate(SyncCart, false, false, "No");
  const { addToWishlist } = useContext(WishlistContext);
  const { mutate: compareCartMutate } = useCreate(
    CompareAPI,
    false,
    false,
    "Added to Compare List"
  );
  const CallBackUrl = Cookies.get("CallBackUrl")
    ? Cookies.get("CallBackUrl")
    : Cookies.set("CallBackUrl", "/");
  const { refetch } = useContext(AccountContext);
  const { refetch: cartRefetch } = useContext(CartContext);
  const { refetch: compareRefetch } = useContext(CompareContext);
  const router = useRouter();
  return useMutation(
    {mutationFn: (data) => request({ url: VerifyTokenAPI, method: "post", data }, router),
      onSuccess: (responseData, requestData) =>
        LoginWithMobileHandle(
          responseData,
          router,
          refetch,
          compareRefetch,
          CallBackUrl,
          mutate,
          cartRefetch,
          setShowBoxMessage,
          addToWishlist,
          compareCartMutate,
          setOpenAuthModal
        ),
    }
  );
};
export default useOtpVerification;
