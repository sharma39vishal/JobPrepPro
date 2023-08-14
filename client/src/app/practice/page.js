'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Practice.css'
import DsaSheet from './DsaSheet'
import CoreSubject from './CoreSubject'
import PracticeSingle from './PracticeSingle';
import Link from 'next/link';
import TopicTags from './TopicTags';
import TrendCompany from './TrendCompany';

export default function Page() {
  const [content, setcontent] = useState([]);
  const callapi = async () => {
    axios.get("/questions/")
      .then((res) => {
        setcontent(res.data);
        console.log("QUESTION :", res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    callapi();
  }, [])

  return (
    <div className='practice-main'>
      <div className="practice-dsa-sheet">
        <div className="dsa-sheet-heading">
          <h4>DSA Sheet</h4>
          <Link href=''><h5>See All</h5></Link>
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
        <div className="core-subject-heading">
          <h4>Practice Problems</h4>
          {/* <Link href=''><h5>See All</h5></Link> */}
        </div>
        <div className="core-subjects-names">
          <CoreSubject pageLink={'/achievers'} subjectName={'Data Structure And Algorithms'} />
          <CoreSubject pageLink={'/achievers'} subjectName={'Operating System'} />
          <CoreSubject pageLink={'/achievers'} subjectName={'Database Management System'} />
          <CoreSubject pageLink={'/achievers'} subjectName={'Object Oriented Programming'} />
          <CoreSubject pageLink={'/achievers'} subjectName={'Computer Networks'} />
        </div>
      </div>
      <div className="practice-questions-container">
        <div className="practice-subject-question">
          <div className="practice-title-heading">
            <h3 className='title-one'>Title</h3>
            <h3 className='title-two'>Acceptance</h3>
            <h3 className='title-three'>Difficulty</h3>
          </div>
          <div className="practice-description-questions">
            {content.map((item,index)=>{
              return <PracticeSingle key={index} queTitle={item.Title} queAccept={'58%'} queDifficulty={'Easy'} quesid={item._id}/>
            })}
          </div>
          <div className="more-question-pages">
            <img src="/images/leftArrow.png" alt="Loading Error" />
            <h3 className="present-page">Present</h3>
            <img src="/images/rightArrow.png" alt="Loading Error" />
          </div>
        </div>
        <div className="topic-related-tags">
          <div className="topics-title-heading">
            <h3>Topics</h3>
          </div>
          <div className="different-topics">
            <TopicTags topicTag={'Array'} />
            <TopicTags topicTag={'Binary Search'} />
            <TopicTags topicTag={'Greedy'} />
            <TopicTags topicTag={'Game Theory'} />
            <TopicTags topicTag={'Dynamic Programming'} />
            <TopicTags topicTag={'Linked List'} />
            <TopicTags topicTag={'Queue'} />
            <TopicTags topicTag={'Stack'} />
            <TopicTags topicTag={'Binary Tree'} />
            <TopicTags topicTag={'Graph'} />
            <TopicTags topicTag={'Priority Queue'} />
            <TopicTags topicTag={'Array'} />
            <TopicTags topicTag={'Array'} />
            <TopicTags topicTag={'BinarySearch'} />
            <TopicTags topicTag={'Array'} />
            <TopicTags topicTag={'Array'} />
            <TopicTags topicTag={'Array'} />
          </div>
        </div>
        <div className="trending-companies">
          <div className="trending-companies-title">
            <h3>Companies</h3>
          </div>
          <div className="different-companies">
            <TrendCompany trendCompany={'Apple'} />
            <TrendCompany trendCompany={'Microsoft'} />
            <TrendCompany trendCompany={'Instagram'} />
            <TrendCompany trendCompany={'Zomato'} />
            <TrendCompany trendCompany={'TikTok'} />
            <TrendCompany trendCompany={'PayPal'} />
            <TrendCompany trendCompany={'GPay'} />
            <TrendCompany trendCompany={'TCS'} />
            <TrendCompany trendCompany={'Walmart'} />
            <TrendCompany trendCompany={'Consultadd'} />
            <TrendCompany trendCompany={'Apple'} />
          </div>
        </div>
      </div>
    </div>
  )
}
