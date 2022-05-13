import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import data from '../../data'
import IndexPage from '../index'

const Company = () => {
    const [company, setCompany] = useState(null)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (id) {
            const company = data.potentialEmployers
                ? data.potentialEmployers[id]
                : undefined
            if (!company) {
                router.push('/404')
            } else {
                setCompany(company)
            }
        }
    }, [id])

    if (!company) {
        return <div className="flex justify-center mt-6">Loading...</div>
    }
    // const companyData = data[company]

    return <IndexPage company={company} />
}

export default Company
