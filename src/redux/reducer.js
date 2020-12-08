const { GET_ALL_CLIENTS, GET_DENTIST, LOGOUT, GET_CLIENT } = require("./types");

const initialState = { clients: [], dentist: {}, client: {} };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };
        case GET_DENTIST:
            return {
                ...state,
                dentist: action.payload
            };
        case GET_CLIENT:
            return {
                ...state,
                client: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                dentist: action.payload
            };

        default:
            return state;
    }
}

export default reducer;