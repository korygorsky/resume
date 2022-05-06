import { RiPencilRuler2Line } from 'react-icons/ri'

import data from '../data'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'

const SideProjectsSection = () => {
    return (
        <SectionContainer>
            <SectionHeading title="Side Projects" icon={RiPencilRuler2Line} />
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

export default SideProjectsSection
