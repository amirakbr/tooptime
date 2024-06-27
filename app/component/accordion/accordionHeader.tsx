import { ReactNode } from "react";
import ArrowUpIcon from "../icons/arrowUpIcon";
import { AltArrowDown } from "solar-icon-set";

const AccordionHeader = ({
  children,
  handleHeaderClick,
  isContentOpen,
}: {
  children: ReactNode;
  handleHeaderClick: () => void;
  isContentOpen: boolean;
}) => {
  return (
    <div
      onClick={handleHeaderClick}
      className="flex items-center justify-between"
    >
      {children}

      <AltArrowDown
        className={`!w-5 !h-5 ${
          isContentOpen ? "" : "rotate-[180deg]"
        } transition-all`}
        iconStyle="LineDuotone"
        color="black"
      />
    </div>
  );
};

export default AccordionHeader;
