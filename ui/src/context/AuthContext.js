import React from "react";
import SInfo from "react-native-sensitive-info";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNUP":
      return { errorMessage: "", token: action.payload };
    // case "SIGNIN":
    // case "SIGNOUT":
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await SInfo.setItem("token", response.data.token);
      dispatch({ type: "SIGNUP", payload: response.data.token });
    } catch (err) {
      dispatch({ type: "ERROR", payload: "Something went wrong with sign up" });
    }
  };

const signin = (dispatch) => {
  return (email, password) => {
    dispatch({ type: "SIGNIN" });
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: "SIGNOUT" });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
