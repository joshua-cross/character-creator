import dnd from '../apis/dnd';

export const registerEmail = (email) => {
    console.log("email is: " + email)
    return {
        type: "SET_EMAIL",
        payload: email
    }
}

export const registerUsername = (username) => {
    return {
        type: "SET_USERNAME",
        payload: username
    }
}

export const registerPassword = (password) => {
    return {
        type: "SET_PASSWORD",
        payload: password
    }
}

export const registerIsDm = (dm) => {
    return {
        type: "SET_IS_DM",
        payload: dm
    }
}

export const setErrors = (errors) => {
    return {
        type: "SET_ERRORS",
        payload: errors
    }
}

export const removeError = (i) => {
    return {
        type: "REMOVE_ERROR",
        payload: i
    }
}