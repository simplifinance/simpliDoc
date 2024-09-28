import React from "react"
import { differenceBetweenDigesuAndOtherDapps } from "../../pageStructure/pageLinks"
import { whatIsADigesu } from "../../pageStructure/pageLinks"

export const _aboutDigesu = [
  {
    id: 0,
    heading: "ABOUT DIGESU",
    paragraph1: (
      <p>
        In Permisssionless pool, creating a pool with an existing amount i.e
        another pool with same <strong>unit liquidity</strong> exist and the epoch is 
        active will fail unless the Quorum for the existing pool is reached or 
        its epoch finalized. If a Permisssionless pool of 100 XFI exist, and the 
        epoch is still active, no pool with same amount can exist simultaneously 
        unless the existing pool is filled up.
      </p>
    ),
    paragraph2: (
      <p>
        The essence of this limitation is to preserve orderliness, efficiency and 
        moderation while maintaning a healthy competition. There is no limit to the
        number of epoch an user can participate. You cannot create a band with duration (in
        days) above 255 days. Setting APR below 100 will cause unexpected
        behavior. 100 mean no interest should be charged in this band. 120 means
        to set interest rate to 20% per annum. Same rule for APR applies to
        multiplier (i.e. collateral factor)
      </p>
    ),
    previous: whatIsADigesu,
    next: differenceBetweenDigesuAndOtherDapps,
  },
]
