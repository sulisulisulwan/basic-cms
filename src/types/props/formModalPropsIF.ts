import React from "react"
import { genericObjectIF } from "../"

export default interface formModalPropsIF {
  type: string
  cardDataFocus: genericObjectIF | null
  setModalView: React.Dispatch<string | null>
  setCardDataFocus: React.Dispatch<genericObjectIF | null>
}
