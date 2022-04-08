import React from 'react';

import { Link } from 'react-router-dom';

import CoinItem from '../CoinItem/CoinItem';
import Coin from '../../routers/Coin';

import './Coins.css';

const Coins = ({coins}) => {
    return (
        <div className='container'>
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins.map(coins => {
                    return (
                        <Link 
                            to={`/coin/${coins.id}`} 
                            element={<Coin/>}  
                            key={coins.id}
                        >
                            <CoinItem coins={coins} key={coins.id}/>
                        </Link>
                    )
                })}

            </div>
        </div>
    );
};

export default Coins;