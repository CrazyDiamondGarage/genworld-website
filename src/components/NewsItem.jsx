import { Box } from "@mui/material";

export default function NewsItem() {
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
      {/* Title */}
      <Box
        sx={{
          fontSize: "1.5rem",
          fontWeight: 700,
        }}
      >
        Lorem ipsum dolor sit amet, ei vix atqui nominati sadipscing.
      </Box>
      {/* Post Time */}
      <Box
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          mt: "6px",
        }}
      >
        2023 / 11 / 04
      </Box>

      {/* Content */}
      <Box
        sx={{
          mt: "24px",
          fontWeight: 400,
          fontSize: "1rem",
        }}
      >
        Ius an altera graecis iudicabit, an eos oporteat suavitate adolescens.
        In simul iudicabit assentior his. Partem apeirian insolens eos ut, at
        vidit harum impetus sit, ne nonumy deserunt vel. Duo et velit expetenda,
        per ne nisl eirmod reprimique.
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
          src=""
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
