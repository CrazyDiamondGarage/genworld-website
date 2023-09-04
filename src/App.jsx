/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

// in index.js

import React, { useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { shuffle } from "txt-shuffle";
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
  "/img/bg/bg_01.jpg",
  "/img/bg/bg_02.jpg",
  "/img/bg/bg_03.jpg",
  "/img/bg/bg_04.jpg",
  "/img/bg/bg_05.jpg",
];

const slogansArr = ["I-Se-Kai", "CyberPunk", "Sci-Fi", "Dark Fantasy", "School Romance"];

const App = () => {
  const [cardIdx, setCardIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);
  const [sloganIdx, setSloganIdx] = useState(0);
  const [slogan, setSlogan] = useState(slogansArr[0]);

  const cardSprings = useSprings(
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

  const bgSprings = useSprings(
    bgsArr.length,
    bgsArr.map((bg, i) => {
      const offset = i - cardIdx;
      let adjustedIndex;
      let opacity = 1;

      if (offset === 0) {
        adjustedIndex = offset < 0 ? bgsArr.length + offset : offset;
        opacity = 1 - 0.2 * adjustedIndex;
      } else if (offset === -1) {
        adjustedIndex = 0;
        opacity = 0;
      } else {
        adjustedIndex = offset < 0 ? bgsArr.length + offset : offset;
        opacity = 1.2 - 0.2 * adjustedIndex;
      }

      return {
        zIndex: -adjustedIndex,
        opacity: opacity,
      };
    })
  );

  const handleCardClick = () => {
    setBgIdx((prevIdx) => (prevIdx + 1) % bgsArr.length);
    setCardIdx((prevIdx) => (prevIdx + 1) % cardsArr.length);
    setSloganIdx((prevIdx) => (prevIdx + 1) % slogansArr.length);
  };

  useEffect(() => {
    const tid = setInterval(() => {
      handleCardClick();
    }, NEXT_CARD_TIME);

    return () => clearInterval(tid);
  }, []);

  useEffect(() => {
    shuffle({
      text: slogansArr[sloganIdx],
      fps: 20,
      onUpdate: (output) => {
        setSlogan(output);
      },
    });
  }, [sloganIdx]);

  return (
    <>
      <div className="bgs">
        {bgSprings.map((props, i) => (
          <animated.img key={i} className="bg" src={bgsArr[i]} alt="" style={props} />
        ))}
      </div>

      <div className="cards" onClick={handleCardClick}>
        {cardSprings.map((props, i) => (
          <animated.img key={i} className="card" src={cardsArr[i]} alt="" style={props} />
        ))}
      </div>

      <div className="titles">
        <h2>Discover your unique</h2>
        <h1>
          <span className={`card-slogan card-gradient-${sloganIdx}`}>{slogan}</span>
          <span className="card-cursor blink">_</span>
        </h1>
        <h2>adventure gaming</h2>
        <h2>experience.</h2>

        <div className={`sub-title card-gradient-${sloganIdx}`}>
          powered by <b>Generative AI</b>
        </div>

        <div className="btc-play">Play online</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
