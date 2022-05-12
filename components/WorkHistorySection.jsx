import { RiBuilding2Line } from 'react-icons/ri'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import Experience from './Experience'

const WorkHistorySection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Work History" icon={RiBuilding2Line} />
            {data.workHistory.map((work, i) => (
                <Experience
                    key={work.startDate}
                    showLogos={data.showLogos}
                    title={work.company}
                    logo={work.logo}
                    subtitle={work.role}
                    description={work.description}
                    startDate={work.startDate}
                    endDate={work.endDate}
                />
            ))}
        </SectionContainer>
    )
}

export default WorkHistorySection
