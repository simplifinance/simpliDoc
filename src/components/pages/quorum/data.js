import React from "react"

import {
  amount,
  stepsInABand,
} from "../../pageStructure/pageLinks"

export const _quorum = [
  {
    id: 0,
    heading: "QUORUM",
    paragraph1: (
      <p>
        The required number of participants that should occupy a specific band.
        Example: If Alice creates a band with 'Quorum' as 3, on creation, Alice
        is the first on the list. Two more people is needed to mark the group as
        'Closed'. Note: It must always be greater than 1 and less than 256.
      </p>
    ),

    previous: stepsInABand,
    next: amount,
  },
]
