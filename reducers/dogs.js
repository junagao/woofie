let initialState = {
  dogs: []
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_DOGS':
    return {
      ...state,
      dogs: action.dogs,
    };
  default:
    return state;
  }
};

export default dogsReducer;
