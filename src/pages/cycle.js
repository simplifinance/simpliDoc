import React from "react"
import { _cycle } from "../components/pages/cycle/data"
import Docs from "../components/pageStructure/docs"

const Cycle = () => {
  return (
    <>
      {_cycle.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Public VS Private Band"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"How To Get Finance"}
          />
        </div>
      ))}
    </>
  )
}

export default Cycle
