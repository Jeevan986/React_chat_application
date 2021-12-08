import { useState } from "react";
import axios from 'axios';
import { BorderTopOutlined } from "@ant-design/icons";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        const authObject = { 'Project-ID': "eac609c7-ac19-4e59-8df0-f9efad2c3c6e" , 'User-Name': username, 'User-Secret': password}

        try{
            axios.get('https://api.chatengine.io/chats', { headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }catch(error){
            setError('Incorrect username or password please try again')
        }
    }

    return(
        <div className = "wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}> 
                    <input type="text" value = {username} onChange = {(e) => setUsername(e.target.value)} className = "input" placeholder="Username" required/>
                    <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "input" placeholder="Password" required/>
                    <div align="center">
                        <button type ="submit" className = "button"> 
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>

    )
}

export default LoginForm;