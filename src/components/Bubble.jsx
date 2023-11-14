/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author yenlin
 */

import React from "react";

const styles = {
  bubble: {
    position: "fixed",
    top: "90px",
    left: "120px",
    width: "300px",
    padding: "15px",
    backgroundColor: "#DBDDE9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    color: "black",
    fontWeight: "bold",
  },
  closeButton: {
    cursor: "pointer",
    border: "none",
    background: "none",
    fontSize: "20px",
    color: "black",
    lineHeight: "20px",
  },
  content: {
    color: "black",
  },
  image: {
    marginTop: "20px",
    maxWidth: "100%",
    borderRadius: "4px",
  },
};

function Bubble({ title, text, onClose, image, link }) {
  return (
    <div style={styles.bubble}>
      <div style={styles.header}>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <button onClick={onClose} style={styles.closeButton}>
          ×
        </button>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <div style={styles.content}>
          {text}
          {image && <img src={image} alt={title} style={styles.image} />}
        </div>
      </a>
    </div>
  );
}

export default Bubble;
