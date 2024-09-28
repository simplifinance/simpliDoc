import { useRouter } from "next/router"
import React from "react"

const ActiveLink = ({ handleClick, children, href, className }) => {
  const router = useRouter()
  const listStyle = {
    // marginRight: 36.5,
    // marginLeft: 36.5,
  }

  const linkStyle = {
    color: router.asPath === href ? "#F87C00" : "#FFFFFF",
  }

  const handleActiveClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li onClick={handleClick} style={listStyle} className={className}>
      <a
        href={href}
        onClick={handleActiveClick}
        style={linkStyle}
        target="_newtab"
      >
        {children}
      </a>
    </li>
  )
}

export default ActiveLink
