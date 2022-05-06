import { RiPencilRuler2Line } from 'react-icons/ri'
import Image from 'next/image'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import WorkPeriod from './WorkPeriod'

const SideProjectsSection = () => {
    const areThereAnyLogos = data.sideProjects.some((project) => project.logo)

    return (
        <SectionContainer>
            <SectionHeading title="Side Projects" icon={RiPencilRuler2Line} />
            {data.sideProjects.map((project, i) => {
                const initials = project.name
                    .split(' ')
                    .map((word) => {
                        return word[0]
                    })
                    .join('')
                return (
                    <div key={project.startDate} className="flex mb-8">
                        {areThereAnyLogos && (
                            <div className="relative aspect-square w-10 h-10 mr-4">
                                {project.logo && (
                                    <Image src={project.logo} layout="fill" />
                                )}
                                {!project.logo && (
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
                                            {project.name}
                                        </div>
                                        {!project.endDate && (
                                            <div className="bg-gray-100 text-gray-500 font-sans ml-2 inline-block py-1 px-2 rounded-lg text-xs ">
                                                Current
                                            </div>
                                        )}
                                    </div>
                                    <div className="opacity-50">
                                        {project.role}
                                    </div>
                                </div>
                                <div>
                                    <WorkPeriod
                                        startDate={project.startDate}
                                        endDate={project.endDate}
                                    />
                                </div>
                            </div>

                            <div>{project.description}</div>
                        </div>
                    </div>
                )
            })}
        </SectionContainer>
    )
}

export default SideProjectsSection
