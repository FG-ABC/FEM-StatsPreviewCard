import React from 'react'

const StatsCard = () => {
  return (
    <div id='Card' className='w-8/12 sm:w-auto sm:h-96 flex flex-col rounded-xl sm:flex-row'>
        <div id='Imageholder' className='rounded-t-xl sm:rounded-t-none sm:rounded-r-xl w-full h-52 sm:h-full sm:w-1/2 sm:order-2'>      
        </div>
        <div id='Contentholder' className='p-8 flex flex-col items-center sm:justify-between sm:p-12 sm:pr-14 sm:w-1/2'>
            <h1 className='text-3xl text-center sm:text-left'>Get <span id='Violet'>insights</span> that
                help your business grow.
            </h1>
            <p className='text-center sm:text-left py-4 sm:pt-0'>
                Discover the benefits of data analytics and make better decisions regarding revenue, customer 
    experience, and overall efficiency.
            </p>
            <div className='text-center sm:text-left w-full flex flex-col sm:flex-row sm:justify-between items-center'>
                <div className='py-3'>
                    <h2>10k+</h2>
                    <p className='text-sm'>COMPANIES</p>
                </div>
                <div className='py-3'>
                    <h2 className=''>314</h2>
                    <p className='text-sm'>TEMPLATES</p>
                </div>
                <div className='py-3'>
                    <h2 className=''>12M+</h2>
                    <p className='text-sm'>QUERIES</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default StatsCard