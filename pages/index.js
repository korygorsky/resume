import DetailsPanel from '../components/DetailsPanel'
import SidebarPanel from '../components/SidebarPanel'
import DownloadPDF from '../components/DownloadPDF'

export default function Home() {
    return (
        <>
            <DownloadPDF />
            <div className="flex justify-center m-auto mt-4 mb-20 px-6 pt-8 border border-solid bg-white border-gray-100 min-h-screen shadow rounded-sm max-w-5xl print:shadow-none print:border-none print:mt-0">
                <div className="flex flex-col gap-8 print:flex-row sm:flex-row w-full justify-between">
                    <div className="lg:grow-0 sm:shrink-0 sm:w-36 print:shrink-0 print:w-36 ">
                        <SidebarPanel />
                    </div>
                    <div className="grow ">
                        <DetailsPanel />
                    </div>
                </div>
            </div>
        </>
    )
}
