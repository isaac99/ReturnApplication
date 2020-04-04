export const openLoginForm = (isLoginFormToggled) => {
    return {
     type: 'LOGIN_MODAL_ACTION',
     payload: isLoginFormToggled
    }
}