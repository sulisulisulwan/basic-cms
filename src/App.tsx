import * as React from 'react'
const { useState } = React
import { genericObjectIF } from './types'
import EditorViewWrapper from './components/editor/EditorViewWrapper'
import SidebarMenu from './components/sidebar-menu/SidebarMenu'
import EventsEditorView from './components/editor/views/EventsEditorView'
import MediaUploaderView from './components/editor/views/MediaUploaderView'
import NewsEditorView from './components/editor/views/NewsEditorView'
import TextBlockEditorView from './components/editor/views/TextBlockEditorView'
import DefaultEditorView from './components/editor/views/DefaultEditorView'
import HeaderRow from './components/HeaderRow'
import FormModal from './components/editor/form-modal/FormModal'
import config from '../config'

const App = () => {

    const [ editorViewState, setEditorViewState ] = useState('default')
    const [ modalView, setModalView ] = useState(null) as [ null | string, React.Dispatch<string | null>]
    const [ cardDataFocus, setCardDataFocus ] = useState(null)

    if (cardDataFocus && modalView === null) {
        mapFocusedCardToModalView(editorViewState, setModalView)
    }

    return (
        <div className="app">
            <HeaderRow/>
            <div className="menu-and-editor">
                <SidebarMenu
                    menuItems={config.getField('EDITOR_VIEWS')}
                    setEditorViewState={setEditorViewState}
                />
                <EditorViewWrapper>
                    { loadView(editorViewState, setModalView, setCardDataFocus as React.Dispatch<genericObjectIF | null>) }
                </EditorViewWrapper>
            </div>
            { modalView !== null ? <FormModal type={modalView} setModalView={setModalView} cardDataFocus={cardDataFocus} setCardDataFocus={setCardDataFocus as React.Dispatch<genericObjectIF | null>}/> : null}
        </div>
    )
}

const loadView = (viewContext: string, setModalView: React.Dispatch<string | null>, setCardDataFocus: React.Dispatch<genericObjectIF | null>) => {

    const viewMap = new Map([
        ['default', <DefaultEditorView/>],
        ['newsEditor', <NewsEditorView viewContext={viewContext} setModalView={setModalView} setCardDataFocus={setCardDataFocus}/>],
        ['eventsEditor', <EventsEditorView viewContext={viewContext} setModalView={setModalView} setCardDataFocus={setCardDataFocus}/>],
        ['mediaUploader', <MediaUploaderView setModalView={setModalView}/>],
        ['textBlockEditor', <TextBlockEditorView setModalView={setModalView}/>]
    ])

    return viewMap.get(viewContext)
}

const mapFocusedCardToModalView = (editorViewState: string, setModalView: React.Dispatch<string | null>) => {
    const mappedModalView = mapToModalFormView.get(editorViewState)

    if (mappedModalView) {
        setModalView(mappedModalView)
        return
    }

    throw new Error('Improper mapping from editorViewState to modalView.  Mapping was undefined')
}

const mapToModalFormView = new Map([
    ['eventsEditor', 'events'],
    ['newsEditor', 'news']
])

export default App