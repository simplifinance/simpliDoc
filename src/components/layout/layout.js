// Page Layout
import NavBar from "./navbar/navbar"
import Footer from "./footer"
import { useEffect, useState } from "react"
import ScrollButton from "./scrollButton"
import Spinner from "../spinner"
import React from "react"
import TransparenLayer from "../transparentLayer"
import SideBar from "../sidebar/sidebar"
import Socials from "../socials"
// Navbar and Footer Component

const Layout = ({ handleClick, isClicked, children }) => {
  const [loading, setLoading] = useState(true)

  const windowIsDefined = typeof window !== "undefined"
  useEffect(() => {
    if (windowIsDefined) {
      // @ts-ignore
      window.WOW = require("wowjs")
    }
    // @ts-ignore
    new WOW.WOW().init()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="relative">
      <section
        className={[
          "fixed h-screen w-full flex justify-center items-center bg-green1 z-50",
          !loading && "hidden",
        ].join(" ")}
      >
        <Spinner size={40} color={"white"} />
      </section>
      <>
        {/* white transparent layer when navbar toggle button is clicked  */}
        <TransparenLayer isClicked={isClicked} />
        <main className="relative bg-green1 font-inter">
          {/* <ScrollButton windowIsDefined={windowIsDefined} /> */}
          <NavBar handleClick={handleClick} isClicked={isClicked} />
          <main className="wrapper text-white1 lg:grid lg:grid-cols-[1fr_4fr] xl:grid-cols-[1fr_2fr_1fr] lg:border-t-[1px] border-borderGray">
            <div className="hidden lg:block">
              <SideBar handleClick={undefined} />
            </div>
            <div className="">{children}</div>
            <div className="hidden 2xl:block xl:w-full 2xl:py-20">
              <p className="text-base p-5 text-red-600">
                This is a Beta version, token used does not have real value. Do
                not use real network asset such as Mainnet XFI. Be sure you're on
                testnet before carrying out any transaction. You may experience
                inconsistencies. Your feedbacks matter to us. Reach out.
              </p>
            </div>
          </main>

          <Footer />
        </main>
      </>
    </div>
  )
}

export default Layout
