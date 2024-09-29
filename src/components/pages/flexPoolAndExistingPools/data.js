import React from "react"

import {
  aboutFlexPool,
  whatIsAFlexPool,
} from "../../pageStructure/pageLinks"

export const _differnceBetweenFlexPoolAndExistingLiquidityPools = [
  {
    id: 0,
    heading: "DIFFERENCE BETWEEN FLEXPOOL & EXISTING LIQUIDITY POOLS",
    paragraph1: (
      <div>
        <ol typeof="A" className="list-inside list-[a]">
          <li>FlexPool is fully controlled by the users.</li>
          <li>There is no unified pool, and Simplifinance cannot access any of these pools.</li>
          <li>
            <span>It is very flexible for many use cases.</span>
            <ul className="list-disc list-inside">
              <li>
                User may create a permissioned flexPool with friends (not greater than 255) to raise 
                and maximize capital efficiency through borrowing and investing 
                collateral in yield strategy and rotate the pooled fund among themselves until the cycle/epoch is completed.
              </li>
              <li>Borrowers may or may not make financial commitment.</li>
              <li>Collateral multiplier may be optional.</li>
              <li>Settings such as collateral factor, interest rates, etc are determined by users.</li>
            </ul>
          </li>
          <li>It is highly decentralized in nature.</li>
          <li>
            Participants in a FlexPool act as providers and borrowers. They provide an equity commitment to the pool 
            to access multiple loan capacity in return. This type of finance structure could a good option for specific users 
            such as seasonal traders who wait for 
            to maximize profit within a short period of time.
          </li>
          <li>Flexibility in configuration</li>
          <li>Loans may attract little or no interest </li>
        </ol>
      </div>
    ),

    previous: aboutFlexPool,
    next: whatIsAFlexPool,
  },
]
