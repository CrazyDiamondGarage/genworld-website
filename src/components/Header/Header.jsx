/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

import React from "react";
import { FaTwitter, FaDiscord, FaVolumeHigh, FaVolumeXmark, FaQuestion, FaUserLarge } from "react-icons/fa6";
import packageJson from "@/../package.json";
import "./Header.css";

console.debug(`Version: ${packageJson.version}`);

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <a href="https://genworld.io">
          <img id="header-logo" src="/img/logo/logo_01.png" alt="" draggable={false} />
        </a>
        <img className="header-line" src="/img/icon/cutting_line.png" alt="" draggable={false} />
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
        <img className="header-line" src="/img/icon/cutting_line.png" alt="" draggable={false} />
        <a className="header-social" href="https://twitter.com/GenWorld2023" target="_blank">
          <h5>About Us</h5>
        </a>
        <a className="header-social" href="mailto:contact@genworld.io" target="_blank">
          <h5>Contact</h5>
        </a>
        <a className="header-social" href="https://genworld.notion.site/genworld/GenWorld-Terms-of-Service-c4a176057078458d9f3d3f25fa4f6d72" target="_blank">
          <h5>Terms of Service</h5>
        </a>
        <a className="header-social" href="https://genworld.notion.site/GenWorld-Privacy-7c7274afce384cc29aabb95f941cfa1f" target="_blank">
          <h5>Privacy Policy</h5>
        </a>
        <div id="header-copyright">© 2023 CRAZY DIAMOND </div>
      </div>
    </div>
  );
};

export default Header;
