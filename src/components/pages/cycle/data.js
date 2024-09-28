import React from "react"

import {
  howToGetFinance,
  publicVsPrivateBand,
} from "../../pageStructure/pageLinks"

export const _cycle = [
  {
    id: 0,
    heading: "CYCLE",
    paragraph1: (
      <p>
        This is the total period (in days) it takes for every participants in
        the pool to have GF i.e getFinance. If a band is set up with 3 days
        duration and the quorum is 3, then the cycle will be 9 days. This is
        because it will 9 days for the pooled fund to have rotated and fully
        serve all participants.
      </p>
    ),

    previous: publicVsPrivateBand,
    next: howToGetFinance,
  },
]
