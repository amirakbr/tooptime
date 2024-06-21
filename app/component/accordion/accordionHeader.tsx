import { ReactNode } from "react";
import ArrowUpIcon from "../icons/arrowUpIcon";

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
      <ArrowUpIcon
        width={25}
        height={25}
        className={`${isContentOpen ? "" : "rotate-[180deg]"} transition-all`}
      />
    </div>
  );
};

export default AccordionHeader;
