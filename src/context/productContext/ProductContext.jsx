import { useEffect, useState } from "react";
import ProductIdsContext from ".";
import { useQuery } from "@tanstack/react-query";
import { ProductAPI } from "@/utils/axiosUtils/API";
import request from "@/utils/axiosUtils";

const ProductIdsProvider = (props) => {
  const [getProductParams, setGetProductPrams] = useState({});
  const [filteredProduct, setFilteredProduct] = useState([]);
  const { data, refetch, isLoading } = useQuery(
    { queryKey: [ProductAPI, getProductIds?.ids],
      queryFn: () =>
        request({ url: ProductAPI, params: { ...getProductParams, status: 1 } }),
        enabled: false,
        refetchOnWindowFocus: false,
        select: (data) => data.data.data,
    }
  );

  useEffect(() => {
    Object.keys(getProductParams).length > 0 && refetch();
  }, [getProductParams]);

  useEffect(() => {
    if (data) {
      setFilteredProduct((prev) => data);
    }
  }, [isLoading, getProductIds]);

  return (
    <ProductIdsContext.Provider
      value={{ ...props, filteredProduct, setGetProductPrams, isLoading }}
    >
      {props.children}
    </ProductIdsContext.Provider>
  );
};

export default ProductIdsProvider;
