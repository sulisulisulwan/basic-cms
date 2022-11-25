import * as React from 'react'
import { twoLaneViewPropsIF } from '../../types'

interface sortedDataIF {
    draft: any[]
    published: any[]
}

const TwoLaneView = (props: twoLaneViewPropsIF) => {

    const { viewContext, fetchedData } = props

    const sortedData: sortedDataIF = {
        draft: [],
        published: []
    }

    fetchedData.forEach(data => {
        sortedData[data.status as keyof sortedDataIF].push(data)
    })

    return (
        <div className="two-lane-view-and-add-item">
            <div className="add-item-wrapper">
                <button>+ Add Item</button>
            </div>
            <div className="two-lane-view">
                <div className="left-lane">
                    Draft
                    {sortedData.draft.map(mapOverDataItems)}
                </div>
                <div className="right-lane">
                    Published
                    {sortedData.published.map(mapOverDataItems)}
                </div>
            </div>
        </div>
    )
}

const mapOverDataItems = (data: any, idx: number) => {
    return (
        <div key={`${data.title}-${idx}`}>
            <div>{data.title}</div>
            <div>{data.body}</div>
        </div>
    )
}

export default TwoLaneView