import React from "react"

import { cycle, howToPayback } from "../../pageStructure/pageLinks"

export const _howToGetFinance = [
  {
    id: 0,
    heading: "HOW TO GET FINANCE",
    paragraph1: (
      <p>
        Getting finance is treated in first-in-first-out (FIFO) basis ie if your
        position is 1, you will be the first to getFinance and so on. To see
        your position and other information relation to each band, click on the
        ID of any oof the bands and the profile will be displayed.
      </p>
    ),

    previous: cycle,
    next: howToPayback,
  },
]
