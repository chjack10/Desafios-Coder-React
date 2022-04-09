import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // const resetData = () => {
  //   setUserData({});
  //   setErrors({});
  // };

  return (
    <UserContext.Provider
      value={{
        handleChange,
        userData,
        errors,
        setErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
