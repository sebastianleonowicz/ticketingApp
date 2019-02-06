import React from 'react';

const form = () => {
    return  <div>
                <form action="/action_page.php">
                    <input type="text" name="fname"/>
                    <input type="text" name="lname"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>  
}

export default form;