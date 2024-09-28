import React from "react"

import { amount, multiplier } from "../../pageStructure/pageLinks"

export const _duration = [
  {
    id: 0,
    heading: "DURATION",
    paragraph1: (
      <p>
        Duration specifies the period of the use of the fund. If a pool &apos;Y&apos; with
        quorum: &apos;3&apos; was set up with 7 hours duration, each taker will
        have 7 days to use the given/borrowed fund and return it to the pool. An
        epoch for this pool will be 21 hours.
      </p>
    ),

    previous: amount,
    next: multiplier,
  },
]
