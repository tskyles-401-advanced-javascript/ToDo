import React, { useState } from "react";
import cookie from "react-cookies";

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const qs = new URLSearchParams(window.location.search);
  const cookieToken = cookie.load("auth");
  const token = qs.get("token") || cookieToken || null;

  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [itemsDisplayed, setItemsDisplayed] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentDisplayed, setCurrentDisplayed] = useState();
  const [userToken, setUserToken] = useState(token);
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const state = {
    displayCompleted,
    setDisplayCompleted,
    itemsDisplayed,
    setItemsDisplayed,
    pageNumber,
    setPageNumber,
    currentDisplayed,
    setCurrentDisplayed,
    userToken,
    setUserToken,
    login,
    setLogin,
    logout,
    setLogout,
    username,
    setUsername,
    password,
    setPassword
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
