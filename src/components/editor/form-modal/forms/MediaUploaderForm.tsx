import * as React from 'react'

interface mediaUploaderFormPropsIF {
  setModal: React.Dispatch<string>
}

const MediaUploaderForm = (props: mediaUploaderFormPropsIF) => {

  const { setModal } = props

  return (
    <div>
      <form></form>
    </div>
  )
}

export default MediaUploaderForm