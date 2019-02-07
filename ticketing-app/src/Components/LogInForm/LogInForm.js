import React from 'react'

const logInForm = (props) => {
    return  <div>
                <form className='form' action="/action_page.php">
                    Email <input onChange={props.updateSignInUser} type="text" name="email"/>
                    Password <input onChange={props.updateSignInPassword} type="text" name="password"/>
                </form>
                <button onClick={props.signInUser}>Sign In</button>
                <button onClick={props.checkCurrentUser}>Check</button>
            </div>
}

export default logInForm