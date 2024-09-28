import React from "react"

import {  multiplier, publicVsPrivateBand } from "../../pageStructure/pageLinks"

export const _liquidation = [
  {
    id: 0,
    heading: "LIQUIDATION",
    paragraph1: (
      <p>
        Liquidation is possible after a participant failed to meet up with the
        deadline. Only a member of a band can initiate liquidation action. When
        that happens, using atomic pattern, the defaulter's collateral balance
        is confiscated which is immediately shared among the rest of the
        participants and the band is dissolved.
      </p>
    ),
    paragraph2: (
      <p>
        NOTE: Liquidation may forfeit earnings effect of which is spread on
        other participants of same bands especially in strict mode.
      </p>
    ),

    previous: multiplier,
    next: publicVsPrivateBand,
  },
]
