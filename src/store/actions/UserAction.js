import {
    formatError, formatData, getUser, getUserRole, registerUser
} from '../../services/UserService';

import {
    CONFIRMED_GET_USERS,
    CONFIRMED_GET_USERROLES,
    CONFIRMED_REGISTER_USER,
    FAILED_REGISTER_USER,
    LOADING_TOGGLE_ACTION
} from './types/UserType';


export function confirmedGetUserAction(users) {
    return {
        type: CONFIRMED_GET_USERS,
        users,
    };
};

export function confirmedGetUserRoleAction(userroles) {
    return {
        type: CONFIRMED_GET_USERROLES,
        userroles,
    };
};

export function registerFailedAction(data) {
    return {
        type: FAILED_REGISTER_USER,
        payload: data,
    };
}

export function registerConfirmedAction(data) {
    return {
        type: CONFIRMED_REGISTER_USER,
        payload: data,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}

export function getUsersAction() {
    return (dispatch) => {
        getUser().then((response) => {
            let users = formatData(response.result.data);
            dispatch(confirmedGetUserAction(users));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getUserRolesAction() {
    return (dispatch) => {
        getUserRole().then((response) => {
            let userroles = formatData(response.result.data);
            dispatch(confirmedGetUserRoleAction(userroles));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function registerAction(postData, history) {
    console.error(postData);
    return (dispatch) => {
        registerUser(postData)
            .then((response) => {
                dispatch(registerConfirmedAction(response.data));
				history.push('/page-login');
                
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response.data);
                dispatch(registerFailedAction(errorMessage));
            });
    };
}