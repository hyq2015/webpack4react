export function changeName(para: string) {
    return (dispatch: any, state: any) => {
        // console.log(state().hello);
        dispatch({
            type: 'HELLO_WORLD',
            payload: {
                name: para
            }
        })
    }
}
