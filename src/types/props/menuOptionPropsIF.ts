import { Dispatch, SetStateAction } from "react"
import { menuItemIF } from ".."

export default interface menuOptionPropsIF {
    menuItem: menuItemIF
    setEditorViewState: Dispatch<SetStateAction<string>>
}