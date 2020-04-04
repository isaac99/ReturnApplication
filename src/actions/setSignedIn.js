export const setSignedIn = (isSignedIn) => {
    return {
     type: 'SIGNED_IN_ACTION',
     payload: isSignedIn
    }
}