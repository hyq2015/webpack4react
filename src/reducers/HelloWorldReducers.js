const initialState = {
    name: "Mary",
    sex: "femail"
};
export default function helloWorldReducer(state = initialState, action) {
    switch(action.type) {
        case "HELLO_WORLD":
            return Object.assign({}, state, {
                name: action.payload.name
            });
        default:
            return state;
    }
}
