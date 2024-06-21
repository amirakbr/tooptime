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
      } transition-all`}
    >
      {children}
    </div>
  );
};

export default AccordionContent;
