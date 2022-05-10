import Image from 'next/image'
import { RiBuilding2Line } from 'react-icons/ri'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import WorkPeriod from './WorkPeriod'

const WorkHistorySection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Work History" icon={RiBuilding2Line} />
            {data.workHistory.map((work, i) => {
                const companyInitials = work.company
                    .split(' ')
                    .map((word) => {
                        return word[0]
                    })
                    .join('')
                return (
                    <div key={work.startDate} className="flex mb-8">
                        {data.showLogos && (
                            <div className="relative aspect-square w-10 h-10 mr-4">
                                {work.logo && (
                                    <Image
                                        alt={`${work.company}'s logo`}
                                        src={work.logo}
                                        layout="fill"
                                    />
                                )}
                                {!work.logo && (
                                    <div className="bg-gray-200 rounded-full flex items-center justify-center w-10 h-10 text-white text-xl font-sans">
                                        {companyInitials}
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <div className="flex items-center">
                                        <div className="font-bold">
                                            {work.company}
                                        </div>
                                        {!work.endDate && (
                                            <div className="bg-gray-100 text-gray-500 font-sans ml-2 inline-block py-1 px-2 rounded-lg text-xs ">
                                                Current
                                            </div>
                                        )}
                                    </div>
                                    <div className="opacity-50">
                                        {work.position}
                                    </div>
                                </div>
                                <div>
                                    <WorkPeriod
                                        startDate={work.startDate}
                                        endDate={work.endDate}
                                    />
                                </div>
                            </div>

                            <div>{work.description}</div>
                        </div>
                    </div>
                )
            })}
        </SectionContainer>
    )
}

export default WorkHistorySection
