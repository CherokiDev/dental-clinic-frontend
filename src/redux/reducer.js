const { GET_ALL_CLIENTS } = require("./types");

const initialState = { clients: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };

        default:
            return state;
    }
}

export default reducer;