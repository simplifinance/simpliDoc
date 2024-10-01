import React from "react"

import { amount, multiplier } from "../../pageStructure/pageLinks"

export const _duration = [
  {
    id: 0,
    heading: "DURATION",
    paragraph1: (
      <p>
        The length of time that the loan is due for repayment which determines the 
        length of an epoch. This periods are often short and are specified in hours. 
        While &apos;Duration&apos; is set for an epoch, users may specify their choice when 
        they want to GetFinance, and will be considered first. Borrower's choice 
        must not be greater than the epoch's.  Maximum epoch duration is currently 
        pegged at 30 days equivalent to &apos;720 hrs&apos;, and may be expanded in the future. 
      </p>
    ),

    previous: amount,
    next: multiplier,
  },
]
