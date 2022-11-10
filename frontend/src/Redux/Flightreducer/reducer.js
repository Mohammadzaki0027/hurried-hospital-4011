import {
  GET_FLIGHT_FAILURE,
  GET_FLIGHT_REQUEST,
  GET_FLIGHT_SUCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  flight: [],
};




export const Flightreducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FLIGHT_REQUEST:
      return { ...state, isLoading: true };
    case GET_FLIGHT_SUCESS:
        console.log(payload);
      return { ...state, flight: payload, isLoading: false, isError: false };
    case GET_FLIGHT_FAILURE:
      return { ...state, isError: true };
    default: {
      return state;
    }
  }
};
