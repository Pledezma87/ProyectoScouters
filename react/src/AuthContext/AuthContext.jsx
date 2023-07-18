import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const usernameLS = JSON.parse(localStorage.getItem('username'))??[]
  const [username, setUsername] = useState([usernameLS]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      if (localStorage.getItem('isLoggedIn') === 'true') {
        setIsLoggedIn(true)
      }
    }

  }, []);
// LS LOCAL STORAGE
  useEffect(()=>{
    localStorage.setItem('username',JSON.stringify(username))
  },[username])

  const login = () => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    setIsLoggedIn(true);
  };


  const logout = () => {
    localStorage.setItem('isLoggedIn', '');
    setIsLoggedIn(false);
  };




  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout,username, setUsername }}> {children}</AuthContext.Provider>);
}