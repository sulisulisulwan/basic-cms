import React from 'react'
import { eventsItemDataIF, genericObjectIF } from '../'
export default interface eventsItemPropsIF {
    data: eventsItemDataIF
    mapIdx: number
    draftStatus: string
    setCardDataFocus: React.Dispatch<genericObjectIF | null>
}
