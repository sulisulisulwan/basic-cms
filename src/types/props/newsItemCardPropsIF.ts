import React from "react"

interface genericObjectIF {
  [key: string]: any
}
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
