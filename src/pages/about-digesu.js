import React from "react";
import { _aboutDigesu } from "../components/pages/aboutDigesu/data";
import Docs from "../components/pageStructure/docs";
const AboutDigesu = () => {
  return (
    <>
      {_aboutDigesu.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            next={"Digesu & Other Apps"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            previous={"What Is A Digesu?"}
          />
        </div>
      ))}
    </>
  )
}
 
export default AboutDigesu;