import * as React from 'react'


const EditorView = (props: React.PropsWithChildren) => {


    return (
        <div className="editor-view-wrapper">
            Editor View.  This layer can be styled.
            <div>
                { props.children }
            </div>
        </div>
    )

}

export default EditorView