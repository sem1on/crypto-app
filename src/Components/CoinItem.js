import React from 'react';

const CoinItem = ({coins}) => {
    return (
        <div className='coin-row'>
            <p>{coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={coins.image} alt="symbol" />
                <p>{coins.symbol.toUpperCase()}</p>
            </div>
            <p>$ {coins.current_price.toLocaleString()}</p>
            <p>{coins.market_cap_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>$ {coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>$ {coins.market_cap.toLocaleString()}</p>
        </div>
    );
};

export default CoinItem;