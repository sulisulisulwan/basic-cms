import * as React from 'react'
import { menuOptionPropsIF } from '../../types'


const MenuOption = (props: menuOptionPropsIF) => {

    const { menuItem, updateEditorViewState } = props
    const { menuName, menuIconImg, name } = menuItem
    
    return (
        <li className="menu-option" onClick={() => updateEditorViewState(name)}>
            <span className="menu-option-name">{menuName}</span>
            <img className="menu-option-img" src={menuIconImg} alt={`${menuName} icon`}></img>
        </li>
    )
}

export default MenuOption