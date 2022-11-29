import * as React from 'react'

interface mediaUploaderFormPropsIF {
  setModalView: React.Dispatch<string>
}

const MediaUploaderForm = (props: mediaUploaderFormPropsIF) => {

  const { setModalView } = props

  return (
    <div>
      <form></form>
    </div>
  )
}

export default MediaUploaderForm