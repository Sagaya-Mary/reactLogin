import React, { Component} from 'react';
import axios from 'axios';

class PostRequest extends Component {
    
     constructor(props) {
        super(props);

        this.state = {

            firstName: '',
            lastName: '',
            birthDate: '',
           
        }
      
    }

    changeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        
        axios.post("http://localhost:8585/students/add", this.state)
            .then(response => console.log(response))
        
        
          
    }
   
   
    
    render() {
        const { firstName, lastName, birthDate } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div>
                        <input type='text' placeholder='FirstName' name="firstName" value={firstName} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' placeholder='LastName' name="lastName" value={lastName} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' placeholder='DOB' name="birthDate" value={birthDate} onChange={this.changeHandler} />
                    </div>
                   
        <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default PostRequest;
