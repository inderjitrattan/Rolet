"use client";
import WrapperComponent from "@/components/widgets/WrapperComponent";
import Loader from "@/layout/loader";
import request from "@/utils/axiosUtils";
import { BlogAPI } from "@/utils/axiosUtils/API";
import Breadcrumbs from "@/utils/commonComponents/breadcrumb";
import { useQuery } from "@tanstack/react-query";
import BlogCardDetails from "../BlogCardDetails";

const SingleBlog = ({ params }) => {
  const {
    data: Blog,
    isLoading,
    refetch,
  } = useQuery({ queryKey: [params], queryFn: () => request({ url: `${BlogAPI}/slug/${params}` }),
    enabled: !!params,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs
            title={Blog?.title}
            subNavigation={[
              { name: "Blogs", link: "/blogs" },
              { name: Blog?.title },
            ]}
          />
          <WrapperComponent
            classes={{
              sectionClass: " ratio2_3 blog-detail-page section-b-space",
              fluidClass: "container",
            }}
            noRowCol={true}
          >
            <BlogCardDetails Blog={Blog} key={params} />
          </WrapperComponent>
        </>
      )}
    </>
  );
};

export default SingleBlog;
