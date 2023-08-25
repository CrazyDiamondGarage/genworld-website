/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

// in index.js

import Footer from "@comp/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <img id="bg-front" src="/img/bg/bg_01.png" alt="" />
      {/* <img id="bg-front" src="/img/bg/bg_01.jpg" alt="" /> */}

      <div className="cards">
        <img className="card" id="card-5" src="/img/card/card_05.png" alt="" />
        <img className="card" id="card-4" src="/img/card/card_04.png" alt="" />
        <img className="card" id="card-3" src="/img/card/card_03.png" alt="" />
        <img className="card" id="card-2" src="/img/card/card_02.png" alt="" />
        <img className="card" id="card-1" src="/img/card/card_01.png" alt="" />
      </div>
      <Footer />
    </>
  );
};

export default App;
