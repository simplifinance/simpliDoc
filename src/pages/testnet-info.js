import React from "react"
import { _testnetInfo } from "../components/pages/testnetInfo/data"
import Docs from "../components/pageStructure/docs"

const TestnetInfo = () => {
  return (
    <>
      {_testnetInfo.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"How To Claim Dues"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={undefined}
          />
        </div>
      ))}
    </>
  )
}

export default TestnetInfo
