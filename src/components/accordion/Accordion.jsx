
import { createContext, useState, useContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";


const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error('You are not able to read context');
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId(prev => prev === id ? null : id);
  }

  const contextValue = {
    openItemId,
    toggleItem
  }

  return <AccordionContext.Provider value={contextValue}>
    <ul className={className}>
      {children}
    </ul>
  </AccordionContext.Provider>
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;