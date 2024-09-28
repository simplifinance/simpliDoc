import React from "react"

import { duration, quorum } from "../../pageStructure/pageLinks"

export const _amount = [
  {
    id: 0,
    heading: "AMOUNT",
    paragraph1: (
      <p>
        Suppose Alice initializes a community &apos;X&apos; with 1 ETH. At
        creation, &apos;X&apos; has a total value of 1 ETH. Anyone who joins is
        required to deposit same amount at the point they wish to join
      </p>
    ),
    previous: quorum,
    next: duration,
  },
]
