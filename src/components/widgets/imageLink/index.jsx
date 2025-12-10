import ProductIdsContext from "@/context/productIdsContext";
import { Href, storageURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const ImageLink = ({
  classes = {},
  imgUrl,
  placeholder,
  link,
  height,
  width,
  homeBanner = true,
  bgImg = false,
}) => {
  const [bgImage, setBgImage] = useState(bgImg);
  const { filteredProduct } = useContext(ProductIdsContext);

  const redirectToProduct = (productId) => {
    const product = filteredProduct.find((elem) => elem?.id == productId);
    return product?.slug ? `product/${product.slug}` : null;
  };

  const productRoute =
    imgUrl?.redirect_link?.link_type === "product"
      ? redirectToProduct(imgUrl?.redirect_link?.link)
      : null;

  const validPlaceholder = placeholder && placeholder.trim() !== "" ? placeholder : null;
  const imageSrc =
    imgUrl?.image_url && storageURL
      ? storageURL + imgUrl.image_url
      : validPlaceholder;

  const renderImage = () =>
    imageSrc ? (
      <Image
        src={imageSrc}
        className="bg-img w-100 img-fluid"
        alt="banner"
        height={height}
        width={width}
        unoptimized
      />
    ) : null;

  const renderBgImage = () =>
    imageSrc ? (
      <div
        className={`bg-size ${classes}`}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    ) : null;

  const renderContent = () => (bgImage ? renderBgImage() : renderImage());

  const renderLink = (href, isExternal = false) => (
    <Link
      className="h-100"
      href={href || "/"}
      target={isExternal ? "_blank" : undefined}
    >
      {renderContent()}
    </Link>
  );

  if (imgUrl?.redirect_link?.link_type === "external_url") {
    return renderLink(imgUrl?.redirect_link?.link, true);
  }

  if (imgUrl?.redirect_link?.link_type === "collection" && !homeBanner) {
    return renderLink(imgUrl?.redirect_link?.link || Href, true);
  }

  if (imgUrl?.redirect_link?.link_type === "collection" && homeBanner) {
    return renderLink(
      imgUrl?.redirect_link?.link
        ? `/category/${imgUrl?.redirect_link?.link}`
        : Href
    );
  }

  if (imgUrl?.redirect_link?.link_type === "product" && productRoute) {
    return renderLink(`/${productRoute}`);
  }

  return renderContent();
};

export default ImageLink;
