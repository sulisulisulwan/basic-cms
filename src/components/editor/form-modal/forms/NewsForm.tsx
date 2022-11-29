import * as React from 'react'
import { genericObjectIF } from '../../../../types'

interface newsFromPropsIF {
  setModalView: React.Dispatch<string>
  setCardDataFocus: React.Dispatch<genericObjectIF | null>
  cardDataFocus: genericObjectIF | null
}

const NewsForm = (props: newsFromPropsIF) => {

  const { setModalView, cardDataFocus } = props

  return (
    <div>
      <form></form>
    </div>
  )
}

export default NewsForm