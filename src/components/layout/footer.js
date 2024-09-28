import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faTwitter,
  faYoutube,
  faInstagram,
  faReddit,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Socials from "../socials"
import Link from "next/link"

const Footer = () => {
  return (
    <footer
      className="bg-gray1 py-12 lg:py-[6rem] text-white font-inter"
      id="footer"
    >
      <div className="wrapper flex flex-col lg:flex-row justify-between">
        <ul className="mb-[40px]">
          <li>
            <h1 className="font-nova-square text-3xl lg:text-5xl mb-[16px] lg:mb-[24px] ">
              QuatreFinance
            </h1>
          </li>
          <Socials />
          <li className="mt-[16px] lg:mt-[24px] text-lg lg:text-xl">
            {" "}
            <a
              href="mailto:officialemail@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              officialemail@gmail.com
            </a>
          </li>
        </ul>
        <ul className="mb-[40px] lg:mr-[12rem]">
          <li>
            <h1 className="text-2xl font-bold mb-[16px] lg:mb-[24px] ">
              WHAT WE DO
            </h1>{" "}
          </li>
          <li className="text-lg mb-[8px]">
            <Link href="/">
              <a>Learn</a>
            </Link>{" "}
          </li>
          <li className="text-lg">
            <Link href="/">
              <a>Community</a>
            </Link>{" "}
          </li>
        </ul>
        <ul className="mb-[40px]">
          <li>
            {" "}
            <h1 className="text-2xl font-bold mb-[16px] lg:mb-[24px] ">
              COMPANY
            </h1>{" "}
          </li>
          <li className="text-lg mb-[8px]">
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <li className="text-lg">
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="wrapper text-lg lg:text-center lg:pt-[148px]">
        &copy;2024 SimpliFinance. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
