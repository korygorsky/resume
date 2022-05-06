import BioSection from './BioSection'
import EducationSection from './EducationSection'
import SideProjectsSection from './SideProjectsSection'
import WorkHistorySection from './WorkHistorySection'
import data from '../data'

const DetailsPanel = () => {
    return (
        <div>
            <div className="flex flex-col h-32 justify-center">
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
