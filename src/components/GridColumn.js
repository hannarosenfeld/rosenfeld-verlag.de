import React from "react"
//import "./gridColumn.css"
import ContentRenderer from "../components/ContentRenderer"

const GridColumn = ({ mobileWidth, desktopWidth, tabletWidth, content }) => {
  const contentRendered = <ContentRenderer content={content} />
  return (
    <>
      <div
        className="grid-col grid-col-desktop"
        style={{ width: `${desktopWidth}%` }}
      >
        {contentRendered}
      </div>
      <div
        className="grid-col grid-col-tablet"
        style={{ width: `${tabletWidth}%` }}
      >
        {contentRendered}
      </div>
      <div
        className="grid-col grid-col-mobile"
        style={{ width: `${mobileWidth}%` }}
      >
        {contentRendered}
      </div>
    </>
  )
}

export default GridColumn
