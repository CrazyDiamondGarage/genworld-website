/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author jovi
 */

import { Box } from "@mui/material";

export default function NewsItem({ title, dateTime, text, image, link }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <Box
      sx={{
        p: "36px",
        background: "#3E4866",
        borderRadius: "24px",
        width: "30%",
        minWidth: "300px",
        maxWidth: "464px",
        height: "516px",
        cursor: "pointer",
      }}
      onClick={handleClick}>
      <Box
        sx={{
          fontSize: "1.5rem",
          fontWeight: 700,
        }}>
        {title}
      </Box>
      {/* Post Time */}
      <Box
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          mt: "6px",
        }}>
        {dateTime}
      </Box>

      {/* Content */}
      <Box
        sx={{
          mt: "24px",
          fontWeight: 400,
          fontSize: "1rem",
        }}>
        {text}
      </Box>

      {/* Image */}
      <Box
        sx={{
          height: "180px",
          mt: "24px",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
        <img
          src={image}
          height="180px"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          alt=""
        />
      </Box>
    </Box>
  );
}
