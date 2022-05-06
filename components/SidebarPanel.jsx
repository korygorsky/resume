import Image from 'next/image'

import data from '../data'

const SidebarPanel = () => {
    return (
        <div className="flex flex-col gap-3 items-center text-center text-sm">
            <Image
                className="rounded-full"
                src={data.profilePicture}
                alt="My Photo"
                width={120}
                height={120}
            />

            <h2>{data.location}</h2>
            <h2>{data.phone}</h2>
            <h2>{data.email}</h2>
        </div>
    )
}

export default SidebarPanel
