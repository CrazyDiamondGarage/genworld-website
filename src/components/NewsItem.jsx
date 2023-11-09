import { Box } from "@mui/material";

export default function NewsItem({ title, dateTime, text, image }) {
  return (
    <Box
      sx={{
        p: "36px",
        background: "#3E4866",
        borderRadius: "24px",
        width: "30%",
        minWidth: "360px",
        maxWidth: "464px",
        height: "516px",
      }}
    >
      <Box
        sx={{
          fontSize: "1.5rem",
          fontWeight: 700,
        }}
      >
        {title}
      </Box>
      {/* Post Time */}
      <Box
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          mt: "6px",
        }}
      >
        {dateTime}
      </Box>

      {/* Content */}
      <Box
        sx={{
          mt: "24px",
          fontWeight: 400,
          fontSize: "1rem",
        }}
      >
        {text}
      </Box>

      {/* Image */}
      <Box
        sx={{
          height: "260px",
          mt: "24px",
          borderRadius: "8px",
        }}
      >
        <img
          src={image}
          height="260px"
          style={{
            borderRadius: "8px",
          }}
          alt=""
        />
      </Box>
    </Box>
  );
}