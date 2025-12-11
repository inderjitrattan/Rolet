import SettingContext from "@/context/settingContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CartButton from "./widgets/CartButton";
import ProductHoverButton from "./widgets/ProductHoverButton";
import ProductRatingBox from "./widgets/ProductRatingBox";

const ProductBox7 = ({ productState }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <>
      <div
        className={`basic-product theme-product-6 ${
          productState?.product?.stock_status === "out_of_stock"
            ? "sold-out"
            : ""
        }`}
      >
        <div className="img-wrapper">
          {productState?.product?.unit && (
            <label className="unit-label">{productState?.product?.unit}</label>
          )}

          <ul className="trending-label">
            {productState?.product?.stock_status === "out_of_stock" ? (
              <li className="out_of_stock">{t("sold_out")}</li>
            ) : null}
            {productState?.product?.is_sale_enable ? (
              <li>{t("sale")}</li>
            ) : null}
            {productState?.product?.is_featured ? (
              <li>{t("featured")}</li>
            ) : null}
            {productState?.product?.is_trending ? (
              <li>{t("trending")}</li>
            ) : null}
          </ul>

          <Link
            href={`/product/${productState?.product?.slug}`}
            className="img-fluid lazyload bg-img bg-top"
          >
            <img
              src={productState?.product?.product_thumbnail?.original_url}
              className="img-fluid bg-img"
              alt="product-image"
            />
          </Link>
          <div className="cart-info">
            <ProductHoverButton productstate={productState.product} />
          </div>
        </div>
        <div className="product-detail">
          <Link
            href={`/product/${productState?.product?.slug}`}
            className="product-title"
          >
            {productState?.product?.name}
          </Link>
          <div className="rating-w-count">
            <div className="rating">
              <ProductRatingBox ratingCount={productState?.rating_count} />
            </div>
            <span>({productState?.product?.reviews_count})</span>
          </div>
          <h4 className="price">
            {convertCurrency(productState?.product?.sale_price)}{" "}
            {productState?.product?.discount && (
              <>
                {productState?.selectedVariation?.price !=
                  productState?.selectedVariation?.sale_price ||
                  (productState?.product?.price !=
                    productState?.product?.sale_price && (
                    <del>{convertCurrency(productState?.product?.price)}</del>
                  ))}
                <span className="discounted-price">
                  {productState?.product?.discount}% Off
                </span>
              </>
            )}
          </h4>
          <div className="addtocart_btn">
          <button
            className="add-button add_cart"
              onClick={() => {
              const productName = productState?.product?.name;
              const phone = "917016623913";
              const message = `Hello, I would like to enquire about the product: ${productName}`;
              const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
              message
            )}`;
              window.open(url, "_blank");
            }}>
            Enquire Now
            </button>
            <CartButton
              productState={productState}
              selectedVariation={productState.selectedVariation}
              quantity={true}
              classes="add-button add_cart"
              text="Add to cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox7;
