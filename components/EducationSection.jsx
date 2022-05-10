import { RiBookOpenLine } from 'react-icons/ri'
import Image from 'next/image'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import WorkPeriod from './WorkPeriod'

const EducationSection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Education" icon={RiBookOpenLine} />
            {data.education.map((school, i) => {
                const initials = school.institution
                    .split(' ')
                    .map((word) => {
                        return word[0]
                    })
                    .join('')
                return (
                    <div key={school.startDate} className="flex mb-8">
                        {data.showLogos && (
                            <div className="relative aspect-square w-10 h-10 mr-4">
                                {school.logo && (
                                    <Image
                                        alt={`${school.institution}'s logo`}
                                        src={school.logo}
                                        layout="fill"
                                    />
                                )}
                                {!school.logo && (
                                    <div className="bg-gray-200 rounded-full flex items-center justify-center w-10 h-10 text-white text-xl font-sans">
                                        {initials}
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <div className="flex items-center">
                                        <div className="font-bold">
                                            {school.institution}
                                        </div>
                                        {!school.endDate && (
                                            <div className="bg-gray-100 text-gray-500 font-sans ml-2 inline-block py-1 px-2 rounded-lg text-xs ">
                                                Current
                                            </div>
                                        )}
                                    </div>
                                    <div className="opacity-50">
                                        {school.program}
                                    </div>
                                </div>
                                <div>
                                    <WorkPeriod
                                        startDate={school.startDate}
                                        endDate={school.endDate}
                                    />
                                </div>
                            </div>

                            <div>{school.description}</div>
                        </div>
                    </div>
                )
            })}
        </SectionContainer>
    )
}

export default EducationSection
