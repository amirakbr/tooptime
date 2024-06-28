"use client";

import { ReactNode, useState } from "react";
import AccordionContent from "./accordionContent";
import AccordionHeader from "./accordionHeader";

const Accordion = ({
  headerComponent,
  bodyComponent,
  className = "",
}: {
  headerComponent: ReactNode;
  bodyComponent: ReactNode;
  className?: string;
}) => {
  const [isAccordionContentOpen, setIsAccordionContentOpen] =
    useState<boolean>(true);

  const handleShowAccordionContent = () => {
    setIsAccordionContentOpen(!isAccordionContentOpen);
  };
  return (
    <div
      className={`flex flex-col py-1 border-t-2 border-t-primary ${
        isAccordionContentOpen ? "gap-2" : "gap-0"
      } overflow-hidden transition-all ${className}`}
    >
      <AccordionHeader
        handleHeaderClick={handleShowAccordionContent}
        isContentOpen={isAccordionContentOpen}
      >
        {headerComponent}
      </AccordionHeader>
      <AccordionContent isContentOpen={isAccordionContentOpen}>
        {bodyComponent}
      </AccordionContent>
    </div>
  );
};

export default Accordion;
