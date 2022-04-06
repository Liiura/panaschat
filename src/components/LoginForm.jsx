import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const authObject = { 'Project-ID': '448be1fb-7583-447a-a194-cfbe97cd93e1', 'User-Name': userName, 'User-Secret': password }
        try{
            await axios.get('https://api.chatengine.io/chats',{ headers:authObject })
            localStorage.setItem('username',userName)
            localStorage.setItem('password',password)
            window.location.reload()
        }catch(error){
            setError('Oops, incorrect credentials')
            toast.error('Oops, incorrect credentials')
        }
        //username | password => chatEngine -> gime messages
        // works out -> loggend in
        // error -> try with new username...
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Panas chat</h1>
                <form onSubmit={handleSubmit}>
                    <input  type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default LoginForm
