import * as React from 'react'

interface genericObjectIF {
  [key:string]: any
}
interface newsFromPropsIF {
  setModal: React.Dispatch<string>
  cardDataFocus: genericObjectIF | null
}

const NewsForm = (props: newsFromPropsIF) => {

  const { setModal, cardDataFocus } = props

  return (
    <div>
      <form></form>
    </div>
  )
}

export default NewsForm