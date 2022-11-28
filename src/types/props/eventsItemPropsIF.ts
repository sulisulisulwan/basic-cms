import React from 'react'
import { eventsItemDataIF } from '../'

interface genericObjectIF {
    [key: string]: any
}
export default interface eventsItemPropsIF {
    data: eventsItemDataIF
    mapIdx: number
    draftStatus: string
    setCardDataFocus: React.Dispatch<genericObjectIF | null>
}
