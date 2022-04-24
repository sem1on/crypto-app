import React from 'react';
import { useState, useEffect } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import Coins from './Components/Coins/Coins';
import Navbar from './Components/Navbar/Navbar';

import Coin from './routers/Coin';

function App() {

    const [coins, setCoins] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setCoins(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Coins coins={coins} />} />
                    <Route path='/coin' element={<Coin />}>
                        <Route path=':coinId' element={<Coin />} />
                    </Route>
                </Routes>
            </BrowserRouter>   
    );
}

export default App;
