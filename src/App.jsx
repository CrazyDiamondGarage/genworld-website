/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

// in index.js

import React, { useEffect, useState } from "react";
import { animated, useTransition, useSpring, useSprings } from "@react-spring/web";
import Footer from "@comp/Footer";
import "@comp/firebase";
import "./App.css";

const NEXT_CARD_TIME = 2000;

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

const bgsArr = [
  "/img/bg/bg_01.jpg",
  "/img/bg/bg_02.jpg",
  "/img/bg/bg_03.jpg",
  "/img/bg/bg_04.jpg",
  "/img/bg/bg_05.jpg",
];

const App = () => {
  const [cardIdx, setCardIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);

  const springs = useSprings(
    cardsArr.length,
    cardsArr.map((card, i) => {
      const offset = i - cardIdx;
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

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 5000 },
    }),
    []
  );

  const handleCardClick = () => {
    setCardIdx((prevIdx) => (prevIdx + 1) % cardsArr.length);
    setBgIdx((prevIdx) => (prevIdx + 1) % bgsArr.length);
  };

  useEffect(() => {
    const tid = setInterval(() => {
      handleCardClick();
    }, NEXT_CARD_TIME);

    return () => clearInterval(tid);
  }, []);

  return (
    <>
      <animated.img id="bg-back" className="bg" src={bgsArr[(bgIdx - 1) % bgsArr.length]} alt="" style={props} />
      <animated.img id="bg-front" className="bg" src={bgsArr[bgIdx]} alt="" style={props} />
      {/* <animated.img id="bg-back" className="bg" src="/img/bg/bg_01.jpg" alt="" style={props} /> */}
      {/* <animated.img id="bg-front" className="bg" src="/img/bg/bg_02.jpg" alt="" style={props} /> */}

      <div className="cards" onClick={handleCardClick}>
        {springs.map((props, i) => (
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
