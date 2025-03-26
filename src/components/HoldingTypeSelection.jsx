import React from "react";
import useSound from "use-sound";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import tomada1 from "../assets/images/tomada1.svg";
import tomada2 from "../assets/images/tomada2.svg";
import tomada3 from "../assets/images/tomada3.svg";
import manchas1 from "../assets/images/manchas1.png";

const sounds = import.meta.glob("../assets/sounds/**/*.mp3", { eager: true });

export default function HoldingTypeSelection({
  onBack,
  onStartCountdown,
  selectedHolding,
  setSelectedHolding,
}) {
  const [playSelect] = useSound(
    sounds["../assets/sounds/seleccionar.mp3"]?.default || ""
  );
  const [playNext] = useSound(
    sounds["../assets/sounds/next.mp3"]?.default || ""
  );

  const handleSelectHolding = (holding) => {
    playSelect();
    if (selectedHolding === holding) {
      setSelectedHolding(null);
    } else {
      setSelectedHolding(holding);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "20px",
        width: "100%",
        height: "100%",
        backgroundColor: "#E1E1E1",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${manchas1})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
      </Box>
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Typography
          sx={{
            color: "#4955A8",
            fontWeight: "bold",
            fontSize: "64px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          ¿Qué tipo de tomada utilizarás?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            onClick={() => handleSelectHolding("tomada1")}
            sx={{
              width: "314px",
              height: "156px",
              backgroundColor:
                selectedHolding === "tomada1" ? "#110734" : "#688EDE",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "0 20px",
            }}
          >
            <img
              src={tomada1}
              alt="Tomada 1"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                marginTop: "5px",
                marginLeft: "30px",
              }}
            />
          </Box>
          <Box
            onClick={() => handleSelectHolding("tomada2")}
            sx={{
              width: "314px",
              height: "156px",
              backgroundColor:
                selectedHolding === "tomada2" ? "#110734" : "#E48912",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "0 20px",
            }}
          >
            <img
              src={tomada2}
              alt="Tomada 2"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                marginTop: "5px",
                marginLeft: "30px",
              }}
            />
          </Box>
          <Box
            onClick={() => handleSelectHolding("tomada3")}
            sx={{
              width: "314px",
              height: "156px",
              backgroundColor:
                selectedHolding === "tomada3" ? "#110734" : "#E36875",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "0 20px",
            }}
          >
            <img
              src={tomada3}
              alt="Tomada 3"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
                marginTop: "20px",
                marginLeft: "35px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "78px",
            marginTop: "40px",
          }}
        >
          <IconButton
            onClick={onBack}
            sx={{
              width: "108px",
              height: "104px",
              backgroundColor: "#FF6B55",
              borderRadius: "50%",
              "&:hover": { backgroundColor: "#FF5733" },
            }}
          >
            <ArrowBackIcon sx={{ color: "white", fontSize: "48px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              playNext();
              setTimeout(onStartCountdown, 500);
            }}
            disabled={!selectedHolding}
            sx={{
              width: "108px",
              height: "104px",
              backgroundColor: selectedHolding ? "#FF6B55" : "#DADADA",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: selectedHolding ? "#FF5733" : "#E1E1E1",
              },
            }}
          >
            <ArrowForwardIcon sx={{ color: "white", fontSize: "48px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
