import React from "react"
import { _whatIsAFlexPool } from "../components/pages/whatIsAFlexPool/data"
import Docs from "../components/pageStructure/docs"

const WhatIsAFlexPool = () => {
  return (
    <>
      {_whatIsAFlexPool.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Digesu & Other Apps"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Steps In A Band"}
          />
        </div>
      ))}
    </>
  )
}

export default WhatIsAFlexPool
