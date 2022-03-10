import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"

const ContentRenderer = ({ content }) => {
  return (
    <div>
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "DatoCmsImageInline") {
            return <GatsbyImage image={record.image.gatsbyImageData} />
          }
          return null
        }}
      />
    </div>
  )
}

export default ContentRenderer
