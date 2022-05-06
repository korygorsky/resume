import { RiBookOpenLine } from 'react-icons/ri'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'

const EducationSection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Education" icon={RiBookOpenLine} />
            {/* {data.workHistory.map((work, i) => {
                return (
                    <div key={work.startDate}>
                        <div className="">{work.company}</div>
                    </div>
                )
            })} */}
        </SectionContainer>
    )
}

export default EducationSection
