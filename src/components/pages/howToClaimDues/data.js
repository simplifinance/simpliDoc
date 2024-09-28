import React from "react"

import { howToPayback, testnetInfo } from "../../pageStructure/pageLinks"

export const _claimDues = [
  {
    id: 0,
    heading: "CLAIM DUES",
    paragraph1: (
      <p>
        When all the participants have completed their turn and fully return
        expected value to the pool, the value except interest accrued is distributed
        equally among the providers. Thereafter, it becomes withdrawable. Our frontend 
        allows this to happen in one transaction 
      </p>
    ),

    previous: howToPayback,
    next: testnetInfo,
  },
]
