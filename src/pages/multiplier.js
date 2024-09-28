import React from "react"
import { _multiplier } from "../components/pages/multiplier/data"
import Docs from "../components/pageStructure/docs"

const Multiplier = () => {
  return (
    <>
      {_multiplier.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Duration"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Liquidation"}
          />
        </div>
      ))}
    </>
  )
}

export default Multiplier
