import { useQuery } from "@tanstack/react-query";
import request from "../axiosUtils";
import { HomePageAPI } from "../axiosUtils/API";

const useCustomDataQuery = ({ params }) => {
  return useQuery(
    {queryKey: ["data", params],
      queryFn: async () => {
        const response = await request({
          url: HomePageAPI,
          params: { slug: params },
        });
        return response?.data?.content;
    },
      select: (data) => data,
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
};

export default useCustomDataQuery;
