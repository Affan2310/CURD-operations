import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    history("/Register")
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label form="email">Email address</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label for="password">password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="***" id="password" name="password" />
                <button type="submit"> Log In </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
    
        
}
