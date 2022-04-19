import React,{Component} from "react"
import Button from "./Login";
import './Welcome.css'


const LoginButton=(props)=>{

   return(  
   <div className="log-btn">
   <button type="button" className="toggle-btn">{props.name}</button>
   </div>)
}

        
class Welcome extends Component{

    render(){
        return(
            <div className="login">
                <div className="form">
                    <div className="button-box">
                    { <div id="btn"></div> }
                    {/* <button type="button" className="toggle-btn">Log in</button>
                    <button type="button" className="toggle-btn">Register</button> */}
                    <LoginButton name="login"/>
                     <LoginButton name="register"/>
                    
                    </div>

                    <form id="login" className="input-group" action="food.html" name="form" >

                     <input type="text" className="input-field" placeholder="User Id" name="username" required />
                     <input type="text" className="input-field" placeholder="Enter password" name="password" required />

                    <input type="checkbox" className="check-box" /><span>Remember password</span>
                    <button type="submit" id="submit-btn"> Log In </button>
                    </form>
                    <form id="register" className="input-group"  name="form1">

<input type="text" className="input-field" placeholder="User Id" name="username" required />
<input type="text" className="input-field" placeholder="Email Id" name="email" required />
<input type="text" className="input-field" placeholder="Enter password" name="password" required />

<input type="checkbox" className="check-box" /><span>I agree to terms & conditions</span>
<button type="submit" id="submit-btn"> Register </button>
</form>
                </div>
            </div>

        );
    }
   
}
export default Welcome;