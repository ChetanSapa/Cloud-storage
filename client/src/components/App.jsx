import React from "react";
import Navbar from './navbar/Navbar'
import './app.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Registration from './authorization/Registration'
import Authorization from './authorization/Authorization'

function App() {
    return (
        <BrowserRouter>
            <div className={'app'}>
                <Navbar/>
                <Routes>
                    <Route path={'/login'} exact element={<Authorization/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    {/*<Route path="*" element={<Navigate to ="/" />}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
