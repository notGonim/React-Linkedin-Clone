import React, { useState } from 'react'
import './login.css'

export const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = () => {

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
                    placeholder="Required to register" />
                <input type="text" placeholder="Profile URL" />
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
