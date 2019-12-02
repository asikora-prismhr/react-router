import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BlockingForm from "./BlockingForm";
import Breadcrumbs from "./Breadcrumbs";
import {
  LoginPage,
  AuthButton,
  PrivateRoute,
  PublicPage,
  PublicPageDetails,
  ProtectedPage
} from "./PrivateRoute";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Breadcrumbs />
      <AuthButton />
      <ul className="list">
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <ul className="list">
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/public/details">Public Page Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact children={<BlockingForm />} />
        <Route path="/public">
          <PublicPage />
        </Route>
        <Route path="/public/details">
          <PublicPageDetails />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/protected">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
