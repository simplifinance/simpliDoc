import React from "react"
import { _quorum } from "../components/pages/quorum/data"
import Docs from "../components/pageStructure/docs"

const Quorum = () => {
  return (
    <>
      {_quorum.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Steps In A Band"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Amount"}
          />
        </div>
      ))}
    </>
  )
}

export default Quorum
