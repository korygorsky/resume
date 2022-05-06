const WorkPeriod = ({ startDate, endDate }) => {
    const calculatedEndDate = endDate ?? new Date()
    const jobLengthInMonths =
        (calculatedEndDate - startDate) / (1000 * 60 * 60 * 24 * 30)
    return (
        <div className="flex flex-col items-end leading-tight font-sans opacity-50 uppercase text-xxs">
            <div>
                {startDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                })}
                {` - `}
                {endDate &&
                    endDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                    })}
                {!endDate && 'Present'}
            </div>
            <div className="opacity-50">
                {Math.round(jobLengthInMonths)} months
            </div>
        </div>
    )
}

export default WorkPeriod
