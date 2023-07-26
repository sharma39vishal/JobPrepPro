import React from 'react'
import './Practice.css'
import DsaSheet from './DsaSheet'

export default function page() {
  return (
    <div className='practice-main'>
      <div className="practice-dsa-sheet-container">
        <DsaSheet dsasheet_name={'Love Babbar'} />
        <DsaSheet dsasheet_name={'Striver'} />
        <DsaSheet dsasheet_name={'Code With Harry'} />
        <DsaSheet dsasheet_name={'Virat Kohli'} />
        <DsaSheet dsasheet_name={'Rohit Sharma'} />
        <DsaSheet dsasheet_name={'Nehanshu Ajmera'} />
        <DsaSheet dsasheet_name={'Nehanshu Ajmera'} />
      </div>
    </div>
  )
}
