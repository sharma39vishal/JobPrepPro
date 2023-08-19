import React from 'react'
import './Home.css'
export default function page() {
  return (
    <div>
      <div>

        <div>
          <section class="flex-center column px-4 ">
            <h1 class="hero-title | p-4 text-center fs-32">Coding Synergy</h1>
            <p class="hero-desc | fw-500 fs-18 text-center">Empower Your Coding Journey with JOBPREPRO: Where Learning Meets Collaboration, Practice Meets Progress!</p>
            <div class="cta-btn | flex-center fs-18 bg-accent w-100 py-5">
              <a href="/practice" class="anchor-reset clr-w">
                Practice Question
              </a>
            </div>
          </section>
          <div class="section dark-blue" style={{backgroundColor:"#11161A"}}>
            <div class="w-container">
              <h2 class="white-heading">HOW TO&nbsp;PREPARE</h2>
              <div class="w-clearfix works-row">
                <div class="works-column">
                  <div class="setup-pill dark _1" style={{backgroundColor:"#0288D1", minHeight:"60vh"}}  data-ix="scale-on-scroll">
                    <h3 class="number">1</h3>
                    <h3 class="white-heading">Learn any programming language</h3>
                    <p>"Explore, master, and excel in diverse programming languages with our comprehensive learning resources and expert-guided tutorials. Start coding today!"</p>
                  </div>
                </div>
                <div class="works-column">
                  <div class="setup-pill dark _1" style={{backgroundColor:"#0288D1", minHeight:"60vh"}} data-ix="scale-on-scroll">
                    <h3 class="number">2</h3>
                    <h3 class="white-heading">Prepare DSA</h3>
                    <p>"Master Data Structures and Algorithms with comprehensive practice problems, interactive discussions, and expert guidance at your fingertips. Level up now!"</p>
                  </div>
                </div>
                <div class="works-column">
                  <div class="setup-pill dark _1" style={{backgroundColor:"#0288D1", minHeight:"60vh"}} data-ix="scale-on-scroll">
                    <h3 class="number">3</h3>
                    <h3 class="white-heading">Practice Questions</h3>
                    <p>"Enhance skills with diverse practice questions covering coding, algorithms, and data structures for comprehensive learning and growth."</p>
                  </div>
                </div>
                <div class="works-column">
                  <div class="setup-pill dark _1" style={{backgroundColor:"#0288D1", minHeight:"60vh"}} data-ix="scale-on-scroll">
                    <h3 class="number">4</h3>
                    <h3 class="white-heading">Prepare core subjects</h3>
                    <p>"Core subjects: Computer Networks, Operating Systems, and Database Management Systems, essential for understanding modern computing and data management."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
