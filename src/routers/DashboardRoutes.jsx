import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import { NavBar } from '../components/ui/NavBar'
import { ApodScreen } from '../screens/Apod/ApodScreen'
import { MainScreen } from '../screens/Main/MainScreen'


export const DashboardRoutes = () => {
    return (

        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='apod' element={<ApodScreen />} />
            </Routes>

        </>
    )
}
