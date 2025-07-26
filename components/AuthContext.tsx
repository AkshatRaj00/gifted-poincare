// src/components/AuthContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { auth } from "../app/firebase/config"; // Firebase auth service import karo
import { User } from "firebase/auth"; // Firebase User type import karo

// UserContext ki type define karo
interface AuthContextType {
  currentUser: User | null; // Logged-in user object, ya null agar logged out hai
  loading: boolean; // Authentication status check ho raha hai ya nahi
}

// Context create karo
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook banate hain context use karne ke liye
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component jo poore app ko wrap karega
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
