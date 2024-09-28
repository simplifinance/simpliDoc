import React from "react"
import { _duration } from "../components/pages/duration/data"
import Docs from "../components/pageStructure/docs"

const Duration = () => {
  return (
    <>
      {_duration.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Amount"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Multiplier"}
          />
        </div>
      ))}
    </>
  )
}

export default Duration
