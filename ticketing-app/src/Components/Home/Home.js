import React from 'react';

const home = (props) => {
return <div className='homeComponent'>
            <h3 className='homeHeader'>
                Welcome to the ticketing app
            </h3>
            <p className='homeParagraph'>
                Create a ticket or delete one
            </p>
            <p className='homeParagraph'>
                Organize your work
            </p>
            <button onClick={props.clickSignIn} className='homeParagraph'>
                Sign In 
            </button>
            <button className='homeParagraph'>
                Log in to existing account
            </button>

        </div>
}

export default home;