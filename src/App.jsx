/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye, booga, yenlin, jovi
 */

// in index.js

import React, { useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import Lottie from "lottie-react";
import { shuffle } from "txt-shuffle";
import { Box, Drawer, Typography } from "@mui/material";
import Footer from "@comp/Footer";
import Header from "@comp/Header";
import "@comp/firebase";
import "./App.css";
import Bubble from "@comp//Bubble";
import NewsItem from "@comp//NewsItem";
import slideUp from "@asset/lottie/slideUp.json";

const NEXT_CARD_TIME = 3000;
const CARD_OFFSET_X_DEFAULT = -20;
const CARD_OFFSET_X_MIN = -22;
const CARD_OFFSET_X_MAX = -8;
const CARD_PARALLAX_X_FACTOR = -20;
const BG_PARALLAX_X_FACTOR = 60;

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
  const [openRecentNews, setOpenRecentNews] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const intervalRef = React.useRef();
  const [showBubble, setShowBubble] = useState(true);
  const handleCloseBubble = () => {
    setShowBubble(false);
  };

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

  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setAnimationPaused(true);
      } else {
        setAnimationPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // 检查当前路径是否为 '/events'
    if (window.location.hash === "#event") {
      // 如果是，则重定向到 notion
      window.location.href =
        "https://genworld.notion.site/Join-What-if-AI-Generated-Story-Contest-Prize-Pool-iPhone-15-PS5-story-gamified-on-Steam-I-bbfb547356784c11b340122cfe702043";
    }
  }, []);

  const cardSprings = useSprings(
    cardsArr.length,
    cardsArr.map((card, i) => {
      const offset = i - cardIdx;
      let adjustedIndex;
      let scale = 1;
      let opacity = 1;
      let transform;

      const innerWidth = window.innerWidth;
      const factor = innerWidth / 1440;

      const parallaxX = (mouse.x / window.innerWidth - 0.5) * CARD_PARALLAX_X_FACTOR;
      const x = clamp(CARD_OFFSET_X_DEFAULT + parallaxX, CARD_OFFSET_X_MIN, CARD_OFFSET_X_MAX) * factor;

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

  const [bgSprings, api] = useSprings(
    bgsArr.length,
    (i) => {
      const offset = i - cardIdx;
      let adjustedIndex;
      let opacity = 1;

      const parallaxX = (mouse.x / window.innerWidth - 0.5) * BG_PARALLAX_X_FACTOR;
      let transform = `translateX(${-parallaxX}px)`;

      adjustedIndex = offset < 0 ? bgsArr.length + offset : offset;

      if (adjustedIndex === 0) {
        opacity = 1 - 0.2 * adjustedIndex;
      } else if (adjustedIndex === 1) {
        opacity = 1;
      } else {
        opacity = 0;
      }

      return {
        to: {
          zIndex: adjustedIndex * -1,
          opacity,
          transform,
        },
        pause: animationPaused,
      };
    },
    [cardIdx, bgsArr, animationPaused]
  );

  const handleCardClick = (userClick) => {
    setBgIdx((prevIdx) => (prevIdx + 1) % bgsArr.length);
    setCardIdx((prevIdx) => (prevIdx + 1) % cardsArr.length);
    setSloganIdx((prevIdx) => (prevIdx + 1) % slogansArr.length);

    clearInterval(intervalRef.current); //reset interval
    intervalRef.current = setInterval(() => {
      handleCardClick();
    }, NEXT_CARD_TIME);
  };

  const handlePlayClick = () => {
    window.open("https://legend.genworld.io/");
  };

  useEffect(() => {
    if (animationPaused && intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        handleCardClick();
      }, NEXT_CARD_TIME);
    }

    return () => clearInterval(intervalRef.current); // clear the interval when the component is unmounted
  }, [animationPaused, intervalRef.current]);

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
      <Header />

      {showBubble && (
        <Bubble
          title="AI Generated Story Contest"
          text="'Join ’What if…?‘ AI Generated Story Contest, Prize Pool: iPhone 15 & PS5 + story gamified on Steam/Itch."
          onClose={handleCloseBubble}
          image="/img/events/1.jpg"
          link="https://genworld.notion.site/Join-What-if-AI-Generated-Story-Contest-Prize-Pool-iPhone-15-PS5-story-gamified-on-Steam-I-bbfb547356784c11b340122cfe702043"
        />
      )}

      <div className="bgs">
        {bgSprings.map((props, i) => {
          return (
            <animated.img
              key={i}
              className="bg"
              src={bgsArr[i]}
              style={{
                ...props,
                // pointerEvents: animationPaused ? "none" : "auto",
              }}
              draggable={false}
            />
          );
        })}
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

        <div className={`btn-play btn-play-gradient-${sloganIdx}`} onClick={handlePlayClick}>
          Play online
        </div>
      </div>

      <Box
        sx={{
          width: "24px",
          position: "fixed",
          bottom: "calc(84px * var(--zoom))",
          left: "50%",
          cursor: "pointer",
        }}
        onClick={() => {
          setOpenRecentNews(true);
        }}>
        <Lottie animationData={slideUp} loop={true} />
      </Box>
      <Drawer
        anchor="bottom"
        open={openRecentNews}
        onClose={() => setOpenRecentNews(false)}
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "24px 24px 0px 0px",
            background: "rgba(31, 36, 51, 0.98)",
            color: "#fff",
            p: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              width: "fit-content",
              fontSize: "3rem",
              fontWeight: 700,
              background: "linear-gradient(90deg, #00FFFF 0%, #00FF00 100%);",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}>
            Recent News
          </Box>
          <Box>
            GenWorld is an AI-driven gaming platform. It supports UGC templates, multimodal AI integration, and dynamic
            story and visual creation, allowing players to easily play and create games through AI. To get more latest
            content, please{" "}
            <a
              href="https://discord.gg/vKe5fRKM"
              style={{
                color: "#00FF00",
              }}>
              <span>join our discord</span>
            </a>
            .
          </Box>
          {/* News List */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "24px",
              mt: "48px",
            }}>
            <NewsItem
              title="'What if...?'AI Generated Story Contest"
              dateTime="2023 / 11 / 15"
              text="Join ’What if…?‘ AI Generated Story Contest, 
              Prize Pool: iPhone 15 & PS5 + story gamified on Steam/Itch."
              image="/img/events/1.jpg"
              link="https://genworld.notion.site/Join-What-if-AI-Generated-Story-Contest-Prize-Pool-iPhone-15-PS5-story-gamified-on-Steam-I-bbfb547356784c11b340122cfe702043"
            />
            <NewsItem
              title="China's first AI Micro-fiction Competition"
              dateTime="2023 / 11 / 02"
              text="💡 HuggingFace co-hosted with us
              ,Got 1000+ participants
              ,Reported by top press (36Kr, Geek Park, etc.)
              ,Spread to reach of 200,000+ people.
              "
              image="/img/events/2.jpg"
              link="https://genworld.notion.site/Press-bf7421dffb8e4395a97bc77162f0c118?pvs=4"
            />
            {/* <NewsItem title="To be determined" dateTime="2023 / 11 / 03" text="Text 3..." image="ImageURL3" link="" />{" "} */}
          </Box>
        </Box>
      </Drawer>

      <Footer />
    </>
  );
};

export default App;
