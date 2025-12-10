import request from "@/utils/axiosUtils";
import { OrderAPI } from "@/utils/axiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import DetailStatus from "./DetailStatus";
import DetailTitle from "./DetailTitle";
import DetailsTable from "./DetailsTable";
import DetailsConsumer from "./DetailsConsumer";
import SubOrdersTable from "./SubOrdersTable";
import Loader from "@/layout/loader";

const Details = ({ params }) => {
  const { data, isLoading, refetch } = useQuery(
    { queryKey: [OrderAPI, params],
      queryFn: () => request({ url: `${OrderAPI}/${params}` }),
        enabled: !!params,
        refetchOnWindowFocus: false,
        select: (res) => res?.data,
    }
  );
  if (isLoading)
    return (
      <div className="box-loader">
        <Loader classes={"blur-bg"} />
      </div>
    );
  return (
    <>
      <DetailTitle params={params} data={data} />
      <DetailStatus data={data} />
      <DetailsTable data={data} />
      <DetailsConsumer data={data} />
      {data?.sub_orders?.length ? (
        <SubOrdersTable data={data?.sub_orders} />
      ) : null}
    </>
  );
};

export default Details;
