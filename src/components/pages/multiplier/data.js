import React from "react"

import { duration, liquidation } from "../../pageStructure/pageLinks"

export const _multiplier = [
  {
    id: 0,
    heading: "MULTIPLIER",
    paragraph1: (
      <p>
        Collateral factor/coverage is usually determined by the creator of 
        FlexPool at the point of creation. This is the percentage of loan 
        that is secure by discounted by the value of XFI. 
      </p>
    ),
    paragraph2: (
      <p>
        If a FlexPool has 100 &apos;USDT&apos; as the loan base while collateral factor 
        is 150. If the price of XFI at borrow point is &apos;$0.5 USDT&apos; the required
        collateral in XFI will be calculated as <strong>collateralNeeded = ((100/0.5) * 150) / 100</strong>
      </p>
    ),

    previous: duration,
    next: liquidation,
  },
]
