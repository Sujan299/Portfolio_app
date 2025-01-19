import React from 'react'

const Contact = () => {
    return (<>
        <div className='ml-11 mr-11 mb-7 text-2xl text-white text-opacity-100 font-semibold'>Contact </div>

        <div className='mx-11  mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6 h-[80vh] md:h-92'>

            <textarea name="message" id="" className='rounded-md bg-medium_dark p-4 md:h-[50vh]'></textarea>
            <div className=''>
                <div className='sm:flex-row flex-col flex h-24 justify-center items-center'>
                    <label htmlFor='name' className='text-xl flex-1'>Name : </label>
                    <input type="text" className='flex-[5] mx-6 px-3 py-2 bg-medium_dark rounded-sm' />
                </div>
                <div className='sm:flex-row flex-col flex h-24 justify-center items-center'>
                    <label htmlFor='name' className='text-xl flex-1'>Email : </label>
                    <input type="email" className='flex-[5] mx-6 px-3 py-2 bg-medium_dark rounded-sm' />
                </div>
                <div className='sm:flex-row flex-col flex h-24 justify-center items-center'>
                    <label htmlFor='name' className='text-xl flex-1'>Phone : </label>
                    <input type="text" className='flex-[5] mx-6 px-3 py-2 bg-medium_dark rounded-sm' />
                </div>
                <div className='flex md:justify-end justify-center'>
                    <button className='bg-green-500 px-6 py-2 rounded-3xl md:mr-7 mt-7'>Send</button>
                </div>
            </div>

        </div>

       
    </>
    )
}

export default Contact