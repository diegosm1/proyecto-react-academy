import React from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom'
import { ApodScreen } from '../screens/Apod/ApodScreen'
import { MainScreen } from '../screens/Main/MainScreen'

export const DashboardLogin = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<MainScreen />} />
                <Route path='/register' element={<ApodScreen />} />
            </Routes>
        </>
    )
}
