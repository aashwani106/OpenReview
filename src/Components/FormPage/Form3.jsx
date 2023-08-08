import React from 'react'

function Form3() {
    return (
        <>
            <div className="flex justify-center   h-[500px] w-100 mt-[3.5rem]">
                <div className="h-100 w-[1200px] mt-3 bg-white justify-self-center block">
                    <div className="bg-stone-200 ">
                        <div className=' p-5'>

                            <div className='text-[1.25rem] leading-[2.5rem] font-[700] '>
                                New Decision
                            </div>
                            <div className='subTitle text-[#762121] text-[0.725rem] font-[500]'>
                                * denotes for required field
                            </div>
                            <hr />

                            <div className="body mt-3 ">
                                <div className='md:font-bold text-[#762121]'>
                                    * Title
                                </div>
                                <div className='text-gray-400 text-[0.725rem]'>Brief summary of your comment.</div>
                                <div className='block '>
                                    <input className='block w-full py-1 px-2 mt-1 border border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type="text" />
                                </div>
                            </div>

                            <div className="body mt-3   text-[#762121] ">
                                <div className='md:font-bold'>
                                    * Review
                                </div>

                                <div className='text-gray-400 text-[0.725rem]'>

                                    Please provide an evaluation of the quality, clarity,originality and significance of this work, including a list of its pros and cons(max 20000 charaters). Add formatting using Markdown and formulas using LaTeZ.For more information see <a href="https://openreview.net/faq" className='text-[#3296b5]'>https://openreview.net/faq</a> </div>

                            </div>

                            <div className="body mt-3 ">

                                <div className='flex'>
                                    <button className='py-2 px-2 md:font-bold w-14 border-none mb-0'>Write</button>
                                    <button className='py-2 px-2 md:font-bold w-14 border-none bg-stone-200 '>Preview</button>
                                </div>

                                <div className=''>
                                    <textarea className='block w-full py-1 px-2 mt-1 h-56 border border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type="text" name="" id="" />
                                </div>


                                <div className="body flex mt-3">

                                    <div className=' text-[#762121] md:font-bold mr-2'>
                                        * Rating
                                    </div>
                                    <div className='block '>
                                        <input className='ml-4  p-1 block w-full py-1 px-2  border border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            placeholder='rating' type="text" />
                                    </div>

                                </div>

                                <div className = 'body-mt-3 ' >
                                    <div className=' text-[#762121] md:font-bold mr-2'>
                                        * Confidence
                                    </div>
                                    <div className='text-[0.725rem]'>


                                        <ol className=' ml-5 mt-2' reversed style={{ listStyleType: 'number' }} >
                                        
                                            <li>
                                            The review is absolutely certain that the evaluation is correct and very familiar with the relevant literature.</li>
                                            <li>The reviewer is confident but not absolutely certain that the evalution is correct</li>
                                            <li>The reviewer is fairly confident that the ecaluation is correct</li>
                                            <li>The reviewer is willing to defend the evaluation, but ut is quite likely that the revieweer did not understand central parts of the paper </li>
                                            <li>The reviewer's evaluation is an educated guess</li>
                                        </ol>
                                    </div>



                                </div>













                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form3
