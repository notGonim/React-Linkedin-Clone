

export const LogInAction = () => (dispatch) => {



}

export const LogOutAction = () => (dispatch) => {

    dispatch({
        type: 'LOGOUT',
        payLoad: {
            user: null
        }
    })

}