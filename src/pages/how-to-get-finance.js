import React from "react"
import { _howToGetFinance } from "../components/pages/howToGetFinance/data"
import Docs from "../components/pageStructure/docs"

const HowToGetFinance = () => {
  return (
    <>
      {_howToGetFinance.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Cycle"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"How To Payback"}
          />
        </div>
      ))}
    </>
  )
}

export default HowToGetFinance
