import React from 'react'
import experiences from '../assets/experiences.json'

const Experiences = () => {
    return (<>
        <div className='ml-11 mr-11 mb-7 text-2xl text-white text-opacity-100 font-semibold'>Experiences</div>
        <div className='mb-7'>
            {
                experiences.map((exp) => {
                    return <div key={exp.id} className='mx-11 bg-medium_dark md:h-[50vh] sm:h-[70vh] h-[90vh] rounded-lg p-4 mb-8'>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-semibold'>{exp.companyName}</p>
                            <p>{exp.period}</p>
                        </div>
                        <p className='my-2'>Role : <span className='underline font-semibold text-blue-500'>{exp.role}</span></p>
                        <p className='mt-6 text-lg'>{exp.desc}</p>
                        <ul className='my-2 list-disc list-inside'>
                            {
                                exp.achievements.map((achive)=>{
                                    return <li key={achive.id}>{achive.desc}</li>
                                })
                            }
                        </ul>
                        <p className='text-2xl mt-6'>From owner : <span className='playFairFont'>"{exp.companyThinks}"</span></p>
                    </div>
                })
            }
        </div>
    </>
    )
}

export default Experiences