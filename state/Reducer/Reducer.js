

const reducer = (state = [false , 0], action) => {
    if (action.type === "ShowModal") {
        return state = action.payload
    }
     else {
        return state
    }
}

export default reducer

