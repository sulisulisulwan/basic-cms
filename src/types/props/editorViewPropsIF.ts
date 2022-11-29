import React from "react"
import { genericObjectIF } from "../"

export default interface editorViewPropsIF {
    viewContext: string | null
    setModalView: React.Dispatch<string>
    setCardDataFocus: React.Dispatch<genericObjectIF | null>
}