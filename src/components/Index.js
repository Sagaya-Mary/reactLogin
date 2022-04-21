import React from "react";
import './Index.css'
function greet() {
    return (
        <div>
            <div class="topnav">
                <a href="/login">Home</a>
                <a href="/detail">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div class="index">

                <div class="welcome">
                    <h1 style={{ fontSize: '60px', color: "rgb(106, 90, 205)" }}>Welcome to Foody App</h1>
                </div>

            </div>
        </div>
    );
}

export default greet;