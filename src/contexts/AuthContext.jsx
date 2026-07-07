import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: btoa(password) }),
      });
      const resData = await response.json();
      if (response.ok && resData.data && resData.data.status === 200) {
        const loggedInUser = resData.data.result.user;
        const jwtToken = resData.data.result.loginToken;
        setUser(loggedInUser);
        setToken(jwtToken);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        localStorage.setItem('token', jwtToken);
        return { success: true };
      } else {
        const errorMessage = resData.errors && resData.errors.length > 0 ? resData.errors[0].description || resData.errors[0].message : 'Login failed';
        return { success: false, message: errorMessage };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'An error occurred during login.' };
    }
  };

  const register = async (email, password, confirmPassword, firstName, lastName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          password: btoa(password), 
          confirmPassword: btoa(confirmPassword),
          firstName,
          lastName,
          userName: email.split('@')[0] 
        }),
      });
      const resData = await response.json();
      if (response.ok && resData.data && resData.data.status === 200) {
        return await login(email, password);
      } else {
        const errorMessage = resData.errors && resData.errors.length > 0 ? resData.errors[0].description || resData.errors[0].message : 'Registration failed';
        return { success: false, message: errorMessage };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'An error occurred during registration.' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);