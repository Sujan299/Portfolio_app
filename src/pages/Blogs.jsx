import React from 'react'
import blogs from '../assets/blogs.json'

const Blogs = () => {
    return (<>
        <div className='ml-11 mr-11 mb-7 text-2xl text-white text-opacity-100 font-semibold'>My blogs</div>
        <div className='mb-7 flex flex-col gap-7'>
            {
                blogs.map((blog)=>{
                    return <div key={blog.id} className='mx-11 xl:h-52 lg:h-92 rounded-lg p-4 flex flex-col gap-10 bg-medium_dark'>
                    <div className='flex gap-6 my-5 flex-wrap lg:flex-row flex-col-reverse justify-center items-center'>
                        <div className='flex-1'>
                            <h1 className='playFairFont text-3xl'>{blog.title}</h1>
                            <p className='mt-5 opacity-50'>{blog.desc}</p>
                        </div>
                        <div className=''>
                            <img className='rounded-md lg:w-full w-[100vw]' src={blog.imageUrl} alt="" />
                        </div>
                    </div>
                </div>
                })
            }
        </div>
    </>
    )
}

export default Blogs