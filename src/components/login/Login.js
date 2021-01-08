import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LogInAction } from '../../actions/UserAction'
import { auth } from '../firebase'
import './login.css'

export const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const register = () => {

        if (!name) {
            return alert('Please enter your name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                }).then(() => {
                    dispatch(LogInAction({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })
            }).catch(err => {
                alert(err.message)
            })
    }
    const loginToApp = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2025/05/linkedin-for-business-9-620x151.png"
                alt="linkedin" srcset="" />
            <form >
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                    placeholder="Name Is Required to register" />
                <input type="text" placeholder="Profile URL"
                    value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                <input type="email" placeholder="Email"
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member ?
                <span className="login_register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}
