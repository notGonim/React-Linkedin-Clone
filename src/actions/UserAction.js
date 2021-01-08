

export const LogInAction = ({ email, uid, displayName, photoURL }) => (dispatch) => {

    dispatch({
        type: "LOGIN",
        payload: {
            user: { email, uid, displayName, photoURL }
        }
    })


}

export const LogOutAction = () => (dispatch) => {

    dispatch({
        type: 'LOGOUT',
        payLoad: {
            user: null
        }
    })

}