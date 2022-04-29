import React, { Component } from 'react';
import axios from 'axios';
class GetRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postList: [],
            errors: ""
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8585/students/findall")
            .then((response) => {
                this.setState({ postList: response.data });
                console.log("get response");

            })
            .catch((error) => {
                this.setState({ error: "check url properly" });
            })
    }

    render() {
        const { postList, error } = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>DateofBirth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postList.map((list, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{list.id}</td>
                                        <td>{list.firstName}</td>
                                        <td>{list.lastName}</td>
                                        <td>{list.birthDate}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


                {

                    error ? <div>{error}</div> : null
                }

            </div>
        );
    }
}

export default GetRequest;