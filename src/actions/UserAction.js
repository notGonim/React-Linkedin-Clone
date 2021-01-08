

export const LogInAction = ({ email, uid, displayName, photoURL }) => (dispatch) => {

    dispatch({
        type: "LOGIN",
        payLoad: {
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