import { Dispatch, SetStateAction } from 'react'
import { menuItemIF } from '../'

export default interface sidebarMenuPropsIF {
    menuItems: menuItemIF[]
    updateEditorViewState: Dispatch<SetStateAction<string>>
}