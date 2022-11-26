import * as React from 'react'

interface newsItemCardIF {
    data: {
        title: string
        body: string
        date: Date
    }
    mapIdx: number
    draftStatus: string
}

const NewsItem = (props: newsItemCardIF) => {

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