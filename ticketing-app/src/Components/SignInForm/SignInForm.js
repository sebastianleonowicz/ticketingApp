import React from 'react';
       
const signIn = (props) => {
    return  <div className='formContainer'>
                <p>Sign In Form</p>
                <form className='form' action="/action_page.php">
                    Email <input onChange={props.updateSignInUser} type="text" name="email"/>
                    Password <input onChange={props.updateSignInPassword} type="text" name="password"/>
                </form>
                <button onClick={props.signInUser}>Sign In</button>
                <button onClick={props.checkCurrentUser}>Check</button>
            </div>  
}

export default signIn;