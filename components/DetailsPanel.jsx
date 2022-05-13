import BioSection from './BioSection'
import EducationSection from './EducationSection'
import SideProjectsSection from './SideProjectsSection'
import WorkHistorySection from './WorkHistorySection'
import CoverLetter from './CoverLetter'
import data from '../data'

const DetailsPanel = ({ company }) => {
    return (
        <div>
            <div className="flex flex-col h-28 justify-center">
                <h1 className="text-2xl">{data.fullName}</h1>
                <h2 className="text-xl opacity-60">{data.lookingFor}</h2>
                {!!data.strengths?.length > 0 && (
                    <div className="flex">
                        {data.strengths.map((strength, i) => (
                            <div
                                key={i}
                                className="mt-2 mb-4 rounded bg-gray-100 text-gray-500 p-2 text-xs font-sans mr-2"
                            >
                                {strength}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {!!company && <CoverLetter company={company} />}
            <div>
                <BioSection />
            </div>
            <div>
                <WorkHistorySection />
            </div>
            {!!data.sideProjects?.length > 0 && (
                <div>
                    <SideProjectsSection />
                </div>
            )}
            {!!data.education?.length > 0 && (
                <div>
                    <EducationSection />
                </div>
            )}
        </div>
    )
}

export default DetailsPanel
