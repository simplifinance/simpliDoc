import React from "react"

import {
  quorum,
  whatIsAFlexPool,
} from "../../pageStructure/pageLinks"

export const _stepsInAFlexPool = [
  {
    id: 0,
    heading: "STEPS IN A FLEXPOOL",
    paragraph1: (
      <p>
        To create a FlexPool, user need to have some text XFI to pay for transaction fee.
        Visit the <a href="https://test.xficonsole.com" target="_blank">faucet</a> to request for test coin
      </p>
    ),
    paragraph2: (
      <p>
        It then enters a waiting mode for the quorum to be achieved. Soon as the
        &apos;quorun is met&apos;, GET FINANCE is activated done in first-in-first-out
        basis. First user to join the pool becomes the first to GF i.e
        GETFINANCE. On or before the duration period, the current Gfer (i.e
        beneficiary) is able to return the given amount to the pool otherwise,
        they can be liquidated.
      </p>
    ),
    paragraph3: <p>See next section on how liquidation works.</p>,
    previous: whatIsAFlexPool,
    next: quorum
  },
]
