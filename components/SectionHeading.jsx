const SectionHeading = ({ title, icon }) => {
    const Icon = icon
    return (
        <div className="text-xl flex items-center mb-5">
            <Icon className="mr-2" />
            <div>{title}</div>
        </div>
    )
}

export default SectionHeading
