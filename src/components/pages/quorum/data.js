import React from "react"

import {
  amount,
  stepsInAFlexPool,
} from "../../pageStructure/pageLinks"

export const _quorum = [
  {
    id: 0,
    heading: "QUORUM",
    paragraph1: (
      <p>
       The mumber of participants allowed in a pool. It is explicit 
       and is required when user wants to create a permissionless pool. 
       If permissioned, the quorum is the length of supplied participating 
       addresses. The minimum number of participants in a FlexPool is 2 
       and maximum is 255.
      </p>
    ),

    previous: stepsInAFlexPool,
    next: amount,
  },
]
