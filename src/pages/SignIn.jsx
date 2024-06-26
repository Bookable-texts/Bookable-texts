import React, { useState } from 'react'
import '../styles/Signin.css'
import { Link } from 'react-router-dom'

function SignIn() {


  //states
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <>
        <section id="sign_up" className="sign_up padding_xxxl">
            <div className="container text_centered">
                <h2 className="heading heading_medium">Welcome back</h2>

                <form className='signin_form width_80_centered'>
                    <input type="email" className='width_80_centered' placeholder='email' value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" className='width_80_centered' placeholder='password' value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn_primary btn_medium">Sign in</button>
                    <br /><br />
                    <span className="text_primary text_start margin_top_medium">
                  <Link className="" to={'/register'}>Don't have an account yet? Register now.</Link>
                </span>
                </form>

                
            </div>
        </section>
    </>
  )
}

export default SignIn