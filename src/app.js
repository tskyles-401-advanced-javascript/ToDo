import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
// State Only
import ToDo from "./components/todo/todo.js";
import SettingsContext from "./context/settings";

// API Connected (Live Data)

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsContext>
          <Header />
          <ToDo />
          <Footer />
        </SettingsContext>
      </>
    );
  }
}
