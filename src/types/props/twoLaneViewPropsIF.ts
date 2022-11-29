import React from "react"
import genericObjectIF from "../genericObjectIF"

export default interface twoLaneViewPropsIF {
    viewContext: string | null
    fetchedData: any[]
    setCardDataFocus: React.Dispatch<genericObjectIF | null>
}