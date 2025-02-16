import React from 'react'
import experiences from '../assets/experiences.json'

const Experiences = () => {
    return (<>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            {experiences.map((exp) => (
                <div 
                    key={exp.id} 
                    className="mx-11 bg-medium_dark md:h-[60vh] sm:h-[70vh] h-[90vh] rounded-2xl shadow-xl p-6 mb-8 border border-gray-700 hover:shadow-2xl transition-shadow duration-300">

                    {/* Header Section */}
                    <div className="flex justify-between items-center border-b border-gray-600 pb-4 mb-4">
                        <p className="text-2xl font-bold text-white">{exp.companyName}</p>
                        <p className="text-gray-400 text-lg">{exp.period}</p>
                    </div>

                    {/* Role Section */}
                    <p className="my-2 text-lg text-gray-300">Role: 
                        <span className="underline font-semibold text-blue-400 ml-1">{exp.role}</span>
                    </p>

                    {/* Description Section */}
                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">{exp.desc}</p>

                    {/* Achievements Section */}
                    <ul className="my-4 list-disc list-inside space-y-2">
                        {exp.achievements.map((achieve) => (
                            <li key={achieve.id} className="text-gray-300">{achieve.desc}</li>
                        ))}
                    </ul>

                    {/* Owner Quote Section */}
                    <p className="text-2xl mt-6 text-gray-100 font-semibold">
                        From Owner: 
                        <span className="italic playFairFont text-blue-300 ml-2">"{exp.companyThinks}"</span>
                    </p>
                </div>
            ))}
        </div>
    </>
    )
}

export default Experiences