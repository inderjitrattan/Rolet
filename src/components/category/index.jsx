"use client";
import CategoryContext from "@/context/categoryContext";
import Loader from "@/layout/loader";
import Breadcrumbs from "@/utils/commonComponents/breadcrumb";
import { useCustomSearchParams } from "@/utils/hooks/UseCustomSearchParams";
import { useContext, useEffect, useState } from "react";
import CollectionLeftSidebar from "../collection/collectionLeftSidebar";

const CategoryMainPage = ({ categorySlug }) => {
  const [filter, setFilter] = useState({
    category: [categorySlug],
    brand: [],
    price: [],
    attribute: [],
    rating: [],
    page: 1,
    sortBy: "asc",
    field: "created_at",
  });
  const [brand, attribute, price, rating, sortBy, field, layout, page] =
    useCustomSearchParams([
      "brand",
      "attribute",
      "price",
      "rating",
      "sortBy",
      "field",
      "layout",
      "page",
    ]);
  useEffect(() => {
    setFilter((prev) => {
      return {
        ...prev,
        page: page ? page?.page : 1,
        brand: brand ? brand?.brand?.split(",") : [],
        attribute: attribute ? attribute?.attribute?.split(",") : [],
        price: price ? price?.price?.split(",") : [],
        rating: rating ? rating?.rating?.split(",") : [],
        sortBy: sortBy ? sortBy?.sortBy : "asc",
        field: field ? field?.field : "created_at",
      };
    });
  }, [brand, attribute, price, rating, sortBy, field, page]);

  const { categoryIsLoading } = useContext(CategoryContext);
  if (categoryIsLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs
        title={`Category: ${categorySlug}`}
        subNavigation={[{ name: categorySlug }]}
      />
      <CollectionLeftSidebar
        filter={filter}
        setFilter={setFilter}
        hideCategory
        categorySlug={categorySlug}
      />
    </>
  );
};

export default CategoryMainPage;
