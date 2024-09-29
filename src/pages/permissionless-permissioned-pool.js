import React from "react"
import { _permissionedVsPermissionlessPool } from "../components/pages/permiss_permissionedVsPermissionlessPool/data"
import Docs from "../components/pageStructure/docs"
import { _permissionedVsPermissionlessPool } from "../components/pages/permissionedVsPermissionlessPool/data"

const PermisssionlessAndPermissioned = () => {
  return (
    <>
      {_permissionedVsPermissionlessPool.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            previous={"Liquidation"}
            nextLink={pageContent.next}
            prevLink={pageContent.previous}
            next={"Cycle"}
          />
        </div>
      ))}
    </>
  )
}

export default PermisssionlessAndPermissioned
