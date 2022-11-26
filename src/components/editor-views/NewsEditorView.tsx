import * as React from 'react'
const { useState } = React
import { editorViewPropsIF } from '../../types'
import TwoLaneView from './TwoLaneView'

const mockState = [
    {
        title: "News Item 1",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-10-26T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "News Item 2",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-06-11T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "News Item 3",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-08-12T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "News Item 4",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-11-14T22:32:45.369Z"),
        status: 'published'
    },
]


const NewsEditorView = (props: editorViewPropsIF) => {

    const { viewContext } = props
    const [ fetchedNews, setFetchedNews ] = useState(mockState)

    return (
        <div>
            <div className="add-item-wrapper">
                <button className="add-item-button">+ Add Item</button>
            </div>
            <TwoLaneView
                viewContext={viewContext}
                fetchedData={fetchedNews}
            />
        </div>
    )
}

export default NewsEditorView