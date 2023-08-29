/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

// in index.js

import React, { useState } from "react";
import { animated, useSprings } from '@react-spring/web'
import Footer from "@comp/Footer";
import "./App.css";

const cardsArr = [
  "/img/card/card_01.jpg",
  "/img/card/card_02.jpg",
  "/img/card/card_03.jpg",
  "/img/card/card_04.jpg",
  "/img/card/card_05.jpg"
];

const App = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const springs = useSprings(
    cardsArr.length,
    cardsArr.map((card, i) => {
      const offset = i - activeIndex;
      const adjustedIndex = offset < 0 ? cardsArr.length + offset : offset;
      const scale = 1 - 0.1 * adjustedIndex;
      const opacity = 1 - 0.2 * adjustedIndex;
  
      return {
        transform: `translateX(${adjustedIndex * -80}px) scale(${scale})`,
        zIndex: -adjustedIndex,
        opacity: opacity
      };
    })
  );

  const handleCardClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardsArr.length);
  };


  return (
    <>
      <img id="bg-front" src="/img/bg/bg_01.jpg" alt="" />
      {/* <img id="bg-front" src="/img/bg/bg_01.jpg" alt="" /> */}

      <div className="cards" onClick={handleCardClick}>
        {springs.map((props, i) => (
          <animated.img
            key={i}
            className="card"
            src={cardsArr[i]}
            alt=""
            style={props}
          />
        ))}
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
}

export default App;