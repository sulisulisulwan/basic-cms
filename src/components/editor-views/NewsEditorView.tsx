import * as React from 'react'
const { useState } = React
import { editorViewPropsIF } from '../../types'
import TwoLaneView from './TwoLaneView'

const mockState = [
    {
        title: "News Item 1",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'draft'
    },
    {
        title: "News Item 2",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'draft'
    },
    {
        title: "News Item 3",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'draft'
    },
    {
        title: "News Item 4",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'published'
    },
]


const NewsEditorView = (props: editorViewPropsIF) => {

    const { viewContext } = props
    const [ fetchedNews, setFetchedNews ] = useState(mockState)

    return (
        <div>
            <div className="add-item-wrapper">
                <button>+ Add Item</button>
            </div>
            <TwoLaneView
                viewContext={viewContext}
                fetchedData={fetchedNews}
            />
        </div>
    )
}

export default NewsEditorView