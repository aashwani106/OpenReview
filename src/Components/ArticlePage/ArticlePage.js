import React from 'react'
import img from './file.png'
import cal from './calendar.png'
import folder from './folder.png'
import eye from './eye-open.png'
import dublicate from './duplicate.png'
import bookmark from './bookmark.png'
import Comments from './Comments'
import { article } from '../../content'

function ArticlePage() {
    return (
        <>
            {/* bg-[#fffdfa] */}

            <div className="flex justify-center    w-100 bg-[#fffdfa] mt-[3.5rem]">

                <div className='h-100 w-[1200px] mt-3   justify-self-center bg-[#fffdfa]'>
                    <div className="py-5 ">
                        <div className="flex bg-[#fffdfa]">

                            <div className='text-[2.125rem] leading-[2.5rem] font-[700]   float-left text-gray-600 bg-[#fffdfa]  w-5/6'>
                                {article.heading}
                            </div>
                            <div className="icon  float-right ml-[100px] w-1/6 pl-[100px]">
                                <img className='w-[40px]' src={img}></img>
                            </div>
                        </div>
                        <div className="py-1 bg-[#fffdfa]">

                            <span className="italic font-sans text-[1.25rem] leading-[1.5rem] ">

                                {article.author.map((data, i) => {
                                    return (
                                        <span key={i}>
                                            {data.name } 
                                            <span>  </span>
                                             
                                        </span>
                                    );

                                })}
                                .
                            </span>
                        </div>
                        <div className="bg-[#fffdfa]">
                            <span className="text-[.75rem] p-0">
                                <img className='w-[.875rem] inline mb-1' src={cal} ></img>
                                <span className="pl-1">
                                    Published:
                                </span>
                                {article.published_dt} ,  Last Modified: { article.last_modified}
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={folder} ></img>

                                Accepted by TMLR
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={eye} ></img>

                                Everyone
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={dublicate} ></img>

                                Revisons
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={bookmark} ></img>

                                BibTex
                            </span>
                        </div>

                    </div>
                    <div className="text-[.75rem] leading-[1.125rem] mt-[-0.875rem] bg-[#fffdfa]">
                        <span className="block">
                            <strong className='text-[#8c1b13]'> Abstract : </strong>
                              {article.abstract}
                        </span>
                        <div className="block">
                            <strong className='text-[#8c1b13] font-[700]'> License : </strong>
                            {article.license}
                        </div>
                        <div className="bock">
                            <strong className='text-[#8c1b13] font-[700]'> Submission Length : </strong>
                           {article.sub_len}

                        </div>
                        <div className="bock">
                            <strong className='text-[#8c1b13] font-[700]'>Code : </strong>
                            <a href={article.code_url} className='text-[#337ab7]'> {article.code_url}</a>
                        </div>
                        <div className="bock">
                            <strong className='text-[#8c1b13] font-[700]'> Assigned Action Editor: </strong>
                            <span className='text-[#337ab7]'> {article.Assigned_Action_Editor} </span>                            
                        </div>
                        <div className="bock">
                            <strong className='text-[#8c1b13] font-[700]'> Submission Number : </strong>
                            <span > {article.sub_num} </span>                            
                        </div>

                    </div>

                    <div className="ab m-0">
                        <div className='bg-[#fffdfa] w-100 h-[100px] border-[#3f6978] border-solid'>
                            <div className="float-right">
                                <span className='text-[0.75rem] text-gray-600'>
                                    Add:
                                </span>
                                <span className="box-content text-white bg-[#4d8093] text-[0.55 rem] border-solid ml-2 md:font-bold p-2 pt-0 rounded">
                                    <a href='' className='text-[0.75rem]'>
                                        public comment
                                    </a>
                                </span>
                            </div>


                        </div>
                    </div>


                 <div className="m-0">
                     <Comments />
                 </div>





                </div>
                




            </div>



        </>
    )
}

export default ArticlePage
