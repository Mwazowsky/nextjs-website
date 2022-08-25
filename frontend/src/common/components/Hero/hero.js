import React from 'react'

const Hero = () => {
    return (
        <header className="bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-col px-6 lg:px-16 py-8 lg:py-0 rounded-lg backdrop-blur-sm bg-gray-200 dark:bg-gray-900 mx-auto h-full lg:flex-row lg:items-center">
                <div className="flex flex-col w-full mx-auto lg:h-[32rem] lg:flex-row lg:items-center">
                    <div className="bottom-8 flex flex-col mx-auto lg:mx-12 sm:order-2 lg:w-1/2 lg:justify-center">
                        <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">The best Apple Watch apps</h1>
                        <p className="mt-4 font-ubuntu text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <div className="mt-6">
                            <a href="#" className="block px-3 py-2 font-semibold text-center text-gray-900 dark:text-slate-300 hover:dark:text-slate-100 transition-colors duration-200 transform bg-transparent rounded-md lg:inline hover:bg-gray-700 hover:bg-opacity-20">Read More...</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero