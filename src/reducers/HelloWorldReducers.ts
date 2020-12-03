const initialState = {
    name: 'Mary',
    sex: 'female'
};
export default function helloWorldReducer(state = initialState, action: any) {
    switch(action.type) {
        case 'HELLO_WORLD':
            return Object.assign({}, state, {
                name: action.payload.name
            });
        case 'HELLO_WORLD1':
            return Object.assign({}, state, {
                name: action.payload.name
            });
        default:
            return state;
    }
}
