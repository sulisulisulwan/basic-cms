import * as React from 'react'
import { menuItemIF, sidebarMenuPropsIF } from '../../types'
import MenuItem from './MenuOption'

const SidebarMenu = (props: sidebarMenuPropsIF) => {

    const { menuItems, setEditorViewState } = props

    return (
        <ul className="sidebar-menu-ul">      
            {
                menuItems.map((menuItem: menuItemIF, idx: number) => {
                    return <MenuItem 
                        key={`menu-item-${idx}`}
                        menuItem={menuItem}
                        setEditorViewState={setEditorViewState}
                    />
                })
            }
        </ul>
    )


}

export default SidebarMenu