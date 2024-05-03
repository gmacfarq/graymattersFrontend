import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username'));

  const login = (username) => {
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };


AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};