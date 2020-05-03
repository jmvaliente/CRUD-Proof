import React from 'react'

const Login = () =>{
    return(
            <main className="form-login container">
                <form action="#">
                    <legend>Log In</legend>
                    <div className="field">
                        <input type="text" id="email"/>
                        <label>Email</label>
                    </div>
                    <div className="field">
                        <input type="password" id="password"/>
                        <label>Password</label>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>

            </main>
    )
}

export default Login