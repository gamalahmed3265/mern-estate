import React from 'react'

export const Loading = () => {

    const transition=(s=1)=> {
        return {
            animation:`loadingAnimation ${s}s infinite alternate`}
    };
    return (
        <div className="flex gap-3 text-center justify-center font-bold text-lg">
                        <span className=''>Loading</span>
                        <span style={transition()} className='bg-gray-500 rounded-full w-6 h-6'></span>
                        <span style={transition(1.4)} className='bg-gray-700 rounded-full w-6 h-6'></span>
                        <span style={transition(1.8)} className=' bg-gray-950 rounded-full w-6 h-6'></span>
                    </div>
        )
}
