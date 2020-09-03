const petsReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_PETS':
          return action.payload;
          //must unset to pretect data. Anytime you set, you must unset
          //would be dispatch when you click logout
        case 'UNSET_PETS':
          return [];
        default:
          return state;
      }
}

export default petsReducer;