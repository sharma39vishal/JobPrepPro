import React from 'react'
import './DsaSheet.css'
export default function SingleSheet(props) {
  return (
    <div className="dsa-sheet-main">
      <img src={props.creatorImage} alt="Loading Error" />
      <h4>{props.dsasheet_name}</h4>
    </div>
  )
}
