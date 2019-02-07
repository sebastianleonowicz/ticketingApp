import React from 'react';
       
const signIn = (props) => {
    return  <div className='formContainer'>
                <p>Sign In Form</p>
                <form className='form' action="/action_page.php">
                    Email <input type="text" name="email"/>
                    Password <input type="text" name="password"/>
                </form>
                <button>Sign In</button>
            </div>  
}

export default signIn;