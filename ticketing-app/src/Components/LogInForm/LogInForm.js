import React from 'react'

const logInForm = (props) => {
    return  <div>
                <p>this is the log in form</p>
                <form className='form' action="/action_page.php">
                    Email <input onChange={props.updateSignInUser} type="text" name="email"/>
                    Password <input onChange={props.updateSignInPassword} type="text" name="password"/>
                </form>
                <button onClick={props.logInUser}>Sign In</button>
                <button onClick={props.checkCurrentUser}>Check</button>
            </div>
}

export default logInForm