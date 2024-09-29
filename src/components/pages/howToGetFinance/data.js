import React from "react"

import { cycle, howToPayback } from "../../pageStructure/pageLinks"

export const _howToGetFinance = [
  {
    id: 0,
    heading: "HOW TO GET FINANCE",
    paragraph1: (
      <p>
        Getting finance is treated in a first-in-first-out (FIFO) basis. When a 
        user provide liquidity in a FlexPool, they're assigned a unique slot in 
        a progressive manner. When is its your turn to borrow as a member in a 
        FlexPool, you only need to call at the right time (often with 1hr grace period)
        otherwise another participant may claim your slot. Slots are claimable when 
        the grace period elapsed.                          
      </p>
    ),

    previous: cycle,
    next: howToPayback,
  },
]
