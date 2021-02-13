import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const intialState = {
    userId: null,
    tokenId: null,
    error: null,
    loading: false,
};

const authStart = (state) => {
    return updateObject(state, { loading: true });
};

const authSuccess = (state, action) => {
    console.log(action);
    return updateObject(state, {
        userId: action.userId,
        tokenId: action.idToken,
        error: null,
        loading: false,
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {
        userId: null,
        tokenId: null,
    });
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);

        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);

        case actionTypes.AUTH_FAILED:
            return authFail(state, action);

        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);

        default:
            return state;
    }
};

export default reducer;
