import React from "react"

import { duration, liquidation } from "../../pageStructure/pageLinks"

export const _multiplier = [
  {
    id: 0,
    heading: "MULTIPLIER",
    paragraph1: (
      <p>
        A band with 1.5x multiplier requires the current GF&apos;er to deposit
        collateral in a function of 1.5 time the pooled amount i.e If multiplier
        is 1, then collateral is not needed.
      </p>
    ),
    paragraph2: (
      <p>
        Example: Assume Unit amount = 1 ETH, quorum = 3 and multiplier = 1.5,
        collateral value will be 1ETH * 3 * 1.5 = 4.5ETH. Collateral are
        denominated in QFT or stableCoin.
      </p>
    ),

    previous: duration,
    next: liquidation,
  },
]
