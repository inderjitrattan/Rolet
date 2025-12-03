import Link from "next/link";
import Avatar from "../widgets/Avatar";
import { placeHolderImage } from "../widgets/Placeholder";

const CartProductDetail = ({ elem }) => {
  return (
    <td>
      <Link href={`/product/${elem?.product?.slug}`} className="product-image">
        <Avatar
          customeClass="product-image"
          customImageClass={"img-fluid"}
          data={
            elem?.variation?.variation_image ?? elem?.product?.product_thumbnail
          }
          placeHolder={placeHolderImage}
          name={elem?.product?.name}
        />
      </Link>
    </td>
  );
};

export default CartProductDetail;
