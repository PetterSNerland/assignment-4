import AppContainer from '../../hoc/AppContainer'

import { Button } from "bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Login = () => {
    
    const dispatch = useDispatch ()
    const { loginError, loginAttempting } = useSelector()

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })

    }

    return (
        <AppContainer>
            <form className="mt-3">
            <h1>Login to Translate</h1>
            <p> You need to login!</p>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" type="text" placeholder="enter your username" className="form-controll"
                onChange={ onInputChange } />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">password</label>
                <input id="password" type="password" placeholder="enter your password" className="form-controll"
                onChange={ onInputChange } />
            </div>

            <Button type="submit" className="btn btn-primary btn-lg">Login</Button>

        </form>

        {loginAttempting &&
        <p>Trying to login...</p>
        }

        { loginError &&
            <div className="alert alert-danger" role="alert">
                <h4>Unsuccessful</h4>
                <p className="mb-0">{ loginError }</p>
            </div>
        }

        </AppContainer>
        
    )
}

export default Login