import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
        <h1>Arizona Shopp</h1>
        <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
        </ul>
        <CartWidget />
    </div>
  );
};

export default NavBar;