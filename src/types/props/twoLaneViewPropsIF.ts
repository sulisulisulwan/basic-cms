import React from "react"

interface genericObjectIF {
    [key: string]: any
}
export default interface twoLaneViewPropsIF {
    viewContext: string | null
    fetchedData: any[]
    setCardDataFocus: React.Dispatch<genericObjectIF | null>
}