export default (state = false, action) => {
    switch (action.type) {
     case 'SIGNED_IN_ACTION':
      return action.payload;
     default:
      return state;
    }
  }