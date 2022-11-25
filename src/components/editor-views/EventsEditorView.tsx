import * as React from 'react'
const { useState } = React
import { editorViewPropsIF } from '../../types'
import TwoLaneView from './TwoLaneView'

const mockState = [
    {
        title: "Event Item 1",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'draft'
    },
    {
        title: "Event Item 2",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'draft'
    },
    {
        title: "Event Item 3",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'published'
    },
    {
        title: "Event Item 4",
        body: "LOrem ipsum, yadda yadda yadda",
        status: 'published'
    },
]

const EventsEditorView = (props: editorViewPropsIF) => {

    const { viewContext } = props
    const [ fetchedEvents, setFetchedEvents ] = useState(mockState)

    return (
        <div>
            <div className="add-item-wrapper">
                <button>+ Add Item</button>
            </div>
            <TwoLaneView
            viewContext={viewContext}
            fetchedData={fetchedEvents}
            />
        </div>
    )
}

export default EventsEditorView