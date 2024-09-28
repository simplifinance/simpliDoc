import React from "react"
import {
  aboutDigesu,
  amount,
  cycle,
  differenceBetweenDigesuAndOtherDapps,
  duration,
  howToClaimDues,
  howToGetFinance,
  howToPayback,
  liquidation,
  multiplier,
  publicVsPrivateBand,
  quorum,
  stepsInABand,
  testnetInfo,
  whatIsABand,
} from "../pageStructure/pageLinks"

export const sidebarList = [
  {
    id: 0,
    navList: "What is a Digesu?",
    href: "/",
  },
  {
    id: 1,
    navList: "About Digesu",
    href: aboutDigesu,
  },
  {
    id: 2,
    navList: (
      <p>
        Difference between <br /> Digesu & other apps
      </p>
    ),
    href: differenceBetweenDigesuAndOtherDapps,
  },
  {
    id: 3,
    navList: "What is a Band?",
    href: whatIsABand,
  },
  {
    id: 4,
    navList: "Steps in a Band",
    href: stepsInABand,
  },
  {
    id: 5,
    navList: "Quorum",
    href: quorum,
  },
  {
    id: 6,
    navList: "Amount",
    href: amount,
  },
  {
    id: 7,
    navList: "Duration",
    href: duration,
  },
  {
    id: 8,
    navList: "Multiplier",
    href: multiplier,
  },
  {
    id: 9,
    navList: "Liquidation",
    href: liquidation,
  },
  {
    id: 10,
    navList: "Public VS Private Band",
    href: publicVsPrivateBand,
  },
  {
    id: 11,
    navList: "Cycle",
    href: cycle,
  },
  {
    id: 12,
    navList: "How to Get Finance",
    href: howToGetFinance,
  },
  {
    id: 13,
    navList: "How to Payback",
    href: howToPayback,
  },
  {
    id: 14,
    navList: "How to Claim dues",
    href: howToClaimDues,
  },
  {
    id: 16,
    navList: "Testnet Info",
    href: testnetInfo,
  },
]
