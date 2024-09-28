import React from "react"
import Docs from "../components/pageStructure/docs"
import { whatIsADigesu } from "../components/pages/whatIsDigesu/data"

const Home = () => {
  return (
    <>
      {whatIsADigesu.map((pageContent) => (
        <div key={pageContent.id} className="text-white1">
          <Docs
            heading={pageContent.heading}
            paragraph1={pageContent.paragraph1}
            paragraph2={pageContent.paragraph2}
            paragraph3={pageContent.paragraph3}
            paragraph4={pageContent.paragraph4}
            next={"About Digesu"}
            nextLink={pageContent.next}
            prevLink={undefined}
            previous={undefined}
          />
        </div>
      ))}
    </>
  )
}

export default Home
