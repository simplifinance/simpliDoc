import React from "react"
import { _liquidation } from "../components/pages/liquidation/data"
import Docs from "../components/pageStructure/docs"

const Liquidation = () => {
  return (
    <>
      {_liquidation.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Multiplier"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Public VS Private Band"}
          />
        </div>
      ))}
    </>
  )
}

export default Liquidation
