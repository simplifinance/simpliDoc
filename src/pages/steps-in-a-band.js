import React from "react"
import { _stepsInABand } from "../components/pages/stepsInABand/data"
import Docs from "../components/pageStructure/docs"

const StepsInABand = () => {
  return (
    <>
      {_stepsInABand.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"What Is A Band"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Quorum"}
          />
        </div>
      ))}
    </>
  )
}

export default StepsInABand
