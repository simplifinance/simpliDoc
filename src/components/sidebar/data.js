import React from "react"
import {
  aboutFlexPool,
  amount,
  cycle,
  differenceBetweenFlexPoolAndExistingLiquidityPools,
  duration,
  howToWithdraw,
  howToGetFinance,
  howToPayback,
  liquidation,
  multiplier,
  permissionedVsPermissionlessPool,
  quorum,
  stepsInAFlexPool,
  testnetInfo,
  whatIsAFlexPool,
} from "../pageStructure/pageLinks"

export const sidebarList = [
  {
    id: 0,
    navList: "What are FlexPools?",
    href: "/",
  },
  {
    id: 1,
    navList: "About FlexPool",
    href: aboutFlexPool,
  },
  {
    id: 2,
    navList: (
      <p>
        Difference between <br /> FlexPool & other Liquidity Pools
      </p>
    ),
    href: differenceBetweenFlexPoolAndExistingLiquidityPools,
  },
  // {
  //   id: 3,
  //   navList: "What is a FlexPool?",
  //   href: whatIsAFlexPool,
  // },
  {
    id: 3,
    navList: "Steps in a FlexPool",
    href: stepsInAFlexPool,
  },
  {
    id: 4,
    navList: "Quorum",
    href: quorum,
  },
  {
    id: 5,
    navList: "Amount",
    href: amount,
  },
  {
    id: 6,
    navList: "Duration",
    href: duration,
  },
  {
    id: 7,
    navList: "Multiplier",
    href: multiplier,
  },
  {
    id: 8,
    navList: "Liquidation",
    href: liquidation,
  },
  {
    id: 9,
    navList: "Permissioned Vs Permissionless Pool",
    href: permissionedVsPermissionlessPool,
  },
  {
    id: 10,
    navList: "Cycle",
    href: cycle,
  },
  {
    id: 11,
    navList: "How to Get Finance",
    href: howToGetFinance,
  },
  {
    id: 12,
    navList: "How to Payback",
    href: howToPayback,
  },
  {
    id: 13,
    navList: "How to withdraw",
    href: howToWithdraw,
  },
  {
    id: 14,
    navList: "Network Info",
    href: testnetInfo,
  },
]
