import { FilterPrice } from "@/data/CustomData";
import { useCustomSearchParams } from "@/utils/hooks/UseCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Input,
  Label,
} from "reactstrap";

const CollectionPrice = ({
  filter,
  setFilter,
  attributeAPIData,
  isOffCanvas,
}) => {
  const router = useRouter();
  const [category, attribute, sortBy, field, rating, layout] =
    useCustomSearchParams([
      "category",
      "attribute",
      "sortBy",
      "field",
      "rating",
      "layout",
    ]);
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const checkPrice = (value) => {
    return filter?.price?.includes(value);
  };
  const applyPrice = (event) => {
    const { value, checked } = event.target;
    let temp = [...(filter?.price || [])];

    // Toggle selection
    if (checked) {
      if (!temp.includes(value)) temp.push(value);
    } else {
      temp = temp.filter((item) => item !== value);
    }

    setFilter((prev) => ({
      ...prev,
      price: temp,
    }));

    // Construct query params
    const queryParams = new URLSearchParams();

    const allParams = {
      ...category,
      ...attribute,
      ...sortBy,
      ...field,
      ...rating,
      ...layout,
    };

    for (const key in allParams) {
      if (allParams[key]) queryParams.set(key, allParams[key]);
    }

    if (temp.length > 0) {
      let min = Infinity;
      let max = -Infinity;

      temp.forEach((range) => {
        let start, end;

        if (range.includes("-")) {
          [start, end] = range.split("-").map(Number);
        } else {
          start = Number(range);
          end = Number(range);
        }
        if (!isNaN(start)) min = Math.min(min, start);
        if (!isNaN(end)) max = Math.max(max, end);
      });

      queryParams.set("price", `${min}-${max}`);
    }

    router.push(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <AccordionItem className={`open ${isOffCanvas ? "col-lg-3" : ""}`}>
      <AccordionHeader targetId={(attributeAPIData?.length + 3).toString()}>
        <span>{t("price")}</span>
      </AccordionHeader>
      <AccordionBody accordionId={(attributeAPIData?.length + 3).toString()}>
        <div className="custom-sidebar-height">
          <ul className="shop-category-list">
            {FilterPrice.map((price, i) => (
              <div key={i} className="form-check collection-filter-checkbox">
                <Input
                  className="checkbox_animated"
                  type="checkbox"
                  id={`price-${price.id}`}
                  value={price?.value}
                  checked={checkPrice(price?.value)}
                  onChange={applyPrice}
                />
                <Label
                  className="form-check-label"
                  htmlFor={`price-${price.id}`}
                >
                  {price?.price ? (
                    <span className="name">
                      {price.text} ${price.price}
                    </span>
                  ) : (
                    <span className="name">
                      ${price.minPrice} - ${price.maxPrice}
                    </span>
                  )}
                </Label>
              </div>
            ))}
          </ul>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default CollectionPrice;
