import React from "react"
import genericObjectIF from "../genericObjectIF"
export default interface newsItemCardPropsIF {
  data: {
      title: string
      body: string
      date: Date
  }
  mapIdx: number
  draftStatus: string
  setCardDataFocus: React.Dispatch<genericObjectIF | null>
}
