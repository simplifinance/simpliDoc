import React from "react"

const TransparenLayer = ({ isClicked }) => {
  return (
    <div
      className={
        isClicked
          ? "absolute bg-green1/50 h-full w-full z-20 top-0 backdrop-blur-[2px] backdrop-saturate-[180%]"
          : "hidden"
      }
    ></div>
  )
}

export default TransparenLayer
