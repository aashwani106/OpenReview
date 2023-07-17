import React from 'react'

function Navbar() {
    return (
        <nav className="bg-red-900 border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto py-2 ">
                <a href="" className="flex items-center">
                   
                    <span className="self-center text-2xl text-white   whitespace-nowrap ">
                       OpenReview
                    </span>
                    <span className="self-center text-2xl text-gray-400   whitespace-nowrap ">
                       .net
                    </span>
                </a>
                <div className="w-96    ">
                  
                    <div className="relative  ">     
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                    
                </div>
                <div className="text-white">
                    <a href=''>
                    Login
                    </a>
                </div>
                
            </div>
        </nav>

    )
}

export default Navbar
