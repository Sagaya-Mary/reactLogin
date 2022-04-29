import React, { Component } from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';
import { emailValidator, passwordValidator } from "./validator";
import Welcome from "./Welcome";

class LoginForm extends Component {

    constructor(props) {

        super(props);

        this.state = { name: "", password: "", email: "", errors: {}, success: {} }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    formValidation = () => {
        const { password, email, success } = this.state;
        let isValid = true;
        const errors = {};

        if (!emailValidator(email)) {
            errors.useCorrectEmail = "type valid email";
            isValid = false;
        }

        if (!passwordValidator(password)) {
            errors.useCorrectPassword = "password must contain special character and length should be 8";
            isValid = false;
        }
        else {
            success.useSuccess = "successfully validated";
        }
        this.setState({ errors });


        this.setState({ success });
        return isValid;

    }
    handleSubmitter = (e) => {

        e.preventDefault();
        const isValid = this.formValidation();
    }

    render() {

        const { errors, success } = this.state;
        return (

            <div className="login">

                <div className="form">
                    <form id="register" className="input-group" name="form" onSubmit={this.handleSubmitter}>
                        <div className="button-box">
                            <div id="btn2" ></div>
                            <Link to='/'>
                                <button type="button" className="toggle-btn" >Log in</button>
                            </Link>
                            <Link to='/register'>
                                <button type="button" className="toggle-btn"  >Register</button>
                            </Link>
                        </div>
                        {Object.keys(errors).map((key) => {

                            return <div key={key}>{errors[key]}</div>
                        })}
                        {Object.keys(success).map((key) => {

                            return <div key={key}>{success[key]}</div>
                        })}

                        <input type="text" className="input-field" placeholder="User Id" name="username" required onChange={this.handleChange} />

                        <input type="text" className="input-field" placeholder="Email Id" name="email" onChange={this.handleChange} />
                        <input type="password" className="input-field" placeholder="Enter password" name="password" onChange={this.handleChange} />
                        <div className='form-group'>
                            <input type="checkbox" className="check-box1" /><span className='register-span'>I agree Terms and Conditions</span>
                        </div>

                        <Welcome name="Register" />

                    </form>
                </div>

            </div>
        )

    }
}

export default LoginForm;