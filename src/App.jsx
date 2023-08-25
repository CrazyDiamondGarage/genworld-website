/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://game.genworld.io/
 * @author endaye
 */

// in index.js
import packageJson from "../package.json";

const App = () => {
  return (
    <>
      <img id='bg-front' src="/img/bg/bg_01.jpg" alt="" />
      <img src="/img/bg/bg_01.jpg" alt="" />

      <footer>GenLegend v{packageJson.version}. Copyright © 2023 Crazy Diamond. All rights reserved.</footer>
    </>
  );
};

export default App;
