import * as React from 'react'
import EditorViewWrapper from './components/editor/EditorViewWrapper'
import SidebarMenu from './components/sidebar-menu/SidebarMenu'
import EventsEditorView from './components/editor/views/EventsEditorView'
import MediaUploaderView from './components/editor/views/MediaUploaderView'
import NewsEditorView from './components/editor/views/NewsEditorView'
import TextBlockEditorView from './components/editor/views/TextBlockEditorView'
import { contentEditorComponentConfigIF } from './types'
import DefaultEditorView from './components/editor/views/DefaultEditorView'
import HeaderRow from './components/HeaderRow'
import FormModal from './components/editor/form-modal/FormModal'

const { useState } = React

interface mockStateIF {
    viewContexts: contentEditorComponentConfigIF[]
}

const mockState: mockStateIF = {
    viewContexts: [
        { 
            name: 'newsEditor',
            menuName: 'News Editor',
            menuIconImg: './assets/news-editor-icon.png'
        },
        {
            name: 'eventsEditor',
            menuName: 'Events Editor',
            menuIconImg: './assets/events-editor-icon.png'
        },
        {   
            name: 'mediaUploader', 
            menuName: 'Media Uploader',
            menuIconImg: './assets/media-uploader-icon.png'
        },
        {
            name: 'textBlockEditor',
            menuName: 'Text Block Editor',
            menuIconImg: './assets/text-block-editor-icon.png'
        }
    ]
}

interface genericObjectIF {
    [key: string]: any
}

const loadView = (viewContext: string, setModal: React.Dispatch<string>, setCardDataFocus: React.Dispatch<genericObjectIF | null>) => {

    const viewMap = new Map([
        ['default', <DefaultEditorView/>],
        ['newsEditor', <NewsEditorView viewContext={viewContext} setModal={setModal} setCardDataFocus={setCardDataFocus}/>],
        ['eventsEditor', <EventsEditorView viewContext={viewContext} setModal={setModal} setCardDataFocus={setCardDataFocus}/>],
        ['mediaUploader', <MediaUploaderView setModal={setModal}/>],
        ['textBlockEditor', <TextBlockEditorView setModal={setModal}/>]
    ])

    return viewMap.get(viewContext)
}



const App = () => {

    const [ appConfigState, setAppConfigState ] = useState(mockState)
    const [ editorViewState, setEditorViewState ] = useState('default')
    const [ modal, setModal ] = useState('none')
    const [ cardDataFocus, setCardDataFocus ] = useState(null)

    return (
        <div className="app">
            <HeaderRow/>
            <div className="menu-and-editor">
                <SidebarMenu
                    menuItems={appConfigState.viewContexts}
                    setEditorViewState={setEditorViewState}
                />
                <EditorViewWrapper>
                    { loadView(editorViewState, setModal, setCardDataFocus as React.Dispatch<genericObjectIF | null>) }
                </EditorViewWrapper>
            </div>
            { modal !== 'none' ? <FormModal type={modal} setModal={setModal} cardDataFocus={cardDataFocus}/> : null}
        </div>
    )
}

export default App