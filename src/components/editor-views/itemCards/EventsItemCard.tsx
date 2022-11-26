import * as React from 'react'
import { eventsItemPropsIF } from '../../../types/props'


const EventsItem = (props: eventsItemPropsIF) => {
    const { data, mapIdx, draftStatus } = props

    return (
        <div key={`events-item-${mapIdx}`} className={`item-card events-item draft-status-${draftStatus}`}>
            <div>{data.title}</div>
            <div>{data.date.toDateString()}</div>
            <div>{data.body}</div>
        </div>
    ) 
}

export default EventsItem