import * as React from 'react'
import EditorView from './components/editor-views/EditorView'
import SidebarMenu from './components/sidebar-menu/SidebarMenu'
import EventsEditorView from './components/editor-views/EventsEditorView'
import MediaUploaderView from './components/editor-views/MediaUploaderView'
import NewsEditorView from './components/editor-views/NewsEditorView'
import TextBlockEditorView from './components/editor-views/TextBlockEditorView'
import { contentEditorComponentConfigIF } from './types'
import DefaultEditorView from './components/editor-views/DefaultEditorView'
import HeaderRow from './components/HeaderRow'


const { useState } = React

interface mockStateIF {
    viewContexts: contentEditorComponentConfigIF[]
}

const mockState: mockStateIF = {
    viewContexts: [
        { 
            name: 'newsEditor',
            menuName: 'News Editor',
            menuIconImg: './news-editor-icon.png'
        },
        {
            name: 'eventsEditor',
            menuName: 'Events Editor',
            menuIconImg: './events-editor-icon.png'
        },
        {   
            name: 'mediaUploader', 
            menuName: 'Media Uploader',
            menuIconImg: './media-uploader-icon.png'
        },
        {
            name: 'textBlockEditor',
            menuName: 'Text Block Editor',
            menuIconImg: './text-block-editor.png'
        }
    ]
}

const loadView = (viewContext: string) => {

    const viewMap = new Map([
        ['default', <DefaultEditorView/>],
        ['newsEditor', <NewsEditorView viewContext={viewContext}/>],
        ['eventsEditor', <EventsEditorView viewContext={viewContext}/>],
        ['mediaUploader', <MediaUploaderView/>],
        ['textBlockEditor', <TextBlockEditorView/>]
    ])

    return viewMap.get(viewContext)
}



const App = () => {

    const [ appConfigState, updateAppConfigState ] = useState(mockState)
    const [ editorViewState, updateEditorViewState ] = useState('default')

    return (
        <div className="app">
            <HeaderRow/>
            <div className="menu-and-editor">
                <SidebarMenu
                    menuItems={appConfigState.viewContexts}
                    updateEditorViewState={updateEditorViewState}
                />
                <EditorView>
                    { loadView(editorViewState) }
                </EditorView>
            </div>
        </div>
    )
}

export default App