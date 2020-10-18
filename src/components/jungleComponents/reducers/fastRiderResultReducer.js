import { Types } from "../actions/FastRiderActions";
import { updateObject } from "../../store/utility";

const initialState = {
  item: [],
  loading: true,
  success: false,
  error: null,
};
const submitRideRequest = (state, action) => {
  return updateObject(state, {
    loading: true,
    success: false,
    error: null,
  });
};

const submitRideSuccess = (state, action) => {
  return updateObject(state, {
    item: action.payload.item,
    loading: false,
    success: true,
    error: null,
  });
};

const submitRideFailure = (state, action) => {
  return updateObject(state, {
    error: action.payload.error,
    loading: false,
  });
};
const setErrorMessage = (state, action) => {
  return updateObject(state, {
    error: action.payload.error,
    loading: false,
  });
};
const changeSuccess = (state, action) => {
  return updateObject(state, {
    success: false,
    // loading: true,
  });
};

export default function fastRiderResultReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SUBMIT_RIDE_REQUEST:
      return submitRideRequest(state, action);
    case Types.SUBMIT_RIDE_SUCCESS:
      return submitRideSuccess(state, action);
    case Types.SUBMIT_RIDE_FAILURE:
      return submitRideFailure(state, action);
    case Types.SET_ERROR_MESSAGE:
      return setErrorMessage(state, action);
    case Types.CHANGE_SUCCESS_ON_REDIRECT:
      return changeSuccess(state, action);
    default:
      return state;
  }
}
