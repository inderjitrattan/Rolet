import request from "@/utils/axiosUtils";
import { WishlistAPI } from "@/utils/axiosUtils/API";
import useCreate from "@/utils/hooks/UseCreate";
import useDelete from "@/utils/hooks/UseDelete";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import WishlistContext from ".";
import ThemeOptionContext from "../themeOptionsContext";

const WishlistProvider = (props) => {
  const isCookie = Cookies.get("uat_multikart");
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { setOpenAuthModal } = useContext(ThemeOptionContext);

  // Getting data from Wishlist API
  const {
    data: WishlistApiData,
    isLoading: WishlistAPILoading,
    refetch,
  } = useQuery({ queryKey: [WishlistAPI], queryFn: () => request({ url: WishlistAPI }),
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });

  // Adding data to Wishlist API
  const { mutate, isLoading } = useCreate(
    WishlistAPI,
    false,
    false,
    "Added to Wishlist List"
  );

  // Delete Cart API Data
  const { mutate: deleteWishlist, isLoading: deleteWishlistLoader } = useDelete(
    WishlistAPI,
    false,
    false,
    "Product Deleted from Wishlist"
  );

  // Refetching Cart API
  useEffect(() => {
      refetch();
  }, []);

  // Remove and Delete cart data from API and State
  const removeWishlist = (id, wishId) => {
    if (isCookie && wishId) {
      let deleteId = typeof wishId == "object" ? wishId.id : wishId;
      deleteWishlist(deleteId, {
        onSuccess: () => {
          refetch(); // ✅ Refetch to get updated list
        },
        onError: (error) => {
            console.error("Error deleting product from wishlist:", error);
          },
      });
    }
  };

  useEffect(() => {
    if (isCookie) {
      if (WishlistApiData) {
        setWishlistProducts(WishlistApiData.data);
      }
    }
  }, [WishlistAPILoading, isCookie, WishlistApiData]);

  // Common Handler for Add to wishlist
  const addToWishlist = (productObj) => {
    if (Cookies.get("uat_multikart")) {
      mutate(
        { product_id: productObj?.id },
        {
          onSuccess: () => {
            refetch(); // Refetch the wishlist after adding the product
          },
          onError: (error) => {
            console.error("Error adding to wishlist:", error);
          },
        }
      );
    } else {
      setOpenAuthModal(true);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        ...props,
        wishlistProducts,
        WishlistAPILoading,
        setWishlistProducts,
        removeWishlist,
        refetch,
        isLoading,
        WishlistAPILoading,
        addToWishlist,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
