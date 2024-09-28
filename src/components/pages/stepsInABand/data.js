import React from "react"

import {
  quorum,
  whatIsABand,
} from "../../pageStructure/pageLinks"

export const _stepsInABand = [
  {
    id: 0,
    heading: "STEPS IN A BAND",
    paragraph1: (
      <p>
        Launching a band requires a minimal amount of fee usually denominated in
        network currency e.g BNB. When a band is created, it is initialized with
        the value sent along by the creator.
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
    previous: whatIsABand,
    next: quorum
  },
]
