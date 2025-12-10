"use client";
import { Container } from "reactstrap";
import PageCard from "./PageCard";
import Breadcrumbs from "@/utils/commonComponents/breadcrumb";

const PagesContent = ({ params }) => {
  return (
    <>
      <Breadcrumbs
        title={params.split("-").join(" ")}
        subNavigation={[{ name: "pages" }, { name: params }]}
      />
      <section className="blog-section section-b-space section-t-space">
        <Container>
          <PageCard params={params} />
        </Container>
      </section>
    </>
  );
};

export default PagesContent;
