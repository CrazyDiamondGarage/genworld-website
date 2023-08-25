/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

import React from "react";
import packageJson from "@/../package.json";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img id="footer-logo" src="/img/logo/logo_01.png" alt="" />
        <img className="footer-line" src="/img/icon/cutting_line.png" alt="" />
        <a id="footer-twitter" href="https://twitter.com/GenWorld2023" target="_blank">
          <img src="/img/icon/icon_twitter.svg" alt="" />
          <h5>Twitter</h5>
        </a>
        <div id="footer-copyright">© 2023 GenWorld</div>
      </div>
    </div>
  );
};

export default Footer;
