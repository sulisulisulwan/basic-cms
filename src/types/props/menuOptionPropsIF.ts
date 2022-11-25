import { Dispatch, SetStateAction } from "react"
import { menuItemIF } from ".."

export default interface menuOptionPropsIF {
    menuItem: menuItemIF
    updateEditorViewState: Dispatch<SetStateAction<string>>
}