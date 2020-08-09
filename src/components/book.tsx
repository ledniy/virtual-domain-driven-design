import React, { ReactElement } from "react"
import Img from "gatsby-image"

const Book = ({ book }): ReactElement => {
  return (
    <div className="group bg-white w-48 rounded-lg shadow-md m-2 flex flex-col items-center justify-start">
      <Img
        className="my-2 w-48 h-64"
        fluid={book.img.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      ></Img>
      <div className="px-1 w-full flex flex-row flex-wrap">
        {book.tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
            >
              {tag}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Book
