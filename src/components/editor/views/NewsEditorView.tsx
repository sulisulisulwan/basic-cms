import * as React from 'react'
import  axios from 'axios'

const { useState, useEffect } = React
import { editorViewPropsIF } from '../../../types'
import TwoLaneView from '../two-lane/TwoLaneView'

const NewsEditorView = (props: editorViewPropsIF) => {

    const { viewContext, setModal, setCardDataFocus } = props
    const [ fetchedNews, setFetchedNews ] = useState([])

    useEffect(() => {
        axios.get(`/news`)
            .then(result => {
                setFetchedNews(result.data)
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
                fetchedData={fetchedNews}
                setCardDataFocus={setCardDataFocus}
            />
        </div>
    )
}

export default NewsEditorView