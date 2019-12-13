const createCopyOfState = (state) => {
    return Object.assign({}, state);
}

export default (state = {}, action) => {
    console.log(action.type);
    console.log(state);

    switch(action.type) {
        case "SET_EMAIL":
            var thisState = createCopyOfState(state);
            thisState.email = action.payload;
            return thisState;
        case "SET_USERNAME":
            var thisState = createCopyOfState(state);
            thisState.username = action.payload;
            return thisState;
        case "SET_PASSWORD":
            var thisState = createCopyOfState(state);
            thisState.password = action.payload;
            return thisState;
        case "SET_IS_DM":
            var thisState = createCopyOfState(state);
            thisState.dm = action.payload;
            return thisState;
        default:
            return state;
            
    }
}