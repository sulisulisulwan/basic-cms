import * as React from 'react'
import axios from 'axios'
const { useState, useEffect } = React
import { editorViewPropsIF } from '../../../types'
import TwoLaneView from '../two-lane/TwoLaneView'
import config from '../../../../config'

// const mockState = [
//     {
//         title: "Event Item 1",
//         body: "LOrem ipsum, yadda yadda yadda",
//         date: new Date("2022-10-26T22:32:45.369Z"),
//         status: 'draft'
//     },
//     {
//         title: "Event Item 2",
//         body: "LOrem ipsum, yadda yadda yadda",
//         date: new Date("2022-06-11T22:32:45.369Z"),
//         status: 'draft'
//     },
//     {
//         title: "Event Item 3",
//         body: "LOrem ipsum, yadda yadda yadda",
//         date: new Date("2022-08-12T22:32:45.369Z"),
//         status: 'published'
//     },
//     {
//         title: "Event Item 4",
//         body: "LOrem ipsum, yadda yadda yadda",
//         date: new Date("2022-11-14T22:32:45.369Z"),
//         status: 'published'
//     },
// ]

const EventsEditorView = (props: editorViewPropsIF) => {

    const { viewContext, setModal, setCardDataFocus } = props
    const [ fetchedEvents, setFetchedEvents ] = useState([])

    useEffect(() => {
        axios.get(`/events`)
            .then(result => {
                setFetchedEvents(result.data)
            })
            .catch(e => {
                console.error(e)
            })

    }, [])

    return (
        <div>
            <div className="add-item-wrapper">
                <button onClick={() => { setModal('events') }}>+ Add Item</button>
            </div>
            <TwoLaneView
                viewContext={viewContext}
                fetchedData={fetchedEvents}
                setCardDataFocus={setCardDataFocus}
            />
        </div>
    )
}

export default EventsEditorView