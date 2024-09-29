import React from "react";
import { _aboutFlexPool } from "../components/pages/aboutFlexPool/data";
import Docs from "../components/pageStructure/docs";
const AboutFlexPool = () => {
  return (
    <>
      {_aboutFlexPool.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            next={"FlexPool & Other Apps"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            previous={"What Is A FlexPool?"}
          />
        </div>
      ))}
    </>
  )
}
 
export default AboutFlexPool;