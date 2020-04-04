export default (state = false, action) => {
    switch (action.type) {
     case 'LOGIN_MODAL_ACTION':
      return action.payload;
     default:
      return state;
    }
  }