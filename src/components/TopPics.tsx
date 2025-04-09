import React, { useRef } from "react";
import { Box, Typography, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Event type definition
interface Event {
    id: number;
    name: string;
    status: string;
    location: string;
    start_date: string;
    start_time: string;
    end_time: string;
    views: number;
    tickets_sold: number;
    capacity_venue_base: number;
    image: string;
    description: string
  }

// Scrollable Container for Events
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

const EventCard = styled("div")({
  minWidth: "200px",
  height: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  color: "#fff",
  fontSize: "16px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  position: "relative",
  overflow: "hidden",
  padding: "16px",
});

const CardOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
});

const TopPicks = ( { events }: { events: Event[] }) => {
  const scrollRef = useRef(null);

  // Handle mouse events for scrolling
  const handleMouseDown = () => {};
  const handleMouseMove = () => {};
  const handleMouseUp = () => {};
  const handleMouseLeave = () => {};

  return (
    <Box sx={{ marginTop: "40px", textAlign: "center", overflow: "hidden", paddingBottom: "16px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px", fontWeight: "bold", textAlign: "left", paddingLeft: "16px" }}>
        Top Picks
      </Typography>
      <ScrollContainer
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {events.map((event, index) => (
          <EventCard key={index} style={{ backgroundImage: `url(${event.image})` }}>
            <CardOverlay />
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">{event.name}</Typography>
            <Typography variant="body2">{event.description}</Typography>
            <Typography variant="body2">Date: {event.start_date}</Typography>
          </EventCard>
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default TopPicks;
