import { loginApi } from "../../components/login/loginAPI"
import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS, loginErrorAction, loginSuccessAction } from "../actions/loginActions"

export const loginMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if (action.type === ACTION_LOGIN_ATTEMPTING) {
        loginApi.login(action.payload)
        .then(profile => {
            dispatch(loginSuccessAction(profile))

        })
        .catch(error => {
            dispatch(loginErrorAction(error))

        })
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
        //thumps up
    }

}