import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useSound from "use-sound";
import manchas1 from "../assets/images/manchas1.png";
import pathIcon from "../assets/images/izquierda.svg"; // Imagen estática para todos

const sounds = import.meta.glob("../assets/sounds/**/*.mp3", { eager: true });

export default function PathSelection({ onNext, onBack, setPath = () => {}  }) {
  const [selectedPaths, setSelectedPaths] = useState([]);
  const [playSelect] = useSound(
    sounds["../assets/sounds/seleccionar.mp3"]?.default || ""
  );

  const handlePathSelect = (pathItem) => {
    console.log("Se hizo click en:", pathItem);
    playSelect();
    setSelectedPaths((prev) =>
      prev.some((selected) => selected.id === pathItem.id)
        ? prev.filter((item) => item.id !== pathItem.id)
        : [...prev, pathItem]
    );
  };

  // Datos dummy para replicar la interfaz
  const dummyPathList = [
    { id: 1, basename: "path1", name: "Trazo 1" },
    { id: 2, basename: "path2", name: "Trazo 2" },
    { id: 3, basename: "path3", name: "Trazo 3" },
  ];

  useEffect(() => {
    if (setPath) {
      setPath(selectedPaths);
    }
  }, [selectedPaths, setPath]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        padding: "20px",
        backgroundColor: "#A7ADDF",
      }}
    >
      {/* Fondo con manchas */}
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
          pointerEvents: "none",
        }}
      />

      {/* Títulos */}
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "62px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        Selecciona un trazo
      </Typography>
      <Typography
        sx={{
          color: "#4955A8",
          fontSize: "28px",
          marginBottom: "60px",
          zIndex: 1,
        }}
      >
        Recuerda que puedes elegir más de un trazo
      </Typography>

      {/* Contenedor del slider */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          gap: "20px",
          width: "100%",
          maxWidth: "1000px",
          paddingLeft: "10px",
          paddingBottom: "20px",
          scrollBehavior: "smooth",
          zIndex: 1,
        }}
      >
        {dummyPathList.map((pathItem) => (
          <Box
            key={pathItem.id}
            onClick={() => handlePathSelect(pathItem)}
            sx={{
              display: "inline-block",
              width: "330px",
              height: "193px",
              backgroundColor: selectedPaths.some(
                (selected) => selected.id === pathItem.id
              )
                ? "#FF6B55"
                : "#E1E1E1",
              borderRadius: "50px",
              transition: "background-color 0.3s ease",
              textAlign: "center",
              padding: "10px",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={pathIcon}
              alt={pathItem.name}
              style={{ width: "120px", height: "120px", marginTop: "0px" }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                color: selectedPaths.some(
                  (selected) => selected.id === pathItem.id
                )
                  ? "white"
                  : "#4955A8",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {pathItem.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Botones de navegación */}
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
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#FF5733" },
          }}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "48px" }} />
        </IconButton>
        <IconButton
          onClick={onNext}
          disabled={selectedPaths.length === 0}
          sx={{
            width: "108px",
            height: "104px",
            backgroundColor:
              selectedPaths.length > 0 ? "#FF6B55" : "#DADADA",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor:
                selectedPaths.length > 0 ? "#FF5733" : "#E1E1E1",
            },
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: "48px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
