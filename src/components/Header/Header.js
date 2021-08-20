import React from 'react'

export default function Header() {
    return (
        <>
            <header className=" text-white body-font bg-xanh ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">Movie-App</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 cursor-pointer px-4 py-2 rounded-sm hover:bg-white hover:text-xanh">Home</a>
                        <a className="mr-5 cursor-pointer px-4 py-2 rounded-sm hover:bg-white hover:text-xanh">Movie</a>
                        <a className="mr-5 cursor-pointer px-4 py-2 rounded-sm hover:bg-white hover:text-xanh">Showtimes</a>
                        <a className="mr-5 cursor-pointer px-4 py-2 rounded-sm hover:bg-white hover:text-xanh">Contact</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LOGIN
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </header>

        </>
    )
}
