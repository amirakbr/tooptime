import { ReactNode } from "react";
import FiltersIcon from "../component/icons/filtersIcon";
import Accordion from "../component/accordion/accordion";

const TextWithIconContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};
const FiltersSection = () => {
  return (
    <div className="flex flex-col gap-2 border border-1 border-red-900 p-1">
      <TextWithIconContainer>
        <FiltersIcon width={20} height={25} color="black" />
        <span className="font-medium text-lg">فیلترها</span>
      </TextWithIconContainer>
      <Accordion bodyComponent={<p>test</p>} headerComponent={<p>test</p>} className="bg-white rounded"/>
    </div>
  );
};

export default FiltersSection;
