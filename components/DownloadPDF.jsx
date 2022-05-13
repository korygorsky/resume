import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { RiDownloadCloud2Line } from 'react-icons/ri'
import Link from 'next/link'

const DownloadPDF = () => {
    const router = useRouter()
    const path = router.asPath
    const url = useMemo(() => {
        return '/api/download?path=' + path
    }, [path])

    return (
        <div className="print:hidden flex justify-center my-8">
            <Link href={url}>
                <a
                    className="flex items-center justify-center bg-indigo-600
                text-white px-3 py-2 rounded-lg"
                >
                    <RiDownloadCloud2Line className="mr-2" />
                    Download
                </a>
            </Link>
        </div>
    )
}

export default DownloadPDF
