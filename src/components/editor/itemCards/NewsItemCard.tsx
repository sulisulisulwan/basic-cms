import * as React from 'react'
import { newsItemCardPropsIF } from '../../../types'

const NewsItem = (props: newsItemCardPropsIF) => {

    const { data, mapIdx, draftStatus } = props

    return (
        <div key={`news-item-${mapIdx}`} className={`item-card news-item draft-status-${draftStatus}`}>
            <div>{data.title}</div>
            <div>{data.date.toDateString()}</div>
            <div>{data.body}</div>
        </div>
    ) 
}

export default NewsItem