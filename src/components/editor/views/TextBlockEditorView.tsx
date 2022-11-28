import * as React from 'react'

interface textBlockEditorViewPropsIF {
    setModal: React.Dispatch<string>
}

const TextBlockEditorView = (props: textBlockEditorViewPropsIF) => {

    const { setModal } = props

    return (
        <div>TextBlock Editor View</div>
    )
}

export default TextBlockEditorView