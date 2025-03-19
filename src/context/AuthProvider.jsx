import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  const fetchAlldata = (query) => {
    setLoading(true)
    fetchData(`search/?q=${query}`).then((res) => {
      setData(res.contents);
      setLoading(false);
    });
  };

  // run use effect
  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
