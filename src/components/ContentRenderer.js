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
          } else if (record.__typename === "DatoCmsYoutubeVideo") {
            return (
              <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/OXiThrKeEPM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            )
          }
          return null
        }}
      />
    </div>
  )
}

export default ContentRenderer
