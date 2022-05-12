import { RiBookOpenLine } from 'react-icons/ri'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import Experience from './Experience'

const EducationSection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Education" icon={RiBookOpenLine} />
            {data.education.map((school, i) => (
                <Experience
                    key={school.startDate}
                    showLogos={data.showLogos}
                    title={school.institution}
                    logo={school.logo}
                    subtitle={school.program}
                    description={school.description}
                    startDate={school.startDate}
                    endDate={school.endDate}
                />
            ))}
        </SectionContainer>
    )
}

export default EducationSection
