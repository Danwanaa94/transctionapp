import { createContext, useState } from "react";

const authContext = createContext();

const AuthProvider = authContext.Provider;
function AuthContextProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    
//login function
  const authLogin = async (email, password) => {
    setLoading(true);
    await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };

  //signup function
  const authSignup = async (username, email, password) => {
    setLoading(true);
    await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };
  
  

  return (
    <AuthProvider
      AuthProvider
      value={{
        success,
        error,
        loading,
        user,
        authLogin,
        authSignup,
      }}
    >
      {children}
    </AuthProvider>
  );
}

export { authContext, AuthContextProvider };