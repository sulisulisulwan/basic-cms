import * as React from 'react'

interface mediaUploaderViewPropsIF {
    setModal: React.Dispatch<string>
}

const MediaUploaderView = (props: mediaUploaderViewPropsIF) => {

    const { setModal } = props

    return (
        <div>Media Uploader View</div>
    )
}

export default MediaUploaderView