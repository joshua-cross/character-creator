export default (state = {}, action) => {
    switch(action.type) {
        case "PASSWORD_SAFE":
            return action.payload;
        default:
            return state;
    }
}