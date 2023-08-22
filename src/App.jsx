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
      <footer>GenLegend v{packageJson.version}. Copyright © 2023 Crazy Diamond. All rights reserved.</footer>
    </>
  );
};

export default App;
