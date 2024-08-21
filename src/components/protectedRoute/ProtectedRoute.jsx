import {useEffect, useState} from "react";

export const ProtectedRoute = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    
  }, []);

  return (
    <div>

    </div>
  );
};