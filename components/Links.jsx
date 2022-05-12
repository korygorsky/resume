const Links = ({ links }) => {
    if (!links || links.length === 0) {
        return null
    }

    return (
        <div className="flex  gap-3 flex-col justify-center">
            {links.map((link, index) => {
                const { href, name, icon } = link
                const Icon = icon

                return (
                    <div
                        key={href}
                        className={`flex flex-col items-center justify-center`}
                    >
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            {icon && <Icon className="mr-2" />} {name}
                        </a>
                        <div className="hidden print:block ml-1 text-xxs text-gray-500">
                            {href}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Links
