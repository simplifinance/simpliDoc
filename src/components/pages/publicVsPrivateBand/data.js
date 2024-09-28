import React from "react"

import { cycle, liquidation } from "../../pageStructure/pageLinks"

export const _publicVsPrivateBand = [
  {
    id: 0,
    heading: "PUBLIC VS PRIVATE BANDS",
    paragraph1: (
      <p>
        A public band is one with no access restriction. It is open to anyone to
        who is willing and can afford the unit contribution. It is permission
        less and anyone is able to launch a community of this type.
        Comparatively, private bands share similarities in settings with the
        public type except that becoming a member requires a preset identity.
        Often, people in same geographical location or are known to one another
        belong to this category.
      </p>
    ),

    previous: liquidation,
    next: cycle,
  },
]
