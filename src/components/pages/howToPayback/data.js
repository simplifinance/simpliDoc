import React from "react"

import { howToClaimDues, howToGetFinance } from "../../pageStructure/pageLinks"

export const _howToPayback = [
  {
    id: 0,
    heading: "HOW TO PAYBACK",
    paragraph1: (
      <p>
        Payback button will only be active if you have an outstanding debt to
        repay and you must have getFinance. Ensure you have value sufficient for
        settling off the d ebt before calling designated function.
      </p>
    ),

    previous: howToGetFinance,
    next: howToClaimDues,
  },
]
