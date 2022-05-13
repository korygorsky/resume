import { RiHeart2Line } from 'react-icons/ri'
import { PotentialEmployer } from '../data'

interface CoverLetterProps {
    company?: PotentialEmployer
}

const CoverLetter = ({ company }: CoverLetterProps) => {
    return (
        <div className="rounded-xl text-sm bg-yellow-50 mb-4 px-5 py-4">
            {!!company.salutation && (
                <div className="mb-2 text-base">{company.salutation},</div>
            )}
            <div className="leading-6">{company.shortIntro}</div>
            {!!company.reasons && company.reasons.length > 0 && (
                <div className="mt-5">
                    <h3 className="flex font-bold mb-2 items-center">
                        <RiHeart2Line className="mr-1" />
                        Reasons I&apos;d Love to Work for {company.companyName}
                    </h3>
                    <ul className="ml-8">
                        {company.reasons.map((reason, index) => (
                            <li key={index} className="list-disc mb-2">
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default CoverLetter
