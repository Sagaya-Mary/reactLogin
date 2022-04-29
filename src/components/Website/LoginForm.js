import React, { Component } from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';
import { passwordValidator } from "./validator";
import Welcome from "./Welcome";
import RedirectMessage from './RedirectMessage';

class LoginForm extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "", password: "", errors: {}, redirect: false,
        }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    formValidation = () => {
        const { password } = this.state;
        let isValid = true;
        const errors = {};
        if (!passwordValidator(password)) {
            errors.useCorrectpass = "password must contain special character and length should be 8";
            isValid = false;
        }
        else {
            this.setState({ redirect: true })
        }
        this.setState({ errors });


        return isValid;

    }
    handleSubmitter = (e) => {

        e.preventDefault();
        const isValid = this.formValidation();

    }

    render() {

        const { errors } = this.state;
        return (

            <div className="login">

                <div className="form">
                    <form id="login" className="input-group" name="form" onSubmit={this.handleSubmitter}>
                        <div className="button-box">
                            <div id="btn" ></div>
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

                        <input type="text" className="input-field" placeholder="User Id" name="username" required onChange={this.handleChange} />

                        <input type="password" className="input-field" placeholder="Enter password" name="password" onChange={this.handleChange} />
                        <div className='form-group'>
                            <input type="checkbox" className="check-box" /><span className='login-span'>Remember password</span>
                        </div>

                        <Welcome name="Log in" />

                        <div>
                            <RedirectMessage redirect={this.state.redirect} />
                        </div>
                    </form>
                </div>

            </div>
        )

    }
}

export default LoginForm;