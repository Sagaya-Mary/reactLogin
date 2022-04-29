import React from "react";
import HeaderHome from "./HeaderHome";
import './Index.css'
class Greet extends React.Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <div className="topnav">

                    <h1>Welcome to Home Page</h1>
                </div>

            </div>
        );
    }
}
export default Greet;