import Constants from "expo-constants";
import firebase from "firebase/app";
import React from "react";
import { StyleSheet } from "react-native";
// Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers";
import AuthScreen from "./src/screens/Auth";

const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
