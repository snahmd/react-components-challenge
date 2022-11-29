import React from "react";

import "./XAccordion.css"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const AddLinksToText = ({ text }) => {
  return (
    <p>
      {text.split("***").map((text, i) => {
        if (i % 2 == 1) {
          return <a href={text.split("&&&")[0]}>{text.split("&&&")[1]}</a>;
        } else {
          return <>{text}</>;
        }
      })}
    </p>
  );
};

const XAccordion = ({ content, preExpanded }) => {
  return (
    <>
      <Accordion preExpanded={preExpanded ? [0] : undefined} allowZeroExpanded>
        {content.map((item, i) => (
          <AccordionItem
            className="xaccordionitem"
            key={i}
            uuid={i}
          >
            <AccordionItemHeading className="xaccordionitem-header">
              <AccordionItemButton>
                <h5 >
                  <button>{item.title}</button>
                </h5>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="xaccordionitem-body">
              {typeof item.desc == "object" ? (
                item.desc.map((text) => <AddLinksToText text={text}/>)
              ) : (
                <AddLinksToText text={item.desc}/>
              )}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default XAccordion;
