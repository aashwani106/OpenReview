import React from 'react'
import Card from '../Card'

function home() {
    return (
        <>
 
            <div className="flex justify-center   h-[500px] w-100 mt-[3.5rem]">
                <div className="h-100 w-[1200px] mt-3 bg-white justify-self-center block">
                    <div className="py-5">
                        <div className='text-[2.125rem] leading-[2.5rem] font-[700] '>
                            Transactions on Machine Learning Research
                        </div>

                    </div>
                    <div className=" ">

                        <div className=' md:font-bold text-[#777] text-[0.875 rem] block'>
                            Editors-in-chief:
                        </div>

                        <a className="text-[0.875rem] text-[#4d8093] block">Raia Hadsell</a>
                        <a className="text-[0.875rem] text-[#4d8093] block">Kyunghyun Cho</a>
                        <a className="text-[0.875rem] text-[#4d8093] block">Hugo Larochelle</a>

                        <div className='md:font-bold text-[#777] text-[0.875 rem] block'>
                            Managing Editors:
                        </div>

                        <a className="text-[1 rem] text-[#4d8093] block">Fabian Pedregosa</a>
                        <a className="text-[1 rem] text-[#4d8093] block">Paul Vicol</a>

                        <div className=" mt-3 rem text-gray-600 text-[0.75 rem]">
                            Transactions on Machine Learning Research (TMLR) is a venue for dissemination of machine learning research that is intended to complement JMLR while supporting the unmet needs of a growing ML community.
                        </div>
                        <div className='mt-3 rem ml-10 rem  text-gray-600 text-[0.55 rem] '>
                            <ul className='list-disc'>
                                <li>TMLR emphasizes technical correctness over subjective significance, in order to ensure we facilitate scientific discourses on topics that are deemed less significant by contemporaries but may be so in the future.
                                </li>
                                <li>TMLR caters to the shorter format manuscripts that are usually submitted to conferences, providing fast turnarounds and double blind reviewing.
                                </li>
                                <li>TMLR employs a rolling submission process, shortened review period, flexible timelines, and variable manuscript length, to enable deep and sustained interactions among authors, reviewers, editors and readers.
                                </li>
                                <li>TMLR does not accept submissions that have any overlap with previously published work.
                                </li>
                            </ul>
                        </div>
                        <div className=" bg-[#fffdfa]">
                        <div className='mt-3 rem   text-gray-600 text-[0.55 rem]  bg-[#fffdfa]'>
                            For more information on TMLR, visit
                            <a href="#">jmlr.org/tmlr.</a>
                        </div>
                        <div className='mt-3 rem   text-gray-600 text-[0.55 rem]' >
                            Visit this page for the list of our Expert Reviewers.
                        </div>
                        </div>
                        

                        <div className='box-content bg-[#efece3]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-gray-600'>
                                Add:
                            </span>
                            <span className="box-content text-white bg-[#4d8093] text-[0.55 rem] border-solid ml-2 md:font-bold p-2 rounded">
                                TMLR Submission
                            </span>
                        </div>

                    </div>



                    <div className=' mt-4 bg-white'>
                        
                        < Card/ >
                    </div>

                </div>


            </div>



        </>


    )
}

export default home