import React from "react"
import { _amount } from "../components/pages/amount/data"
import Docs from "../components/pageStructure/docs"

const Amount= () => {
  return (
    <>
      {_amount.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Quorum"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Duration"}
          />
        </div>
      ))}
    </>
  )
}

export default Amount
