import * as React from 'react'
import axios from 'axios'
const { useState, useEffect } = React
import { editorViewPropsIF } from '../../../types'
import TwoLaneView from '../two-lane/TwoLaneView'

const EventsEditorView = (props: editorViewPropsIF) => {

    const { viewContext, setModalView, setCardDataFocus } = props
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
                <button onClick={() => { setModalView('events') }}>+ Add Item</button>
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