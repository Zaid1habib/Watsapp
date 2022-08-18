export const ShowModal= (boolean) => {
    return (dispatch) => {
        dispatch({
            type:"ShowModal",
            payload:boolean
        })
    }

}

export const Search = (Text) => {
    return (dispatch) => {
        dispatch({
            type:'Search', 
            payload:Text,
        })
    }
}