import React, { useState } from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom';
import Welcome from './Welcome';
import { passwordValidator, emailValidator } from './validator';



function Registerform() {


    const [input, setInput] = useState({ username: "", email: "", password: "" });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');

    const handleChange = (e) => {

        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handlesubmitter = (e) => {
        e.preventDefault();
        setsuccessMessage('');
        setErrorMessage('');
        if (!emailValidator(input.email)) {
            return setErrorMessage("please type valid email");
        }
        if (!passwordValidator(input.password)) {
            return setErrorMessage("password must contain one special character,Capital letter and length should be more than 8");
        }

        else {
            setsuccessMessage('Successfully Registered');


        }


    };

    return (
        <div className="login">
            <div className='form'>
                <form id="register" className="input-group" name="form" onSubmit={handlesubmitter}>
                    <div className="button-box">
                        <div id="btn2" ></div>
                        <Link to='/login'>
                            <button type="button" className="toggle-btn" >Log in</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" className="toggle-btn" >Register</button>
                        </Link></div>
                    <div className='form-group'>
                    {errorMessage.length > 0 && <div style={{ marginLeft:'45px',marginTop: '4px', marginBottom: '1px', color: 'red', fontSize: '10px',textAlign:"left"}}>{errorMessage}</div>}
                        {successMessage.length > 0 && (
                            <div style={{ marginBottom: '10px', color: 'green', fontSize: '12px' }}>{successMessage}</div>
                        )}
                        <input type="text" className="input-field" placeholder="User Id" name="username" onChange={handleChange} />
                    </div> <div className='form-group'>

                        <input type="text" className="input-field" placeholder="Email Id" name="email" onChange={handleChange} />
                    </div>   <div className='form-group'>
                        <input type="password" className="input-field" placeholder="Enter password" name="password" onChange={handleChange} />
                    </div> <div className='form-group'>
                        <input type="checkbox" className="check-box" required /><span>I agree to terms & conditions</span>
                    </div>

                    <Welcome name="register" />



                </form>

            </div>


        </div>

    )
}

export default Registerform;