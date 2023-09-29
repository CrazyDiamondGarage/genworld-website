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

const bgArr = ["/img/bg/bg_01.jpg", "/img/bg/bg_02.jpg", "/img/bg/bg_03.jpg", "/img/bg/bg_04.jpg", "/img/bg/bg_05.jpg"];
const NEXT_CARD_TIME = 3000;
const CARD_OFFSET_X_DEFAULT = -20;
const CARD_OFFSET_X_MIN = -22;
const CARD_OFFSET_X_MAX = -16;

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

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const App = () => {
  const [cardIdx, setCardIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);
  const [sloganIdx, setSloganIdx] = useState(0);
  const [slogan, setSlogan] = useState(slogansArr[0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const intervalRef = React.useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cardSprings = useSprings(
    cardsArr.length,
    cardsArr.map((card, i) => {
      const offset = i - cardIdx;
      let adjustedIndex;
      let scale = 1;
      let opacity = 1;
      let transform;

      const parallaxX = (mouse.x / window.innerWidth - 0.5) * -16;
      const x = clamp(CARD_OFFSET_X_DEFAULT + parallaxX, CARD_OFFSET_X_MIN, CARD_OFFSET_X_MAX);

      if (offset === 0) {
        adjustedIndex = offset < 0 ? cardsArr.length + offset : offset;
        scale = 1 - 0.1 * adjustedIndex;
        opacity = 1 - 0.2 * adjustedIndex;
        transform = `translateX(${adjustedIndex * x * 4}px) scale(${scale})`;
      } else if (offset === -1) {
        // This is the card that will come in from the left
        adjustedIndex = 0;
        opacity = 0;
        transform = `translateX(${adjustedIndex * x * 5}px) scale(${scale})`;
      } else {
        adjustedIndex = offset < 0 ? cardsArr.length + offset : offset;
        scale = 1 - 0.1 * adjustedIndex;
        opacity = 1.2 - 0.2 * adjustedIndex;
        transform = `translateX(${adjustedIndex * x * 4}px) scale(${scale})`;
      }

      return {
        transform,
        zIndex: -adjustedIndex,
        opacity,
      };
    })
  );

  const bgSprings = useSprings(
    bgsArr.length,
    bgsArr.map((bg, i) => {
      const offset = i - cardIdx;
      let adjustedIndex;
      let opacity = 1;
      let transform;

      if (offset === 0) {
        adjustedIndex = offset < 0 ? bgsArr.length + offset : offset;
        opacity = 1 - 0.2 * adjustedIndex;
        // parallax effect calculation based on mouse position
        const parallaxX = (mouse.x / window.innerWidth - 0.5) * 100;
        transform = `translateX(${-parallaxX}px)`;
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
        transform: transform,
      };
    })
  );

  const handleCardClick = () => {
    setBgIdx((prevIdx) => (prevIdx + 1) % bgsArr.length);
    setCardIdx((prevIdx) => (prevIdx + 1) % cardsArr.length);
    setSloganIdx((prevIdx) => (prevIdx + 1) % slogansArr.length);

    clearInterval(intervalRef.current); //rset interval
    intervalRef.current = setInterval(() => {
      handleCardClick();
    }, NEXT_CARD_TIME);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleCardClick();
    }, intervalRef);

    return () => clearInterval(intervalRef.current); // clear the interval when the component is unmounted
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
          <animated.img key={i} className="bg" src={bgsArr[i]} alt="" style={props} draggable={false} />
        ))}
      </div>

      <div className="cards" onClick={handleCardClick}>
        {cardSprings.map((props, i) => (
          <animated.img key={i} className="card" src={cardsArr[i]} alt="" style={props} draggable={false} />
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
