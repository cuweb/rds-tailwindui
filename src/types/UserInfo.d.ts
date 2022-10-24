import { ReactNode } from 'react'
import { ImageType } from './Image'

export type UserInfoType = {
    firstName: string
    lastName: string
    image?: ImageType
    info?: ReactNode
}
