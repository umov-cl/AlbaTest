import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import useSound from "use-sound";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import restar from "../assets/images/restar.svg";
import sumar from "../assets/images/sumar.svg";
import vueltas from "../assets/images/vueltas2.png";
import manchas1 from "../assets/images/manchas1.png";


export default function LapSelection({ laps, setLaps, onBack, onNext }) {
  const [animate, setAnimate] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
 

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleScreenClick = () => {
    setIsVisible(false);
  };

  return (
    <Box
      onClick={handleScreenClick}
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
      {isVisible && (
        <Box
          sx={{
            position: "absolute",
            width: "280px",
            height: "420px",
            bottom: animate ? "2px" : "-250px",
            left: animate ? "50px" : "-500px",
            transition: "all 3s ease",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <img
            src={vueltas}
            alt="Vueltas"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      )}
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
          ¿Cuántas vueltas realizarás?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <IconButton
            onClick={() => {
              setLaps((prev) => Math.max(prev - 1, 1));
            }}
            sx={{
              width: "159px",
              height: "111px",
              backgroundColor: "#4955A8",
              borderRadius: "30px",
              border: "3px solid #585454",
            }}
          >
            <img src={restar} alt="Restar vueltas" />
          </IconButton>
          <Box
            sx={{
              width: "402px",
              height: "111px",
              backgroundColor: "#FFF8F6",
              borderRadius: "20px",
              border: "3px solid #4955A8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "100px", color: "#4955A8" }}>
              {laps}
            </Typography>
          </Box>
          <IconButton
            onClick={() => {
              setLaps((prev) => prev + 1);
            }}
            sx={{
              width: "159px",
              height: "111px",
              backgroundColor: "#4955A8",
              borderRadius: "30px",
              border: "3px solid #585454",
            }}
          >
            <img src={sumar} alt="Sumar vueltas" />
          </IconButton>
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
            }}
          >
            <ArrowBackIcon sx={{ color: "white", fontSize: "48px" }} />
          </IconButton>
          <IconButton
            onClick={onNext}
            sx={{
              width: "108px",
              height: "104px",
              backgroundColor: "#FF6B55",
              borderRadius: "50%",
            }}
          >
            <ArrowForwardIcon sx={{ color: "white", fontSize: "48px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
