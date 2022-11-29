import * as React from 'react'
import { eventsItemPropsIF } from '../../../types/props'

const EventsItemCard = (props: eventsItemPropsIF) => {

    const { data, mapIdx, draftStatus, setCardDataFocus } = props

    return (
        <div key={`events-item-${mapIdx}`} className={`item-card events-item draft-status-${draftStatus}`} onClick={ () => { setCardDataFocus(data) }}>
            <div>{data.title}</div>
            <div>{new Date(data.date).toDateString()}</div>
            <div>{data.body}</div>
        </div>
    ) 
}

export default EventsItemCard