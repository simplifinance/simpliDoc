import React from "react"

import { howToPayback, testnetInfo } from "../../pageStructure/pageLinks"

export const _withdraw = [
  {
    id: 0,
    heading: "WITHDRAW",
    paragraph1: (
      <p>
        Withdrawal is activate when users send a valid borrow request to 
        a FlexPool. A few conditions must be met before the request can be 
        granted. Users must have enough of XFI coin in their wallet to provide 
        cover for the given loan based on the supplied collateral coverage ratio.
        Payback period is another instance where withdrawal is activated. This time,
        user pay back their loans and the collateral is unlocked. With our 
        interface, these steps are covered in one smart contract call.
      </p>
    ),

    previous: howToPayback,
    next: testnetInfo,
  },
]
