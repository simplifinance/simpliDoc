import React from "react"
import { _withdraw } from "../components/pages/howToWithdraw/data"
import Docs from "../components/pageStructure/docs"

const HowToWithdraw = () => {
  return (
    <>
      {_withdraw.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"How to Payback"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Testnet Info"}
          />
        </div>
      ))}
    </>
  )
}

export default HowToWithdraw
