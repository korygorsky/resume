import BioSection from './BioSection'
import EducationSection from './EducationSection'
import SideProjectsSection from './SideProjectsSection'
import WorkHistorySection from './WorkHistorySection'
import data from '../data'

const DetailsPanel = () => {
    return (
        <div>
            {!!data.links && !!data.links.length && (
                <div className="flex justify-end">
                    {data.links.map((link, index) => {
                        return (
                            <div
                                key={link.href}
                                className={`flex items-center ${
                                    index > 0 ? 'ml-2' : ''
                                }`}
                            >
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </a>
                                <div className="hidden print:block ml-1 text-xs text-gray-500">
                                    ( {link.href} )
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
            <div className="flex flex-col h-28 justify-center">
                <h1 className="text-2xl">{data.fullName}</h1>
                <h2 className="text-xl opacity-60">{data.lookingFor}</h2>
            </div>
            <div>
                <BioSection />
            </div>
            <div>
                <WorkHistorySection />
            </div>
            {data.sideProjects && !!data.sideProjects.length && (
                <div>
                    <SideProjectsSection />
                </div>
            )}
            {data.education && !!data.education.length && (
                <div>
                    <EducationSection />
                </div>
            )}
        </div>
    )
}

export default DetailsPanel
