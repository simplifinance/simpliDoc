import Link from "next/link"
import React from "react"

const BottomNav = ({ previous, next, prevLink, nextLink }) => {
  return (
    <section className="flex justify-between py-10 lg:py-20">
      <Link href={"/" + prevLink}>
        <a
          className={[
            "w-2/4  border border-borderGray rounded-md flex justify-start text-left px-2 mr-2 lg:mr-5 py-3 ",
            !previous && "invisible",
            "hover:border-orange",
          ].join(" ")}
        >
          <button className="flex flex-col">
            <span className="font-meduim text-xs text-left mr-auto">
              Previous
            </span>
            <div className="flex">
              <img src="images/prev.svg" alt="previous" />
              <span className="ml-[8px] text-xs lg:text-base font-meduim text-orange">
                {previous}
              </span>
            </div>
          </button>
        </a>
      </Link>

      {next && (
        <Link href={nextLink}>
          <a
            className={[
              "w-2/4  border border-borderGray rounded-md flex justify-end text-right px-2 ml-2 lg:ml-5 py-3 ",
              !next && "invisible",
              "hover:border-orange",
            ].join(" ")}
          >
            <button className="flex flex-col">
              <span className="font-meduim text-xs ml-auto">Next</span>
              <div className="flex">
                <span className="mr-[8px] text-xs lg:text-base font-meduim text-orange">
                  {next}
                </span>
                <img src="images/next.svg" alt="next" />
              </div>
            </button>
          </a>
        </Link>
      )}
    </section>
  )
}

export default BottomNav
