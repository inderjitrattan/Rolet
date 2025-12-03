import OrderDetailsContain from "@/components/pages/account/orders/details";

const OrderDetails = ({ params }) => {
  return (
    <>{params?.orderId && <OrderDetailsContain params={params?.orderId} />}</>
  );
};

export default OrderDetails;
