import React from "react"
import { _howToPayback } from "../components/pages/howToPayback/data"
import Docs from "../components/pageStructure/docs"

const HowToPayback = () => {
  return (
    <>
      {_howToPayback.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"How To Get Finance"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"How To Claim Dues"}
          />
        </div>
      ))}
    </>
  )
}

export default HowToPayback
