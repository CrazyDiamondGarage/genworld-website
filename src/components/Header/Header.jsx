/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <a href="https://genworld.io">
          <img id="header-logo" src="/img/logo/logo_01.png" alt="" draggable={false} />
        </a>
        <div className="header-space"></div>
        <a className="header-social" href="https://twitter.com/GenWorld2023" target="_blank">
          <h4>
            <FaTwitter />
          </h4>
          <h5>Twitter</h5>
        </a>
        <a className="header-social" href="https://discord.gg/Eu6ycbwnwY" target="_blank">
          <h4>
            <FaDiscord />
          </h4>
          <h5>Discord</h5>
        </a>
      </div>
    </div>
  );
};

export default Header;
