export default (state = [], action) => {
    switch(action.type) {
        case "SET_ERRORS":
            return action.payload;
        case "REMOVE_ERROR":
            var stateCopy = state.slice(0);
            stateCopy.splice(action.payload, 1);
            return stateCopy
        default:
            return state;
    }
}