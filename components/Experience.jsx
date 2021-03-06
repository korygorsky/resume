import { RiKey2Fill } from 'react-icons/ri'

import WorkPeriod from './WorkPeriod'
import Image from 'next/image'
import { SlowBuffer } from 'buffer'

const Experience = ({
    title,
    description,
    logo,
    subtitle,
    startDate,
    endDate,
    showLogos,
    accomplishments,
    skills,
}) => {
    const initials = title
        .split(' ')
        .map((word) => {
            return word[0]
        })
        .join('')
    return (
        <div className="flex mb-8 break-inside-avoid-page">
            {showLogos && (
                <div className="relative aspect-square w-10 h-10 mr-4">
                    {logo && (
                        <Image
                            alt={`${title}'s logo`}
                            src={logo}
                            layout="fill"
                        />
                    )}
                    {!logo && (
                        <div className="bg-gray-200 rounded-full flex items-center justify-center w-10 h-10 text-white text-xl font-sans">
                            {initials}
                        </div>
                    )}
                </div>
            )}
            <div className="w-full">
                <div className="flex justify-between mb-2">
                    <div>
                        <div className="flex items-center">
                            <div className="font-bold">{title}</div>
                            {!endDate && (
                                <div className="bg-gray-100 text-gray-500 font-sans ml-2 inline-block py-1 px-2 rounded-lg text-xs ">
                                    Current
                                </div>
                            )}
                        </div>
                        <div className="opacity-50">{subtitle}</div>
                    </div>
                    <div>
                        <WorkPeriod startDate={startDate} endDate={endDate} />
                    </div>
                </div>

                <div>{description}</div>

                {!!accomplishments && accomplishments.length > 0 && (
                    <div className="mt-3">
                        <div className="flex items-center mb-2">
                            <RiKey2Fill className="mr-1" />
                            Key Accomplishments
                        </div>
                        <ul className="list-disc text-gray-500 ml-4">
                            {accomplishments.map((accomplishment, i) => (
                                <li key={i} className={`pb-2`}>
                                    {accomplishment}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {!!skills && skills.length > 0 && (
                    <div className="flex mt-3">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-gray-100 text-gray-500 font-sans ml-2 inline-block py-1 px-2 rounded-lg text-xs "
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience
