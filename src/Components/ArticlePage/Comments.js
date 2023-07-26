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
                                <div className="flex flex-col" style={{ "flexDirection": "column", "position": "absolute", "left": "138px" }}>

                                    <button className=" " style={{ "minWidth": "auto", "borderWidth": "1px", "padding": "0 2px", "fontWeight": "400", "lineHeight": "13px", "fontSize": "12px", "borderTopRightRadius": "2px", "borderTopLeftRadius": "2px", "width": "100%", "display": "block", "color": "#4d8093", "backgroundColor": "#fffdfa", "border": "2px solid #3f6978" }}>
                                        −
                                    </button>
                                    <button className="">
                                        ＝
                                    </button>
                                    <button className="">
                                        ≡
                                    </button>
                                </div>
                                <div className="flex ">

                                    <div className="comments ">
                                        <div className="flex">
                                            <span className='md:font-bold  relative  text-[#2c3a4a]  leading-[1.25rem]' style={{ top: "8px" }}>
                                                {data.main_heading}
                                            </span>
                                            <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                                • by {data.meain_heading_by}
                                            </span>
                                        </div>
                                        {/* rest comment  */}
                                        <div className="cmtdata">

                                            {data.commentsData.map((data1, l) => {
                                                return (
                                                    <div className='py-1 px-0' key={l}>
                                                        <span className='font-[700] text-[#8c1b13] text-[0.75rem] block'>
                                                            {data1.title}
                                                        </span>
                                                        <span className="cmt-text leading-[1.125rem] mb-1">

                                                            <p className="text-[0.75rem] break-words ">
                                                                {data1.text}
                                                            </p>
                                                        </span>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>

                                <div className="subCom">
                                    {data.sub_comm.map((data2, j) => {
                                        return (

                                            <div key={j}>
                                                <div className="flex flex-col" style={{ "flexDirection": "column", "position": "absolute", "left": "162px", "marginLeft": "5px", "marginTop": "3px" }}>
                                                    <button className=" " style={{ "minWidth": "auto", "borderWidth": "1px", "padding": "0 2px", "fontWeight": "400", "lineHeight": "13px", "fontSize": "12px", "borderTopRightRadius": "2px", "borderTopLeftRadius": "2px", "width": "100%", "display": "block", "color": "#4d8093", "backgroundColor": "#fffdfa", "border": "2px solid #3f6978" }}>
                                                        −
                                                    </button>
                                                    <button className="">
                                                        ＝
                                                    </button>
                                                    <button className="">
                                                        ≡
                                                    </button>
                                                </div>
                                                <div className='box-content bg-[#fffdfa]  border-[#3f6978] border-solid mt-4 p-4' style={{ "width": "94%", "alignSelf": "center", "marginLeft": "15px" }}>

                                                    <div className="">

                                                        <span className='md:font-bold text-[#2c3a4a] leading-[1.25rem]'>
                                                            {data2.sub_comm_head}

                                                        </span>
                                                        <span className=" text-[#777] font-[400] text-[0.55 rem] ml-2  p-2">
                                                            {data2.sub_comm_by}

                                                        </span>
                                                    </div>
                                                    {/* rest sub comments  */}
                                                    <div className="cmtdata">
                                                        {data2.innerCommentsData.map((data3, m) => {
                                                            return (
                                                                <div className='py-1 px-0' key={m}>
                                                                    <span className='font-[700] text-[#8c1b13] text-[0.75rem] block'>
                                                                        {data3.title}

                                                                    </span>
                                                                    <span className="cmt-text leading-[1.125rem]">

                                                                        <p className="text-[0.75rem] break-words">
                                                                        {data3.text}
                                                                          
                                                                        </p>
                                                                    </span>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>
                                                </div>

                                            </div>
                                        )

                                    })}




                                </div>

                            </div>



                        </div>
                    );

                })}
            </div>
        </>
    )
}

export default Comments
