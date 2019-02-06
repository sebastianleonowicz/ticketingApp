import React from 'react';

const navigation = () => {
    return   <nav className="navigation">
                <ul>
                <li>
                    <div>
                        <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
                        </svg>
                        <span>
                            Home
                        </span>
                    </div>  
                </li>
                <li>
                    <div>
                        <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                        <title>pencil</title>
                        <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
                        </svg>                    
                        <span>
                        Create Ticket
                        </span>  
                    </div>
                </li>
                <li>
                    <div className="g-signin2" data-onsuccess="onSignIn">
                        <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                        <title>google</title>
                        <path d="M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z"></path>
                        </svg>
                        <span>
                        Sign In
                        </span>
                    </div>
                </li>
                <li>
                    <div onClick="signOut();">
                    <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                        <title>switch</title>
                        <path d="M20 4.581v4.249c1.131 0.494 2.172 1.2 3.071 2.099 1.889 1.889 2.929 4.4 2.929 7.071s-1.040 5.182-2.929 7.071c-1.889 1.889-4.4 2.929-7.071 2.929s-5.182-1.040-7.071-2.929c-1.889-1.889-2.929-4.4-2.929-7.071s1.040-5.182 2.929-7.071c0.899-0.899 1.94-1.606 3.071-2.099v-4.249c-5.783 1.721-10 7.077-10 13.419 0 7.732 6.268 14 14 14s14-6.268 14-14c0-6.342-4.217-11.698-10-13.419zM14 0h4v16h-4z"></path>
                    </svg>
                    <span>
                        Sign Out
                    </span>
                    </div>
                </li>
                </ul>
            </nav>
}

export default navigation;