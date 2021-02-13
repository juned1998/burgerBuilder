import * as actionTypes from "./actionsTypes";
import axios from "axios";
import { GoogleAPIsignUpKey, GoogleAPIsignInKey } from "../../../config";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (userId, token) => {
    console.log(userId);
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error,
    };
};

export const logOut = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignUp) => {
    return (dispatch) => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        };

        let url = GoogleAPIsignUpKey;

        if (!isSignUp) {
            url = GoogleAPIsignInKey;
        }

        axios
            .post(url, authData)
            .then((response) => {
                console.log(response);
                dispatch(
                    authSuccess(response.data.localId, response.data.idToken)
                );
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch((err) => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    };
};
