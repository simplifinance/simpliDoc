import React from "react"

import {
  differenceBetweenDigesuAndOtherDapps,
  stepsInABand,
} from "../../pageStructure/pageLinks"

export const _whatIsABand = [
  {
    id: 0,
    heading: "WHAT IS A BAND",
    paragraph1: (
      <p>
        A band is group of participants recognizable by an address. Each band is
        unique to another even if they have the same settings. It is guaranteed
        that no band can have the same address identifier which is the basis of
        security for each band hence no central point of failure.
      </p>
    ),
    paragraph2: <p>A collections of many bands is &apos;Digesu&apos;.</p>,
    previous: differenceBetweenDigesuAndOtherDapps,
    next: stepsInABand,
  },
]
