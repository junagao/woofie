let initialState = [];

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_DOGS':
    return [
      ...action.dogs,
    ];
  default:
    return state;
  }
};

export default dogsReducer;
