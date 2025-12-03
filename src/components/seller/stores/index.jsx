"use client";
import WrapperComponent from "@/components/widgets/WrapperComponent";
import ThemeOptionContext from "@/context/themeOptionsContext";
import Loader from "@/layout/loader";
import request from "@/utils/axiosUtils";
import { StoreAPI } from "@/utils/axiosUtils/API";
import Breadcrumbs from "@/utils/commonComponents/breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import StoreCard from "./StoreCard";

const SellerStoreContent = () => {
  const searchParams = useSearchParams();
  const querySellerLayout = searchParams.get("layout");
  const { themeOption } = useContext(ThemeOptionContext);
  const [page, setPage] = useState(1);
  const { data, isLoading, fetchStatus } = useQuery(
    { queryKey: [page],
      queryFn: () =>
        request({
          url: StoreAPI,
          params: { status: 1, page: page, paginate: 9 },
        }),
      enabled: true, refetchOnWindowFocus: false, select: (res) => res?.data }
  );
  const isSellerLayout = querySellerLayout
    ? querySellerLayout
    : themeOption?.seller?.store_layout;
  if (isLoading) return <Loader />;

  return (
    <>
      <Breadcrumbs
        title={"SellerStores"}
        subNavigation={[{ name: "SellerStores" }]}
      />
      <WrapperComponent
        classes={{
          sectionClass: "seller-grid-section section-b-space",
          row: "g-4",
          fluidClass: "container",
        }}
        customCol={true}
      >
        <StoreCard data={data} fetchStatus={fetchStatus} setPage={setPage} />
      </WrapperComponent>
    </>
  );
};

export default SellerStoreContent;
