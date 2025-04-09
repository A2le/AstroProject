import { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, Stack } from '@mui/material';
import EventCardList from './EventCard';

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
  tags: string[];
}

const events: Event[] = [
  { id: 1, name: 'Event Today', status: 'Live', location: 'Venue A', start_date: '2025-04-02', start_time: '10:00 AM', end_time: '2:00 PM', views: 100, tickets_sold: 50, capacity_venue_base: 200, image: '/photo1.jpg', tags: ["Sports", "Food and Drinks"] },
  { id: 2, name: 'Event Today2', status: 'Live', location: 'Venue B', start_date: '2025-04-02', start_time: '10:00 AM', end_time: '2:00 PM', views: 100, tickets_sold: 50, capacity_venue_base: 200, image: '/black-coffee-dj.jpg', tags: ["Webinar"] },
  { id: 3, name: 'Event Tomorrow', status: 'Live', location: 'Venue C', start_date: '2025-04-03', start_time: '1:00 PM', end_time: '4:00 PM', views: 75, tickets_sold: 30, capacity_venue_base: 150, image: '/audience.jpg', tags: ["Theater", "Workshop"] },
  { id: 4, name: 'Event Tomorrow2', status: 'Live', location: 'Venue D', start_date: '2025-04-04', start_time: '1:00 PM', end_time: '4:00 PM', views: 75, tickets_sold: 30, capacity_venue_base: 150, image: '/Imagine.jpg', tags: ["Sports", "Kids"] },
  { id: 5, name: 'Event Next Week', status: 'Live', location: 'Venue E', start_date: '2025-05-07', start_time: '3:00 PM', end_time: '6:00 PM', views: 200, tickets_sold: 100, capacity_venue_base: 300, image: '/wedding-event-management.jpg', tags: ["Kids", "Trips and Adventure"] },
  { id: 6, name: 'Event Next Month', status: 'Live', location: 'Venue F', start_date: '2025-05-30', start_time: '5:00 PM', end_time: '9:00 PM', views: 50, tickets_sold: 10, capacity_venue_base: 100, image: '/outdoor.jpg', tags: ["Business", "Fashion"] }
];

const EventTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setSelectedTag(null); // Reset tag filter when tab changes
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(prev => (prev === tag ? null : tag));
  };

  const today = new Date().toISOString().split('T')[0];

  // Filter events by date first
  const filteredByDate = events.filter(event => {
    const eventDate = event.start_date;
    switch (selectedTab) {
      case 0: return eventDate === today;
      case 1: return eventDate === new Date(Date.now() + 86400000).toISOString().split('T')[0];
      case 2: return new Date(eventDate) > new Date(today) && new Date(eventDate) <= new Date(Date.now() + 7 * 86400000);
      case 3: return new Date(eventDate) > new Date(Date.now() + 7 * 86400000);
      default: return false;
    }
  });

  const filteredEvents = selectedTag
    ? filteredByDate.filter(event => event.tags.includes(selectedTag))
    : filteredByDate;

  const uniqueTags = Array.from(new Set(events.flatMap(event => event.tags)));

  return (
    <Box>
      <Box marginBottom={4} textAlign="center">
        <Typography variant="h4" fontWeight={700}>Events</Typography>
        <Typography variant="h6" color="text.secondary">Filter events by category and date.</Typography>
      </Box>

      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Today" />
        <Tab label="Tomorrow" />
        <Tab label="Next Week" />
        <Tab label="Next Month" />
      </Tabs>

      <Stack direction="row" spacing={1} justifyContent="center" mt={2} flexWrap="wrap">
        {uniqueTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'contained' : 'outlined'}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </Stack>
      

      <EventCardList events={filteredEvents} />
    </Box>
  );
};

export default EventTabs;
