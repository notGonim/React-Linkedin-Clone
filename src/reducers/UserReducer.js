const intialState = {
    user: null,
}


const UserReducer = (state = intialState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return {
                ...state,
                user: action.payLoad.user
            };
        case "LOGIN":
            return {
                ...state
            }
        default:
            return { ...state };
    }
}