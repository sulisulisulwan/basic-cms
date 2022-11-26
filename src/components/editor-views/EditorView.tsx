import * as React from 'react'


const EditorView = (props: React.PropsWithChildren) => {


    return (
        <div className="editor-view-wrapper"> 
            <div>
                { props.children }
            </div>
        </div>
    )

}

export default EditorView