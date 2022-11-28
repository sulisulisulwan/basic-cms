import * as React from 'react'
import { menuOptionPropsIF } from '../../types'


const MenuOption = (props: menuOptionPropsIF) => {

    const { menuItem, setEditorViewState } = props
    const { menuName, menuIconImg, name } = menuItem
    
    return (
        <li className="menu-option" onClick={() => setEditorViewState(name)}>
            <img className="menu-option-img" src={menuIconImg} alt={`${menuName} icon`}></img>
            <span className="menu-option-name">{menuName}</span>
        </li>
    )
}

export default MenuOption