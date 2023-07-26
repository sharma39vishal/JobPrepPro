import React from 'react'
import './DsaSheet.css'
export default function SingleSheet(props) {
  return (
    <div className="dsa-sheet-main">
        <div className="dsapractice-sheet-layout">
            <div className="dsa-sheet-name">
              {props.dsasheet_name}
            </div>
            {/* <div className="start-dsa-practice">
              <h5>{props.start_learning}</h5>
            </div> */}
        </div>
    </div>
  )
}
