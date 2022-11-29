import * as React from 'react'

interface textBlockFormPropsIF {
  setModalView: React.Dispatch<string>
}

const TextBlockForm = (props: textBlockFormPropsIF) => {

  const { setModalView } = props

  return (
    <div>
      <form></form>
    </div>
  )
}

export default TextBlockForm