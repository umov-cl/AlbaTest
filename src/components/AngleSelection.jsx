import React, { useState, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import useSound from "use-sound";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import inclinacion0 from "../assets/images/inclinacion/inclinacion0.svg";
import inclinacion15 from "../assets/images/inclinacion/inclinacion15.svg";
import inclinacion35 from "../assets/images/inclinacion/inclinacion35.svg";
import inclinacion50 from "../assets/images/inclinacion/inclinacion50.svg";
import inclinacion0Blanco from "../assets/images/inclinacion/0blanco.svg";
import inclinacion15Blanco from "../assets/images/inclinacion/15blanco.svg";
import inclinacion35Blanco from "../assets/images/inclinacion/35blanco.svg";
import inclinacion50Blanco from "../assets/images/inclinacion/50blanco.svg";
import manchas1 from "../assets/images/manchas1.png";

const sounds = import.meta.glob("../assets/sounds/**/*.mp3", { eager: true });

const inclinationImages = {
  0: inclinacion0,
  10: inclinacion15,
  20: inclinacion35,
  30: inclinacion35,
  40: inclinacion50,
};

const inclinationWhiteImages = {
  0: inclinacion0Blanco,
  10: inclinacion15Blanco,
  20: inclinacion35Blanco,
  30: inclinacion35Blanco,
  40: inclinacion50Blanco,
};

export default function AngleSelection({ angle, setAngle, onNext, onBack }) {
  const scrollRef = useRef(null);
  const [selectedAngle, setSelectedAngle] = useState(null);
  const [playSelect] = useSound(
    sounds["../assets/sounds/seleccionar.mp3"]?.default || ""
  );

  const handleTouchStart = (e) => {
    
  };

  const handleSelectAngle = (newAngle) => {
    playSelect();
    if (selectedAngle === newAngle) {
      setSelectedAngle(null);
      setAngle(0);
    } else {
      setSelectedAngle(newAngle);
      setAngle(newAngle);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E1E1E1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        padding: "20px",
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
          backgroundPosition: "center",
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
      <Typography
        sx={{
          color: "#4955A8",
          fontWeight: "bold",
          fontSize: "64px",
          textAlign: "center",
          marginBottom: "40px",
          zIndex: 1,
        }}
      >
        ¿Qué inclinación usarás?
      </Typography>
      <Box
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        sx={{
          display: "flex",
          overflowX: "scroll",
          gap: "20px",
          paddingLeft: "10px",
          width: "80%",
          maxWidth: "1000px",
          zIndex: 1,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {[0, 10, 20, 30, 40].map((angleOption) => (
          <Box
            key={angleOption}
            onClick={() => handleSelectAngle(angleOption)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "330px",
              height: "193px",
              backgroundColor:
                selectedAngle === angleOption ? "#FF6B55" : "#FFF8F6",
              borderRadius: "50px",
              boxShadow: "-8px 8px 0px #646B9C",
              padding: "20px",
              marginBottom: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "bold",
                color: selectedAngle === angleOption ? "white" : "#4955A8",
              }}
            >
              {angleOption}°
            </Typography>
            <img
              src={
                selectedAngle === angleOption
                  ? inclinationWhiteImages[angleOption]
                  : inclinationImages[angleOption]
              }
              alt={`Inclinación ${angleOption}`}
              style={{ width: "120px", height: "120px", marginTop: "10px" }}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "78px",
          marginTop: "40px",
          zIndex: 1,
        }}
      >
        <IconButton
          onClick={onBack}
          sx={{
            width: "108px",
            height: "104px",
            backgroundColor: "#FF6B55",
            boxShadow: "-8px 8px 8px #2A3D6B",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#FF5733" },
          }}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "48px" }} />
        </IconButton>
        <IconButton
          onClick={onNext}
          disabled={selectedAngle === null}
          sx={{
            width: "108px",
            height: "104px",
            backgroundColor:
              selectedAngle !== null ? "#FF6B55" : "#DADADA",
            boxShadow: "8px 8px 8px #2A3D6B",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor:
                selectedAngle !== null ? "#FF5733" : "#E1E1E1",
            },
          }}
        >
          <ArrowForwardIcon sx={{ color: "white", fontSize: "48px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
