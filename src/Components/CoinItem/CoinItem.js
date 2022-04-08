import React from 'react';

import '../Coins/Coins.css';

const CoinItem = ({coins}) => {

    const styled = coins.market_cap_change_percentage_24h;

    const color24 = styled > 0 ? 'green' : 'red';

    const round = Math.round((coins.market_cap_change_percentage_24h * 100) / 100);


    return (
        <div className='coin-row'>
            <p>{coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={coins.image} alt="symbol" />
                <p>{coins.symbol.toUpperCase()}</p>
            </div>
            <p>$ {coins.current_price.toFixed(2)}</p>
            <p style={{color: `${color24}`}}>{round}%</p>
            <p className='hide-mobile'>$ {coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>$ {coins.market_cap.toLocaleString()}</p>
        </div>
    );
};

export default CoinItem;