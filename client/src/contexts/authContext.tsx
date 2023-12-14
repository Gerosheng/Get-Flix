import React, { createContext, useContext, FC, ReactNode, useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  login: (user: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  const login = async (user: string, callback: VoidFunction) => {

      try {
        const response = await fetch('http://localhost:5050/api/auth/login',{
          method: 'POST',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if(data.success === true){
          setUser(data.user);
          setIsAuthenticated(true);
          callback();
        }  
      } catch (error) {
        console.error('Login failed:', error);
      }   
  };
  
  const logout = async (callback: VoidFunction) => {
      try {
        const response = await fetch('http://localhost:5050/api/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setUser(null);        
        setIsAuthenticated(false);
        callback();
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
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

export default { AuthContext, AuthProvider, AuthStatus, RequireAuth, useAuth}
