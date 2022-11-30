import React, { useState} from "react";
import { useNavigate } from 'react-router-dom'; 


export const Register = (props) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setname] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    history("/create")


    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setname(e.target.value)} type="name" id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                <button type="submit"> Log In </button>
            </form>
            <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
       
      
    )
        
}