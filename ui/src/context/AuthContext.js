import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_IN":
      return { errorMessage: "", token: action.payload };
    case "SIGN_OUT":
      return { ...state, token: null };

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_IN", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.message,
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_IN", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.message,
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: "SIGN_OUT" });
  };
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGNIN", payload: token });
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, tryLocalSignin },
  { token: null, errorMessage: "" }
);
