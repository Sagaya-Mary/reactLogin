import React from "react";
import './Index.css';
function contact(){
    return (
      <div>
         <div class="fcf-body">

<div id="fcf-form">
<h3 class="fcf-h3">Contact us</h3>

<form id="fcf-form-id">
    
    <div class="fcf-form-group">
        <label for="Name" class="fcf-label">Your name</label>
        <div class="fcf-input-group">
            <input type="text" id="Name" name="Name" className="fcf-form-control" required/>
        </div>
    </div>

    <div class="fcf-form-group">
        <label for="Email" class="fcf-label">Your email address</label>
        <div class="fcf-input-group">
            <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
        </div>
    </div>

    <div class="fcf-form-group">
        <label for="Message" class="fcf-label">Your message</label>
        <div class="fcf-input-group">
            <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
        </div>
    </div>

    <div class="fcf-form-group">
        <button type="submit" id="fcf-button" class="fcf-btn">Send Message</button>
    </div>

</form>
</div>
</div>  
      </div>  
    )
}
export default contact;