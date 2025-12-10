import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import VariationModal from "../variationModal";

const QuickViewButton = ({ productstate, hideAction, className }) => {
  const [variationModal, setVariationModal] = useState("");
  return (
    <>
      {!hideAction?.includes("view") && (
        <div className={className ? className : ""} title="View" onClick={() => setVariationModal(productstate?.id)}>
          <a>
            <RiSearchLine />
          </a>
        </div>
      )}
      <VariationModal setVariationModal={setVariationModal} variationModal={variationModal} productObj={productstate} />
    </>
  );
};

export default QuickViewButton;
