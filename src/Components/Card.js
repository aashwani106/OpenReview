import React, { useState } from 'react'
import imgFile from '../Components/ArticlePage/file.png'
import {useNavigate} from "react-router-dom"



function Card() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=''>
        <h3 className=' text-[1.25rem] md:font-bold text-[#4d8093]'>
          <span className='cursor-pointer' onClick={()=>navigate("/Article")}>
            Data Augmentation is a Hyperparameter: Cherry-picked Self-Supervision for Unsupervised Anomaly Detection is Creating the Illusion of Success
          </span>
          <img className='w-4 h-4 inline ml-3' src={imgFile} alt="File img" />
        </h3>
      </div>
      <div className="py-1 italic font-sans text-[0.875rem]">
        Guillermo Ortiz-Jimenez, Pau de Jorge, Amartya Sanyal, Adel Bibi, Puneet K. Dokania, Pascal Frossard, Grégory Rogez, Philip Torr
      </div>
      <div className='text-gray-600 text-[0.875rem]'>
        <span>
          Published:
        </span>
        <span>
          23 Jul 2023,
        </span>
        <span>
          Last Modified:
        </span>
        <span className='space-y-[5px]'> 23 Jul 2023 </span>
        <span>
          Accepted by TMLR
        </span>
        <span>
          Readers:
        </span>
        <div><i className="fa fa-globe" aria-hidden="true"></i></div>
        <span>Everyone</span>



      </div>
      <div>
        <a type='button'
          className='text-[0.75rem] text-[#4d8093] cursor-pointer'
          onClick={() => setShow(!show)}
        >
          Show Details
        </a>

        {show &&
          <div className=' bg-white m-1 p-1 space-y-[5px] '>
            <div className='container'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold inline mr-3'>Authors that are also TMLR Expert Reviewers:
              </div>
              <a href="#" className='text-[0.75rem] text-[#4d8093]'>Guillermo Ortiz-Jimenez</a>
            </div>
            <div className='container1 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold inline mr-3'>Authors:
              </div>
              <div className='text-[0.75rem] ' >Self-supervised learning (SSL) has emerged as a promising alternative to create supervisory signals to real-world problems, avoiding the extensive cost of manual labeling. SSL is particularly attractive for unsupervised tasks such as anomaly detection (AD), where labeled anomalies are rare or often nonexistent. A large catalog of augmentation functions has been used for SSL-based AD (SSAD) on image data, and recent works have reported that the type of augmentation has a significant impact on accuracy. Motivated by those, this work sets out to put image-based SSAD under a larger lens and investigate the role of data augmentation in SSAD. Through extensive experiments on 3 different detector models and across 420 AD tasks, we provide comprehensive numerical and visual evidences that the alignment between data augmentation and anomaly-generating mechanism is the key to the success of SSAD, and in the lack thereof, SSL may even impair accuracy. To the best of our knowledge, this is the first meta-analysis on the role of data augmentation in SSAD.</div>
            </div>
            <div className='container3 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold inline mr-3'>Certifications:
              </div>
              <div className='text-[0.75rem]'>Expert Certification</div>
            </div>
            <div className='container4 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold  mr-3'>License:
              </div>
              <div className='text-[0.75rem]'>Creative Commons Attribution 4.0 International (CC BY 4.0)</div>
            </div>
            <div className='container5 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold  mr-3'>Submission Length:
              </div>
              <div className='text-[0.75rem]'>Regular submission (no more than 12 pages of main content)</div>
            </div>
            <div className='container6 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold  mr-3'>Changes Since Last Submission:
              </div>
              <div className='text-[0.75rem]'>N/A</div>
            </div>
            <div className='container7 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold  mr-3'>Code:
              </div>
              <a href="https://github.com/gortizji/co_features" className='text-[0.75rem] text-[#4d8093]'>https://github.com/gortizji/co_features</a>
            </div>
            <div className='container8 flex'>
              <div className='text-[#8c1b13] text-[0.75rem] md:font-bold  mr-3'>Assigned Action Editor:
              </div>
              <a href="https://openreview.net/profile?id=~Jakub_M._Tomczak1" className='text-[0.75rem] text-[#4d8093]'>Jakub Mikolaj Tomczak</a>
            </div>



          </div>
        }


      </div>


    </>
  )
}

export default Card