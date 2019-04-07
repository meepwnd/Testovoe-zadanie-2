import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import PrivateContainer from "../containers/PrivateContainer";
import NewsContainer from "../containers/NewsContainer";
import LoginContainer from "../containers/LoginContainer";
import ProfileContainer from "../containers/ProfileContainer";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/news" component={NewsContainer} />
        <Route path="/login" component={LoginContainer} />
        <PrivateContainer path="/profile" component={ProfileContainer} />
        <NotFoundPage />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
