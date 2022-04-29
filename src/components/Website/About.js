import React from "react"
import './About.css';
import HeaderHome from "./HeaderHome";
class About extends React.Component {
    render() {
        return (
            <div className="boun">
                <HeaderHome />
                <div className="main">

                    <h1> Welcome All</h1>
                    <h3>Foody Company Highlights</h3>
                    <table border="5" className="center">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Foody</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Headquarters</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Sector</td>
                                <td>Food Delivery</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}
export default About;