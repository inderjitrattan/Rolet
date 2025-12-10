import ThemeOptionContext from "@/context/themeOptionsContext";
import { WishlistAPI } from "@/utils/axiosUtils/API";
import { Href } from "@/utils/constants";
import { ToastNotification } from "@/utils/customFunctions/ToastNotification";
import useCreate from "@/utils/hooks/UseCreate";
import Cookies from "js-cookie";
import { useContext } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";

const AddToWishlist = ({ productObj, customClass }) => {
  const { mutate } = useCreate(
    WishlistAPI,
    false,
    false,
    "Added to Wishlist List"
  );
  const { setOpenAuthModal } = useContext(ThemeOptionContext);
  const handelWishlist = (productObj) => {
    if (Cookies.get("uat_multikart")) {
      mutate({ product_id: productObj?.id });
    } else {
      setOpenAuthModal(true);
      ToastNotification("error", "Unauthenticated");
    }
  };
  return (
    <>
      {customClass ? (
        <a
          onClick={() => handelWishlist(productObj)}
          href={Href}
          className={customClass ? customClass : ""}
        >
          {productObj.is_wishlist ? (
            <RiHeartFill className="theme-color" />
          ) : (
            <RiHeartLine />
          )}
        </a>
      ) : (
        <li title="Wishlist" onClick={() => handelWishlist(productObj)}>
          <a className={"heart-icon"}>
            {productObj.is_wishlist ? (
              <RiHeartFill className="theme-color" />
            ) : (
              <RiHeartLine />
            )}
          </a>
        </li>
      )}
    </>
  );
};

export default AddToWishlist;
