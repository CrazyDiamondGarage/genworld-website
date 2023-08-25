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
    <div className="footer">GenLegend v{packageJson.version}. Copyright © 2023 Crazy Diamond. All rights reserved.</div>
  );
};

export default Footer;
