import request from "@/utils/axiosUtils";
import { SelfAPI } from "@/utils/axiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import AccountContext from ".";

const AccountProvider = (props) => {
  const cookies = Cookies.get("uat_multikart");
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [accountData, setAccountData] = useState();
  const { data, refetch, fetchStatus } = useQuery(
    { queryKey: [SelfAPI],
      queryFn: () => request({ url: SelfAPI }),
        enabled: false,
        select: (res) => {
          return res?.data;
        },
    }
  );

  useEffect(() => {
    cookies && refetch();
  }, [cookies]);

  useEffect(() => {
    if (data) {
      setAccountData(data);
    }
  }, [fetchStatus == "fetching", data]);

  return (
    <AccountContext.Provider
      value={{
        ...props,
        accountData,
        setAccountData,
        refetch,
        mobileSideBar,
        setMobileSideBar,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
