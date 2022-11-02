import React, { FC } from 'react'

export interface LinkProps {
    link?: string
    color?: 'black' | 'blue' | 'red'
    noBorder?: boolean
    children?: React.ReactNode
}

const LinkWrapper: FC<LinkProps> = ({
    link,
    children,
    color = 'blue',
    noBorder,
}): JSX.Element => {
    if (link)
        return (
            <a
                href={link}
                itemProp='url'
                className={`link--${color} ${noBorder ? `link--noborder` : ``}`}
            >
                {children}
            </a>
        )
    return <div>{children}</div>
}
export default LinkWrapper
