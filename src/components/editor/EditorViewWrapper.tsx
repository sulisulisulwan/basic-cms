import * as React from 'react'


const EditorViewWrapper = (props: React.PropsWithChildren) => {


    return (
        <div className="editor-view-wrapper"> 
            <div>
                { props.children }
            </div>
        </div>
    )

}

export default EditorViewWrapper