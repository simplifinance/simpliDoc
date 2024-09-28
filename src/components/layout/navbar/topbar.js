import Link from "next/link"
import React from "react"

const TopBar = ({ isClicked, handleClick }) => {
  return (
    <header className="bg-green1 py-5 lg:py-10 font-inter ">
      <nav className="wrapper">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <a>
                <img
                  src="/images/navbar/logoSimplifi.png"
                  alt="Logo"
                  className="w-[80px] lg:w-[142px]"
                />
              </a>
            </Link>
          </li>
          <li className="lg:hidden relative z-10">
            {/* hamburger button */}
            <div
              className={isClicked ? "hidden" : "my-auto"}
              onClick={handleClick}
            >
              <img src="images/navbar/bar.svg" alt="menu" width={50} />
            </div>
          </li>
          <div className="hidden lg:flex font-medium">
            <Link href="/home">
              <a className="mx-[36.5px] text-white1">Home</a>
            </Link>
            <Link href="/">
              <a className="mx-[36.5px] text-orange">Learn</a>
            </Link>
            <Link href="/#footer">
              <a className="mx-[36.5px] text-white1">Community</a>
            </Link>
          </div>
          <li className="hidden lg:flex">
            <a href="https://simplifi-st5h.vercel.app/">
              <button
                className={[
                  "underlineFromLeft", //  css code in global.css
                  "font-bold bg-orange w-[174px] h-[60px] rounded-lg text-white1",
                ].join(" ")}
              >
                Go To App
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default TopBar
