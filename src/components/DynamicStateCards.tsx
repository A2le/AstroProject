import { Box, Typography, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const states = [
  { name: "Gauteng", image: "gauteng.jpg"},
  { name: "Westurn Cape", image: "south-africa-cape-town-table-mountain.jpg"},
  { name: "KwaZulu Natal", image: "kwazulu-natal-whalebone-pier-scaled.jpg"},
  { name: "Eastern cape", image: "Eastern-cape.jpg"},
  { name: "Mpumalanga", image: "Mpumalanga.jpg"},
];

const ScrollContainer = styled("div")({
  display: "flex",
  overflowX: "auto",
  gap: "16px",
  padding: "16px",
  whiteSpace: "nowrap",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": { display: "none" },
  cursor: "grab",
  userSelect: "none",
});

const DynamicStateCards = () => {
    const navigate = useNavigate();
  
    const handleCardClick = (stateName: string) => {
      navigate(`/events/${stateName.toLowerCase()}`);
    };
  
    return (
      <Box sx={{ marginTop: "40px", textAlign: "center", overflow: "hidden", paddingBottom: "16px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px", fontWeight: "bold", textAlign: "left", paddingLeft: "16px" }}>
          Discover Events by Province
        </Typography>
        <ScrollContainer>
          {states.map((state, index) => (
            <Box
              key={index}
              onClick={() => handleCardClick(state.name)}
              sx={{
                width: "250px",
                height: "300px",
                backgroundImage: `url(${state.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                margin: "8px",
                position: "relative",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <Box sx={{ position: "absolute", bottom: 10, left: 10, color: "white" }}>
                <Typography variant="h6">{state.name}</Typography>
              </Box>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ position: "absolute", top: 10, right: 10 }}>
                <MenuIcon />
              </IconButton>
            </Box>
          ))}
        </ScrollContainer>
      </Box>
    );
  };
  
  export default DynamicStateCards;
  
