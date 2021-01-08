import React from 'react'
import './sidebar.css'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';


export const Sidebar = () => {

    const { user } = useSelector(state => state.user)

    const recentItem = topic => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    console.log(user.photoURL)

    return (

        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQHWPd86umKAew/profile-displaybackgroundimage-shrink_200_800/0/1604838172903?e=1615420800&v=beta&t=-72yuvdX3Wm3JZgSqE9ilJ8mMPeoqkAD34QX3J1RnDc" alt="bg-img" />
                <Avatar className="sidebar_avatar" src={user.photoURL} >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>Passionate software engineer specifying in web </h4>
            </div>

            <div className="sidebar_status">
                <div className="sidebar_start">
                    <p>Who Viewed You</p>
                    <p className="sidebar_startNumber">
                        2.568
            </p>
                </div>
                <div className="sidebar_start">
                    <p>Views on posts</p>
                    <p className="sidebar_startNumber">
                        7.895
            </p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('Programming')}
                {recentItem("reactJS")}
                {recentItem("SoftwareEngineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>


    );



}

