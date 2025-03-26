import React from "react";
import useSound from "use-sound";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import izquierda from "../assets/images/izquierda.svg";
import derecha from "../assets/images/derecha.svg";
import izquierdaDerecha from "../assets/images/izquierda-derecha.svg";
import manchas1 from "../assets/images/manchas1.png";


export default function LimbSelection({
  onNext,
  onBack,
  selectedLimb,
  setSelectedLimb,
}) {

  const handleSelectLimb = (limb) => {
    if (selectedLimb === limb) {
      setSelectedLimb(null);
    } else {
      setSelectedLimb(limb);
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
        backgroundColor: "#A7ADDF",
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
          backgroundPosition: "center",
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
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "64px",
            textAlign: "center",
          }}
        >
          ¿Qué extremidad utilizarás?
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
            onClick={() => handleSelectLimb("izquierda")}
            sx={{
              width: "314px",
              height: "156px",
              backgroundColor:
                selectedLimb === "izquierda" ? "#110734" : "#688EDE",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "0 20px",
            }}
          >
            <img
              src={izquierda}
              alt="Izquierda"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                alignSelf: "flex-end",
                marginBottom: "-60px",
                marginLeft: "-70px",
              }}
            />
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "-20px",
              }}
            >
              Izquierda
            </Typography>
          </Box>
          <Box
            onClick={() => handleSelectLimb("derecha")}
            sx={{
              width: "314px",
              height: "156px",
              backgroundColor:
                selectedLimb === "derecha" ? "#110734" : "#E48912",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "0 20px",
            }}
          >
            <img
              src={derecha}
              alt="Derecha"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                marginBottom: "-58px",
                marginLeft: "-70px",
              }}
            />
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "-50px",
                zIndex: 1,
              }}
            >
              Derecha
            </Typography>
          </Box>
          <Box
            onClick={() => handleSelectLimb("ambas")}
            sx={{
              width: "314px",
              height: "156px",
              backgroundColor:
                selectedLimb === "ambas" ? "#110734" : "#E36875",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              padding: "0 20px",
            }}
          >
            <img
              src={izquierdaDerecha}
              alt="Ambas"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
                alignSelf: "flex-end",
                marginLeft: "-15px",
                marginBottom: "-23px",
              }}
            />
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Ambas
            </Typography>
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
            }}
          >
            <ArrowBackIcon sx={{ color: "white", fontSize: "48px" }} />
          </IconButton>
          <IconButton
            onClick={onNext}
            disabled={!selectedLimb}
            sx={{
              width: "108px",
              height: "104px",
              backgroundColor: selectedLimb ? "#FF6B55" : "#DADADA",
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
