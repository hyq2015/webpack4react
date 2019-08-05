export function testAction1(para) {
    console.log(para);
    return (dispatch, state) => {
        // console.log(state().hello);
        dispatch({
            type: "HELLO_WORLD",
            payload: {
                name: para
            }
        })
    }
}
