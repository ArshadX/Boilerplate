import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './userTypes';

const initialState = {
  isloading: false,
  isSocialLogin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isloading: false,
        email: action?.payload?.email,
        password: action?.payload?.password,
      };
    case FETCH_USERS_FAILURE:
      return {
        isloading: false,
        error: 'User does not exist',
      };
    default:
      return state;
  }
};
export default reducer;
