import React from 'react'

function Form1() {


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
                                <div className='block '>
                                    <input className='block w-full py-1 px-2 mt-1 border border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type="text" name="" id="" placeholder='Paper Decision' />
                                </div>
                            </div>

                            <div className="body mt-3   text-[#762121] ">
                                <div className='md:font-bold'>
                                    * Decision
                                </div>

                                <div className='text-gray-400 text-[0.725rem]'>Dicision</div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class=" mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept (Oral)</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class=" mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept (Poster)</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class=" mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reject</label>
                                </div>

                            </div>

                            <div className="body mt-3 ">
                                <div className='md:font-bold text-[#762121]'>
                                    Comment
                                </div>
                                <div className=''>
                                    <textarea className='block w-full py-1 px-2 mt-1 h-56 border border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form1