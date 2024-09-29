import React from "react"

import { howToWithdraw, howToGetFinance } from "../../pageStructure/pageLinks"

export const _howToPayback = [
  {
    id: 0,
    heading: "HOW TO PAYBACK",
    paragraph1: (
      <p>
        Payback utility will be activated when users have unpaid loans matched to 
        their profiles. An amount not lesser than the given loan must be approved
        as spending cap to the Factory contract.
      </p>
    ),

    previous: howToGetFinance,
    next: howToWithdraw,
  },
]
