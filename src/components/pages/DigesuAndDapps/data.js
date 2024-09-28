import React from "react"

import {
  aboutDigesu,
  whatIsABand,
  whatIsADigesu,
} from "../../pageStructure/pageLinks"

export const _differnceBetweenDigesuAndOtherDapps = [
  {
    id: 0,
    heading: "DIFFERENCE BETWEEN DIGESU & OTHER APPS",
    paragraph1: (
      <div>
        <ol typeof="A" className="list-inside list-[a]">
          <li>It is 100% controlled by user.</li>
          <li>QuatreFinance does not hold any fund in custody.</li>
          <li>
            <span>It is flexible: that is,</span>
            <ul className="list-disc list-inside">
              <li>
                Use may create a band of many friends (i.e restricted band, with
                participants not greater than 255) and rotate pooled fund among
                participants until the cycle is completed or join an existing
                band.
              </li>
              <li>Setting collateral (i.e multiplier) is optional.</li>
              <li>
                Settings such as collateral factor, are determined by user.
              </li>
            </ul>
          </li>
          <li>It is highly decentralized.</li>
          <li>
            Every participant in a band is a borrower and a lender at the same
            time.
          </li>
          <li>Collateral is optional</li>
          <li>Users earn from the platform. No interest is charged </li>
        </ol>
      </div>
    ),

    previous: aboutDigesu,
    next: whatIsABand,
  },
]
