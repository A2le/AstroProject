import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import EventCardList from './EventCard'; // Ensure correct import

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
}

// Sample event data
const events: Event[] = [
  { id: 1, name: 'Event Today', status: 'Live', location: 'Venue A', start_date: '2025-03-18', start_time: '10:00 AM', end_time: '2:00 PM', views: 100, tickets_sold: 50, capacity_venue_base: 200, image: '/photo1.jpg' },
  { id: 2, name: 'Event Today2', status: 'Live', location: 'Venue B', start_date: '2025-03-18', start_time: '10:00 AM', end_time: '2:00 PM', views: 100, tickets_sold: 50, capacity_venue_base: 200, image: '/black-coffee-dj.jpg' },
  { id: 3, name: 'Event Tomorrow', status: 'Live', location: 'Venue C', start_date: '2025-03-19', start_time: '1:00 PM', end_time: '4:00 PM', views: 75, tickets_sold: 30, capacity_venue_base: 150, image: '/audience.jpg' },
  { id: 4, name: 'Event Tomorrow2', status: 'Live', location: 'Venue D', start_date: '2025-03-19', start_time: '1:00 PM', end_time: '4:00 PM', views: 75, tickets_sold: 30, capacity_venue_base: 150, image: '/Imagine.jpg' },
  { id: 5, name: 'Event Next Week', status: 'Live', location: 'Venue E', start_date: '2025-03-25', start_time: '3:00 PM', end_time: '6:00 PM', views: 200, tickets_sold: 100, capacity_venue_base: 300, image: '/wedding-event-management.jpg'  },
  { id: 6, name: 'Event Next Month', status: 'Live', location: 'Venue F', start_date: '2025-04-28', start_time: '5:00 PM', end_time: '9:00 PM', views: 50, tickets_sold: 10, capacity_venue_base: 100, image: '/outdoor.jpg'  }
];

const CategoryTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => setSelectedTab(newValue);

  // Get current date
  const today = new Date().toISOString().split('T')[0];

  // Filter events based on selected tab
  const filteredEvents = events.filter(event => {
    const eventDate = event.start_date;
    switch (selectedTab) {
      case 0: return eventDate === today;
      case 1: return eventDate === new Date(Date.now() + 86400000).toISOString().split('T')[0]; // Tomorrow
      case 2: return new Date(eventDate) > new Date(today) && new Date(eventDate) <= new Date(Date.now() + 7 * 86400000);
      case 3: return new Date(eventDate) > new Date(Date.now() + 7 * 86400000);
      default: return false;
    }
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Discover Events Based on what you like(Select category)
        </Typography>
      </Box>
      {/* Tabs for filtering events */}
      <Tabs value={selectedTab} onChange={handleChange} centered sx={{fontWeight: 700}}>
        <Tab label="Geeneral Event" />
        <Tab label="Concerts  " />
        <Tab label="workshop" />
        <Tab label="sport" />
        <Tab label="political" />
        <Tab label="seminar" />
      </Tabs>

      {/* Pass filtered events list to EventCardList */}
      <EventCardList events={filteredEvents} />
    </Box>
  );
};

export default CategoryTabs;