import Image from 'next/image'

import { RiMapPin2Line, RiCellphoneLine, RiMailLine } from 'react-icons/ri'
import data from '../data'
import Links from './Links'

const SidebarPanel = () => {
    return (
        <div className="flex flex-col gap-3 items-center text-center text-xs">
            <Image
                className="rounded-full"
                src={data.profilePicture}
                alt="My Photo"
                width={120}
                height={120}
            />

            <ContactDetails icon={RiMapPin2Line}>
                {data.location}
            </ContactDetails>
            <ContactDetails icon={RiCellphoneLine}>{data.phone}</ContactDetails>
            <ContactDetails icon={RiMailLine}>{data.email}</ContactDetails>
            <Links links={data.links} />
        </div>
    )
}

const ContactDetails = ({ icon, children }) => {
    const Icon = icon
    return (
        <h2 className="flex items-center">
            <Icon className="mr-1" /> {children}
        </h2>
    )
}

export default SidebarPanel
