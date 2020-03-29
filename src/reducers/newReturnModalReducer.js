export default (state = false, action) => {
    switch (action.type) {
     case 'NEW_RETURN_MODAL_ACTION':
      return action.payload
     default:
      return state;
    }
  }