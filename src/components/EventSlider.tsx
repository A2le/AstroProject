import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { capitalize, Grid, Stack, Typography, TextField, Select, Box, MenuItem } from "@mui/material";

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  description?: string;
}

const events: Event[] = [
  { id: 1, title: "{name of event}", date: "2025-04-10", image: "/black-coffee-dj.jpg", description: "This is where the description of this thing will go" },
  { id: 2, title: "{name of event}", date: "2025-06-22", image: "/photo1.jpg", description: "This is where the description of this thing will go" },
  { id: 3, title: "{name of event}", date: "2025-08-15", image: "/Imagine.jpg", description: "This is where the description of this thing will go" },
];

const EventSlider = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4 relative">
      <Grid container sx={{ mx: 8, my: 2, p: 1, width: "90%", justifyContent: "center", alignItems: "flex-end", pb: 8 }}>
        <div className="absolute top-6 left-6 w-2/3 z-50">
          <TextField
            fullWidth
            label="Search events..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 100 // Ensures it appears above the slider
            }}
          />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="h-[400px]" // Increase height to fit content better
        >
          {filteredEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                {/* Darkened Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  width={'100%'}
                  className="w-full h-full object-cover"
                  height={500}
                  style={{
                    filter: "brightness(0.4)", // Darken the image
                    objectFit: "cover",
                    borderRadius: 8
                  }}
                />

                {/* Event Info Overlay */}
                <Stack
                  sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    color: "white",
                    zIndex: 5, // Ensure text is above overlay
                    maxWidth: "80%"
                  }}
                >
                  <Typography fontSize={40} fontWeight={600}>
                    {capitalize(event.title)}
                  </Typography>
                  <Typography fontSize={16} fontWeight={400} sx={{ mt: 1 }}>
                    {event.description}
                  </Typography>
                </Stack>
                <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  fullWidth
                  label="Search events..."
                  variant="outlined"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </div>
  );
};

export default EventSlider;
