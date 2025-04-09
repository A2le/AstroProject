import React, { useState, useRef } from "react";
import { AppBar, Toolbar, Button, TextField, Select, MenuItem, Box, Container, Typography, IconButton, Grid, } from "@mui/material";
import { styled } from "@mui/system";
import FeatureList from "./FeatureList";
import EventTabs from "./Tabs";
import Security from "./Security";
import DynamicStateCards from "./DynamicStateCards";
import EventOrganiserBox from "./EventOrganiserBox";
import AuthFooter from "./Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import CategoryTabs from "./CategoryTabs";
import TopPicks from "./TopPics";
import EventSlider from "./EventSlider";
import { useFormik } from 'formik';


const eventImage = "/images.jpeg";

const theme = createTheme();


const eventsData = [
  { title: "Concert Night", description: "Live music event", date: "25/03/2025", image: "/photo1.jpg",event_status_lookup_id: 11 },
  { title: "Art Exhibition", description: "Modern art showcase", date: "10/04/2025", image: "/black-coffee-dj.jpg",event_status_lookup_id: 11 },
  { title: "News Cafe", description: "Taste the best dishes", date: "05/05/2025", image: "audience.jpg" ,event_status_lookup_id: 11},
  { title: "Food Festival", description: "sport event with half time show", date: "05/05/2025", image: "outdoor.jpg",event_status_lookup_id: 11 },
  { title: "Disney Land", description: "another description ran out of words", date: "05/05/2025", image: "wedding-event-management.jpg",event_status_lookup_id: 11 },
  { title: "some other name of something", description: "Taste the best dishes", date: "05/05/2025", image: "search.jpg" ,event_status_lookup_id: 11},
  { title: "word of mouth", description: "Taste the best dishes", date: "05/05/2025", image: "Imagine.jpg",event_status_lookup_id: 11 },
];

const CardText = styled("div")({
  position: "relative",
  zIndex: 2,
  textAlign: "left",
  fontSize: "16px",
  fontWeight: "bold",
  wordWrap: "break-word",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2, // Limits text to 2 lines
});

// Sticky Top Navbar
const Navbar = () => {
  const [location, setLocation] = useState("");

  return (
    <AppBar 
      position="fixed" 
      sx={{ backgroundColor: "#fff", padding: "8px 0", boxShadow: "none", zIndex: 1100 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src="/amusema_logo_v2.png" alt="Amusema Logo" style={{ height: "40px" }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField placeholder="Search events..." variant="outlined" size="small" sx={{ width: "300px" }} />
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            displayEmpty
            size="small"
            sx={{ backgroundColor: "gray", color: "#fff" }}
          >
            <MenuItem value="">All Locations</MenuItem>
            <MenuItem value="Sandton">Sandton</MenuItem>
            <MenuItem value="Soweto">Soweto</MenuItem>
            <MenuItem value="Braamfischer">Braamfischer</MenuItem>
          </Select>
        </Box>

        <Box>
          <Button variant="text" sx={{ color: "#000", marginRight: "8px" }}>Sign In</Button>
          <Button variant="contained" sx={{ backgroundColor: "gray", color: "#fff" }}>Create Event</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};



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

const HomePage = () => {

  return (
    
    <Container maxWidth={false}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <EventSlider/>

        <TopPicks events={eventsData} />


        {/* <Box sx={{ marginTop: "40px", textAlign: "center", overflow: "hidden", paddingBottom: "16px" }}>
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
            {[...Array(10)].map((_, index) => (
              <EventCard key={index} style={{ backgroundImage: `url(${eventImage})` }}>
                <CardOverlay />
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }}>
                  <MenuIcon />
                </IconButton>
                <CardText>Event title goes here:</CardText>
                <CardText>A longer title can also </CardText>
                <CardText>be applied.</CardText>
                <CardText>Date: {index + 1} 2025</CardText>
              </EventCard>
            ))}
          </ScrollContainer>
        </Box> */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Container>
            <EventTabs />
          </Container>
        </Box>

        {/* <Box sx={{ mt: 4, textAlign: "center" }}>
          <Container>
            <CategoryTabs/>
          </Container>
        </Box> */}

        <BrowserRouter>
          <Box>
              <DynamicStateCards/>
          </Box>
        </BrowserRouter>
        
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Container>
            <EventOrganiserBox/>
          </Container>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
            <FeatureList />
        </Box>


        <Box sx={{ mt: 4, textAlign: "center" }}>
            <Security />
        </Box>
        
        <Box sx={{ mt: 4, textAlign: "center",  borderTop: '1px solid grey', pt: 2 }}>
            <AuthFooter/>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default HomePage;