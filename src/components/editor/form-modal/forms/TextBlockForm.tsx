import * as React from 'react'

interface textBlockFormPropsIF {
  setModal: React.Dispatch<string>
}

const TextBlockForm = (props: textBlockFormPropsIF) => {

  const { setModal } = props

  return (
    <div>
      <form></form>
    </div>
  )
}

export default TextBlockForm