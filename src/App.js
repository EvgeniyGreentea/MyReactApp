import React, { useEffect, useState } from 'react';
import AppRouter from './component/UI/AppRouter';
import NavBar from './component/UI/Navbar/NavBar';
import { AuthContext } from './context';
import './style/App.css';


const App = (props) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    } 
  }, [])
  return (
    <div className='app'>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <NavBar />
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
