import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar';
import { useEffect, useState } from 'react';
import { AuthContext } from './context/authContext';



const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);


  useEffect( () => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
    <Navbar/>
    <AppRouter/>
    </AuthContext.Provider>
  );
};

export default App;