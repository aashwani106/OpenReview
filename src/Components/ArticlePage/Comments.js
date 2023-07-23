import React from 'react'
import { comments } from '../comment_content'
import pencil from './pencil.png'

function Comments() {
    return (
        <>
            <div className=''>
                {comments.map((data, i) => {
                    return (
                        <div key={i}>
                            <div className="box-content bg-[#efece3]  border-[#3f6978] border-solid  p-4 mt-4 mb-4 ">
                                <div className="comments">
                                    <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                        {data.main_heading}
                                    </span>
                                    <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                        • by {data.meain_heading_by}
                                    </span>
                                    {/* comment description  */}
                                    <div className='comme'>
                                    {data.comment_d.map((data1, k) => {
                                        return (
                                            <div key={k}>
                                                <div className="bg-[#fffdfa]">
                                                    <span className="text-[.75rem] p-0">
                                                        <img className='w-[.875rem] inline mb-1' src='' ></img>
                                                        <span className="pl-1">
                                                            {data1.ctg}
                                                        </span>

                                                        <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={data1.pencil}></img>

                                                        {data1.cmt_by}
                                                        <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src='' ></img>

                                                        Everyone
                                                        <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src='' ></img>

                                                        Revisons
                                                        <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src=''></img>

                                                        BibTex
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    </div>


                                    {/* comment description  */}


                                </div>
                                <div className="subCom">
                                    {data.sub_comm.map((data2, j) => {
                                        return (

                                            <div key={j}>
                                                <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                                                    <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                                        {data2.sub_comm_head}

                                                    </span>
                                                    <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                                        {data2.sub_comm_by}

                                                    </span>
                                                </div>
                                            </div>
                                        )

                                    })}




                                </div>

                            </div>


                        </div>
                    );

                })}









                {/* <div className="box-content bg-[#efece3]  border-[#3f6978] border-solid  p-4 ">
                    <div className="comments">


                        <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                            {comments[0].main_heading} •
                        </span>
                        <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                            by {comments[0].meain_heading_by}
                        </span>
                    </div>


                    <div className="subComments">


                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                {comments[0].sub_comm[0].sub_comm_head} •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by    {comments[0].sub_comm[0].sub_comm_by}
                            </span>
                        </div>


                    </div>
                </div>


                <div className="box-content bg-[#efece3]  border-[#3f6978] border-solid  p-4 mt-4">
                    <div className="comments">
                        <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                            Decisions •
                        </span>
                        <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                            by Action Editors
                        </span>
                    </div>


                    <div className="subComments">


                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                    </div>
                </div>



                <div className="box-content bg-[#efece3]  border-[#3f6978] border-solid  p-4 mt-4">
                    <div className="comments">
                        <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                            Decisions •
                        </span>
                        <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                            by Action Editors
                        </span>
                    </div>


                    <div className="subComments">


                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                        <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4'>
                            <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                Decisions •
                            </span>
                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                by Action Editors
                            </span>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Comments
