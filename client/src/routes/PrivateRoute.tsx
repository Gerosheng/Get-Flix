import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/authContext";

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in</p>;
  }

  return (
  <p>
    Welcome {auth.user.firstname}!{" "}
    <button
      onClick={() => {
        auth.logout(() => navigate("/"));
      }}
    >
      Sign out
    </button>
  </p>)
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.login(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }
  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}



/**
import React, { FC } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

interface PrivateRouteProps extends RouteProps{
    element: React.ReactElement
  }
  
  const PrivateRoute: FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();
  
    return (
      <Route {...rest} element={isAuthenticated ? element : <Navigate replace to="/login" />}/>
    );
  };
export default PrivateRoute
 */