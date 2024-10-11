import React from 'react';
import { FaCoins } from 'react-icons/fa'; // Coin icon from FontAwesome
import { GiToken } from 'react-icons/gi'; // Token icon
import './TokenShop.css'; // Import the CSS file

const TokenShop = () => {
  return (
    <div className="tokenShopPage">
      <h2>Token Shop</h2>
      <p>Purchase tokens to participate in exclusive tournaments and unlock premium features.</p>

      {/* Token Items */}
      <div className="tokenItems">
        <div className="tokenItem">
          <div className="tokenIcon">
            <GiToken className="iconStyle" />
          </div>
          <h3>Basic Token Pack</h3>
          <p>100 Tokens</p>
          <div className="tokenDetails">
            <FaCoins className="coinIcon1" /> <span className="tokenPrice">Price: $10</span>
          </div>
          <button className="buyButton">Buy Now</button>
        </div>
        <div className="tokenItem premium">
          <div className="tokenIcon">
            <GiToken className="iconStyle" />
          </div>
          <h3>Premium Token Pack</h3>
          <p>500 Tokens</p>
          <div className="tokenDetails">
            <FaCoins className="coinIcon1" /> <span className="tokenPrice">Price: $40</span>
          </div>
          <button className="buyButton">Buy Now</button>
        </div>
        <div className="tokenItem elite">
          <div className="tokenIcon">
            <GiToken className="iconStyle" />
          </div>
          <h3>Elite Token Pack</h3>
          <p>1000 Tokens</p>
          <div className="tokenDetails">
            <FaCoins className="coinIcon1" /> <span className="tokenPrice">Price: $75</span>
          </div>
          <button className="buyButton">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TokenShop;
