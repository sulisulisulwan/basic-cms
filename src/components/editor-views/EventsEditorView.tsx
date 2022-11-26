import * as React from 'react'
const { useState } = React
import { editorViewPropsIF } from '../../types'
import TwoLaneView from './TwoLaneView'

const mockState = [
    {
        title: "Event Item 1",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-10-26T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "Event Item 2",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-06-11T22:32:45.369Z"),
        status: 'draft'
    },
    {
        title: "Event Item 3",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-08-12T22:32:45.369Z"),
        status: 'published'
    },
    {
        title: "Event Item 4",
        body: "LOrem ipsum, yadda yadda yadda",
        date: new Date("2022-11-14T22:32:45.369Z"),
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