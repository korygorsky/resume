import { RiDownloadCloud2Line } from 'react-icons/ri'

const DownloadPDF = () => {
    const download = () => {
        window.location.href = '/api/download'
    }

    return (
        <div className="print:hidden flex justify-center my-8">
            <button
                className="flex items-center justify-center bg-indigo-600 text-white px-3 py-2 rounded-lg"
                onClick={download}
            >
                <RiDownloadCloud2Line className="mr-2" />
                Download
            </button>
        </div>
    )
}

export default DownloadPDF
