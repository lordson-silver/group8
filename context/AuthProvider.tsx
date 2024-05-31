'use client';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import local from 'next/font/local';

const BASE_URL = 'https://smmp-backend.onrender.com/api/v1/users';
const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const signup = async (payload: any) => {
    const response = await axios.post(`${BASE_URL}/signup`, payload);
    const { data, status } = response;
    const { data: userData, token } = data;
    localStorage.setItem('user', JSON.stringify(data));
    setUser(userData);
    return userData;
  };
  const login = async (payload: any) => {
    const response = await axios.post(`${BASE_URL}/login`, payload);
    const { data, status } = response;
    const { data: userData, token } = data;
    localStorage.setItem('user', JSON.stringify(data));
    setUser(userData);
    return userData;
  };
  const verifyOtp = async (payload: any) => {
    const response = await axios.post(`${BASE_URL}/verify-otp`, payload);
    const { data, status } = response;
    const { status: statusMessage, message } = data;
    if (statusMessage !== 'success') {
      return false;
    }
    return true;
  };
  const updateProfile = async (payload: any) => {
    const { token } = JSON.parse(localStorage.getItem('user') as string).token;
    const response = await axios.patch(
      `${BASE_URL}/academic-profile`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response;
    const { status, data: userData } = data;
    setUser(userData);
    return userData;
  };
  return (
    <AuthContext.Provider
      value={{ user, signup, login, verifyOtp, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
