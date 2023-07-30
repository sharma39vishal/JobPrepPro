import React from 'react'
import './Practice.css'
import DsaSheet from './DsaSheet'
import CoreSubject from './CoreSubject'

export default function page() {
  return (
    <div className='practice-main'>
      <div className="practice-dsa-sheet">
        <div className="dsa-sheet-heading">
          <h4>DSA Sheet</h4>
          <h5>See All</h5>
        </div>
        <div className="practice-dsa-sheet-container">
          <DsaSheet creatorImage={'https://media.licdn.com/dms/image/C4D22AQGIXuAu2GS6rQ/feedshare-shrink_800/0/1673000670313?e=1693440000&v=beta&t=ztxyvEpfNokyoXnXC6itQxrsdR7usq_PAFRxEKwsFOE'} dsasheet_name={'Love Babbar'} />
          <DsaSheet creatorImage={'https://media.licdn.com/dms/image/C4D03AQGFTnOaQa4fUQ/profile-displayphoto-shrink_400_400/0/1623400653670?e=1695859200&v=beta&t=Qjonidgbofugle-MTZxZK3StOG6Mo_fO9QZjkkULzNA'} dsasheet_name={'Striver'} />
          <DsaSheet creatorImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJ8124cXJ5TXCEWZJD--sWMYCknz7JJKHw&usqp=CAU'} dsasheet_name={'Code With Harry'} />
          <DsaSheet creatorImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-w4OwyiYM1Oypztaz8wzLJnPJhMdb9WMVw&usqp=CAU'} dsasheet_name={'Virat Kohli'} />
          <DsaSheet creatorImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmrIcFwYig92o99zR_9ethhckL0wBVV_64w&usqp=CAU'} dsasheet_name={'Rohit Sharma'} />
        </div>
      </div>
      <div className="practice-core-subject-container">
        <CoreSubject pageLink={'/achievers'} subjectName={'Data Structure And Algorithms'} />
        <CoreSubject pageLink={'/achievers'} subjectName={'Operating System'} />
        <CoreSubject pageLink={'/achievers'} subjectName={'Database Management System'} />
        <CoreSubject pageLink={'/achievers'} subjectName={'Object Oriented Programming'} />
        <CoreSubject pageLink={'/achievers'} subjectName={'Computer Networks'} />
      </div>
    </div>
  )
}
