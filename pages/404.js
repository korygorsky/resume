import Link from 'next/link'
import { RiQuestionMark } from 'react-icons/ri'

const PageMissing = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center mt-12">
            <div className="flex justify-center items-center rounded-full bg-indigo-600 p-3">
                <RiQuestionMark className="text-4xl font-bold text-white" />
            </div>
            <p>We couldn't find that page.</p>
            <Link href="/">
                <a className="text-indigo-700">Head back home?</a>
            </Link>
        </div>
    )
}

export default PageMissing
