import { RiPencilRuler2Line } from 'react-icons/ri'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import Experience from './Experience'

const SideProjectsSection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Side Projects" icon={RiPencilRuler2Line} />
            {data.sideProjects.map((project, i) => (
                <Experience
                    key={project.startDate}
                    showLogos={data.showLogos}
                    title={project.name}
                    logo={project.logo}
                    subtitle={project.role}
                    description={project.description}
                    startDate={project.startDate}
                    endDate={project.endDate}
                />
            ))}
        </SectionContainer>
    )
}

export default SideProjectsSection
