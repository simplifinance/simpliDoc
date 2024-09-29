import React from "react"

import {
  howToGetFinance,
  permissionedVsPermissionlessPool,
} from "../../pageStructure/pageLinks"

export const _cycle = [
  {
    id: 0,
    heading: "EPOCH CYCLE",
    paragraph1: (
      <p>
        This is the total period it takes for all participants in
        a FlexPool to have their turn fulfilled i.e getFinance. If a pool is 
        set up with 3 hours duration while the quorum is 3, the full cycle will be 9 hours. 
        This is because it will take at least 9 hours for the pooled fund to fully 
        serve the participants.
      </p>
    ),

    previous: permissionedVsPermissionlessPool,
    next: howToGetFinance,
  },
]
