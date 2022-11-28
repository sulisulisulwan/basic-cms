import React from "react"

interface genericObjectIF {
    [key: string]: any
}
export default interface editorViewPropsIF {
    viewContext: string | null
    setModal: React.Dispatch<string>
    setCardDataFocus: React.Dispatch<genericObjectIF | null>
}