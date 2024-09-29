import React from "react";
import Docs from "../components/pageStructure/docs";
 import { _differnceBetweenFlexPoolAndExistingLiquidityPools } from "../components/pages/flexPoolAndExistingPools/data"

const DifferenceBetweenFlexPoolAndExistingLiquidityPools = () => {
 
  return (
    <>
      {_differnceBetweenFlexPoolAndExistingLiquidityPools.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"About FlexPool"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"What Is A FlexPool?"}
          />
        </div>
      ))}
    </>
  )
}
 
export default DifferenceBetweenFlexPoolAndExistingLiquidityPools;