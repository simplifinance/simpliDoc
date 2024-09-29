import React from "react"
import { differenceBetweenFlexPoolAndExistingLiquidityPools } from "../../pageStructure/pageLinks"
import { whatAreFlexPools } from "../../pageStructure/pageLinks"

export const _aboutFlexPool = [
  {
    id: 0,
    heading: "ABOUT FLEXPOOL",
    paragraph1: (
      <p>
        FlexPool can either be permissioned or permissionless. A worthy exception 
        to creating a permisssionless liquidity pool is that the proposed unit liquidity 
        amount must not already be created. Two FlexPools with same liquidity value cannot
        exist simultaneously otherwise it may resort to spamming and unwanted scenarios.
        If a pool of 100 USDT exist, and the 
        epoch is still active, a pool with the same amount cannot be launched until the 
        existing pool is filled up.
      </p>
    ),
    paragraph2: (
      <p>
        It is designed this way to preserve orderliness, efficiency and 
        moderation while maintaning a healthy competition. There is no limit to the
        number of epoch an user can participate. You cannot create a band with duration (in
        days) above 255 days. Setting APR below 100 will cause unexpected
        behavior. 100 mean no interest should be charged in this band. 120 means
        to set interest rate to 20% per annum. Same rule for APR applies to
        multiplier (i.e. collateral factor)
      </p>
    ),
    previous: whatAreFlexPools,
    next: differenceBetweenFlexPoolAndExistingLiquidityPools,
  },
]
