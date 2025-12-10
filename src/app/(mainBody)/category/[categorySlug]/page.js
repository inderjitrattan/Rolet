import CategoryMainPage from "@/components/category";

const categorySlugPage = async ({ params }) => {
  const { categorySlug } = await params;
  
  return <CategoryMainPage categorySlug={categorySlug} />;
};

export default categorySlugPage;
