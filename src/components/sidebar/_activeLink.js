import { useRouter } from "next/router"
import React from "react"

const _ActiveLink = ({ handleClick, children, href, className }) => {
  const router = useRouter()

  const handleActiveClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li onClick={handleClick} className={className}>
      <a
        className={
          router.asPath === href
            ? "text-white1 underline"
            : "text-borderGray hover:text-white1"
        }
        href={href}
        onClick={handleActiveClick}
        target="_newtab"
      >
        {children}
      </a>
    </li>
  )
}

export default _ActiveLink
