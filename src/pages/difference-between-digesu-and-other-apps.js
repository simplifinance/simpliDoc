import React from "react";
import Docs from "../components/pageStructure/docs";
 import { _differnceBetweenDigesuAndOtherDapps } from "../components/pages/DigesuAndDapps/data"

const DifferenceBetweenDigesuAndOtherDapps = () => {
 
  return (
    <>
      {_differnceBetweenDigesuAndOtherDapps.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"About Digesu"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"What Is A Band?"}
          />
        </div>
      ))}
    </>
  )
}
 
export default DifferenceBetweenDigesuAndOtherDapps;