import React from 'react'
import './PracticeSingle.css'
export default function TrendCompany(props) {
  return (
    <div className="dynamic-companies">
        <h6>{props.trendCompany}</h6>
    </div>
  )
}
