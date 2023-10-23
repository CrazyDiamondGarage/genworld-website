/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

import React from "react";
import { FaTwitter, FaDiscord, FaVolumeHigh, FaVolumeXmark, FaQuestion, FaUserLarge } from "react-icons/fa6";
import packageJson from "@/../package.json";
import "./Footer.css";

console.debug(`Version: ${packageJson.version}`);

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <a href="https://genworld.io">
          <img id="footer-logo" src="/img/logo/logo_01.png" alt="" draggable={false} />
        </a>
        <img className="footer-line" src="/img/icon/cutting_line.png" alt="" draggable={false} />
        <a className="footer-social" href="https://twitter.com/GenWorld2023" target="_blank">
          <h4>
            <FaTwitter />
          </h4>
          <h5>Twitter</h5>
        </a>
        <a className="footer-social" href="https://discord.gg/Eu6ycbwnwY" target="_blank">
          <h4>
            <FaDiscord />
          </h4>
          <h5>Discord</h5>
        </a>
        <div id="footer-copyright">© 2023 Crazy Diamond</div>
      </div>
    </div>
  );
};

export default Footer;
