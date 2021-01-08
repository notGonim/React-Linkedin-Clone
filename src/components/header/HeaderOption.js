import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';


export const HeaderOption = ({ avatar, Icon, title, onClick }) => {

    const { user } = useSelector(state => state.user)


    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon" src={user?.photoURL} >{user?.email[0]}</Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}
