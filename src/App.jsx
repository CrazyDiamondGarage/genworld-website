/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

// in index.js

import React, { useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import Footer from "@comp/Footer";
import "@comp/firebase";
import "./App.css";

const bgArr = [
  "/img/bg/bg_01.jpg",
  "/img/bg/bg_02.jpg",
  "/img/bg/bg_03.jpg",
  "/img/bg/bg_04.jpg",
  "/img/bg/bg_05.jpg"
];

const cardsArr = [
  "/img/card/card_01.jpg",
  "/img/card/card_02.jpg",
  "/img/card/card_03.jpg",
  "/img/card/card_04.jpg",
  "/img/card/card_05.jpg",
  "/img/card/card_01.jpg",
  "/img/card/card_02.jpg",
  "/img/card/card_03.jpg",
  "/img/card/card_04.jpg",
  "/img/card/card_05.jpg",
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardSprings = useSprings(
    cardsArr.length,
    cardsArr.map((card, i) => {
      const offset = i - activeIndex;
      let adjustedIndex;
      let scale = 1;
      let opacity = 1;
      let transform;

      if (offset === 0) {
        adjustedIndex = offset < 0 ? cardsArr.length + offset : offset;
        scale = 1 - 0.1 * adjustedIndex;
        opacity = 1 - 0.2 * adjustedIndex;
        transform = `translateX(${adjustedIndex * -80}px) scale(${scale})`;
      } else if (offset === -1) {
        // This is the card that will come in from the left
        adjustedIndex = 0;
        opacity = 0;
        transform = `translateX(${adjustedIndex * -200}px) scale(${scale})`;
      } else {
        adjustedIndex = offset < 0 ? cardsArr.length + offset : offset;
        scale = 1 - 0.1 * adjustedIndex;
        opacity = 1.2 - 0.2 * adjustedIndex;
        transform = `translateX(${adjustedIndex * -80}px) scale(${scale})`;
      }

      return {
        transform: transform,
        zIndex: -adjustedIndex,
        opacity: opacity,
      };
    })
  );

  const bgSprings = useSprings(
    bgArr.length,
    bgArr.map((_, i) => ({
      opacity: i === activeIndex ? 1 : 0,
      position: 'absolute', 
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }))
  );

  const handleCardClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardsArr.length);
  };

  return (
    <>
      {bgSprings.map((props, i) => (
        <animated.img key={i} id="bg-front" src={bgArr[i]} alt="" style={props} />
      ))}

      <div className="cards" onClick={handleCardClick}>
        {cardSprings.map((props, i) => (
          <animated.img key={i} className="card" src={cardsArr[i]} alt="" style={props} />
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
};

export default App;
