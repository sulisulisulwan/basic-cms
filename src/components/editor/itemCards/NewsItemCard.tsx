import * as React from 'react'
import { newsItemCardPropsIF } from '../../../types'

const NewsItemCard = (props: newsItemCardPropsIF) => {

    const { data, mapIdx, draftStatus, setCardDataFocus } = props

    return (
        <div key={`news-item-${mapIdx}`} className={`item-card news-item draft-status-${draftStatus}`}  onClick={ () => { setCardDataFocus(data) }}>
            <div>{data.title}</div>
            <div>{new Date(data.date).toDateString()}</div>
            <div>{data.body}</div>
        </div>
    ) 
}

export default NewsItemCard