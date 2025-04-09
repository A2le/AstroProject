import { Box, Typography, Button } from "@mui/material";

const EventOrganiserBox = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/event-9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        borderRadius: "10px",
        textAlign: "left",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "72vw",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Are you an event organiser?
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        Join the Amusema team
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default EventOrganiserBox;
