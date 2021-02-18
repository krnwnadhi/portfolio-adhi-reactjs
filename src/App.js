import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/";
import Skills from "./components/Skills";
import ExpEdu from "./components/ExperienceEducation";
import Portfolio from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/experience" component={ExpEdu} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default App;