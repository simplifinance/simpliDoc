import React from "react"

import { duration, quorum } from "../../pageStructure/pageLinks"

export const _amount = [
  {
    id: 0,
    heading: "AMOUNT",
    paragraph1: (
      <p>
        This is the unit liquidity per provider added as a commitment showing proof of 
        willingness to be part of the community.
      </p>
    ),
    previous: quorum,
    next: duration,
  },
]
