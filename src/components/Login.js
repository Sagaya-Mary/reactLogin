import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { passwordValidator } from "./validator";
import Welcome from "./Welcome";
import './Welcome.css'

function Loginform() {

    const [input, setInput] = useState({ name: "", password: "" });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');
    let navigate = useNavigate();
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handlesubmitter = (e) => {
        e.preventDefault();
        setsuccessMessage('');
        if (!passwordValidator(input.password)) {
            return setErrorMessage("password must contain one special character,Capital letter and length should be more than 8");
        } else {
            setsuccessMessage('Successfully Validated');
            navigate('/home');
        }


    };
    return (
        <div className="login">

            <div className="form">
                <form id="login" className="input-group" name="form" onSubmit={handlesubmitter}>
                    <div className="button-box">
                        <div id="btn" ></div>
                        <Link to='/login'>
                            <button type="button" className="toggle-btn" >Log in</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" className="toggle-btn"  >Register</button>
                        </Link>
                    </div>
                    {successMessage.length > 0 && (
                        <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
                    )}
                    {errorMessage.length > 0 && <div style={{ marginLeft:'45px',marginTop: '4px', marginBottom: '1px', color: 'red', fontSize: '10px',textAlign:"left"}}>{errorMessage}</div>}
                    <input type="text" className="input-field" placeholder="User Id" name="username" onChange={handleChange} />
                    
                    <input type="password" className="input-field" placeholder="Enter password" name="password" onChange={handleChange} />
                    <div className='form-group'>
                        <input type="checkbox" className="check-box" /><span>Remember password</span>
                    </div>

                    <Welcome name="Log in" />

                </form>
            </div>

        </div>
    )
}

export default Loginform;