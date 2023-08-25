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
      <img id="bg-front" src="/img/bg/bg_01.jpg" alt="" />
      {/* <img id="bg-front" src="/img/bg/bg_01.jpg" alt="" /> */}

      <div className="cards">
        <img className="card" id="card-5" src="/img/card/card_05.jpg" alt="" />
        <img className="card" id="card-4" src="/img/card/card_04.jpg" alt="" />
        <img className="card" id="card-3" src="/img/card/card_03.jpg" alt="" />
        <img className="card" id="card-2" src="/img/card/card_02.jpg" alt="" />
        <img className="card" id="card-1" src="/img/card/card_01.jpg" alt="" />
      </div>

      <div className="titles">
        <h2>Discover your unique</h2>
        <h1>
          <span>I-Se-Kai</span>_
        </h1>
        <h2>adventure gaming</h2>
        <h2>experience.</h2>

        <div className="sub-title">
          powered by <b>Generative AI</b>
        </div>

        <div className="btc-play">Play online</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
