"use client";

import PublicationMainPage from "@/components/publication";

const PublicationSlugPage = ({ params }) => {
  return <PublicationMainPage slug={params?.publicationSlug} />;
};

export default PublicationSlugPage;
