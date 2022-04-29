import React from "react";
import HeaderHome from "./HeaderHome";
import './Index.css';
export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <div className="fcf-body">

                    <div id="fcf-form">
                        <h3 className="fcf-h3">Contact us</h3>

                        <form id="fcf-form-id">

                            <div className="fcf-form-group">
                                <label htmlFor="Name" className="fcf-label">Your name</label>
                                <div className="fcf-input-group">
                                    <input type="text" id="Name" name="Name" className="fcf-form-control" required />
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <label htmlFor="Email" className="fcf-label">Your email address</label>
                                <div className="fcf-input-group">
                                    <input type="email" id="Email" name="Email" className="fcf-form-control" required />
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <label htmlFor="Message" className="fcf-label">Your message</label>
                                <div className="fcf-input-group">
                                    <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000" required></textarea>
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <button type="submit" id="fcf-button" className="fcf-btn">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

