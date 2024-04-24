import React, { useState } from 'react'

function SignIn() {


  //states
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <>
        <section id="sign_up" className="sign_up">
            <div className="container">
                <h2 className="heading heading_medium">Welcome back</h2>

                <form className='signin_form'>
                    <input type="email" placeholder='email' value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder='password' value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn_primary">Sign in</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default SignIn