import { ReactNode } from "react";
import Accordion from "./accordion";

const AccordionContent = ({
  children,
  isContentOpen,
}: {
  children: ReactNode;
  isContentOpen: boolean;
}) => {
  return (
    <div
      className={`grid ${
        isContentOpen ? "grid-rows-1 animate-appear" : "grid-rows-[0]"
      } transition-all mr-1`}
    >
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default AccordionContent;
