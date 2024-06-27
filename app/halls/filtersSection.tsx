import { ReactNode } from "react";
import FiltersIcon from "../component/icons/filtersIcon";
import Accordion from "../component/accordion/accordion";
import Filters from "./filters/filters";

export const TextWithIconContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const FiltersSection = () => {
  return (
    <div className="flex flex-col gap-2 border border-1 border-red-900 p-1">
      <TextWithIconContainer>
        <FiltersIcon width={20} height={25} color="black" />
        <span className="font-medium text-lg">فیلترها</span>
      </TextWithIconContainer>
      <Filters />
    </div>
  );
};

export default FiltersSection;
