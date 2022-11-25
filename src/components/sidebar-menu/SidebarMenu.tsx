import * as React from 'react'
import { menuItemIF, sidebarMenuPropsIF } from '../../types'
import MenuItem from './MenuOption'

const SidebarMenu = (props: sidebarMenuPropsIF) => {

    const { menuItems, updateEditorViewState } = props

    return (
        <ul className="sidebar-menu">      
            {
                menuItems.map((menuItem: menuItemIF, idx: number) => {
                    return <MenuItem 
                        key={`menu-item-${idx}`}
                        menuItem={menuItem}
                        updateEditorViewState={updateEditorViewState}
                    />
                })
            }
        </ul>
    )


}

export default SidebarMenu