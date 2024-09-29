import React from "react"

import {  multiplier, permissionedVsPermissionlessPool } from "../../pageStructure/pageLinks"

export const _liquidation = [
  {
    id: 0,
    heading: "LIQUIDATION",
    paragraph1: (
      <p>
        Liquidation is possible after a participant failed to meet up with the
        loan deadline. When a borrower fails to replenish the pool at the due date,
        they stand the chance of being liquidated by anyone users of the protocol.
        Liquidation can be profitable or otherwise for liquidators since they bear 
        the burdens of repaying the full loan. The full collateral value is also 
        passed on to the liquidator.
      </p>
    ),
    paragraph2: (
      <p>
        NOTE: Liquidation may cause participants in a permissioned pool to forfeit 
        earnings or a part of their liquidity. Losses and profits are spread evenly
        the participants.
      </p>
    ),

    previous: multiplier,
    next: permissionedVsPermissionlessPool,
  },
]
