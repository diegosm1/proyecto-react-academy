import React, { useEffect } from 'react';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { DashboardRoutes } from './DashboardRoutes';
import { RegisterScreen } from '../screens/Login/RegisterScreen';
import { useDispatch } from 'react-redux';
import { startCheckin } from '../actions/actions';
import { DashboardLogin } from './DashboardLogin';
import { MainScreen } from '../screens/Main/MainScreen';
import { ApodScreen } from '../screens/Apod/ApodScreen';



export const AppRouter = () => {

  const { cheking } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  console.log(cheking);


  useEffect(() => {

    dispatch(startCheckin())

  }, [dispatch])


  if (cheking) {
    return <h1>Espere...</h1>
  }

  return (

    <BrowserRouter>
      <Routes>

        <Route path='login' element={<LoginScreen />}  />
        <Route path='login/register' element={<RegisterScreen />}  />

        <Route path='/*' element={<DashboardRoutes />} />

      </Routes>
    </BrowserRouter>
  );
};
