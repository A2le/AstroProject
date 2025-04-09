import { useState, type JSX } from 'react';
import {
  Avatar,
  Box,
  Button,
  capitalize,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';
import { MoreOutlined, EyeOutlined } from '@ant-design/icons';
import MainCard from './MainCard';
import { FiRrClock, FiRsMapMarkerHome, FiRsTicket } from './custom-icons';
import { navigate } from 'astro:transitions/client';
import { CalendarMonth } from '@mui/icons-material';
import { startDay, startMonth, startYear } from './custom-formats';

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

const EventCard = ({ event }: { event: Event }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Extract day & month from date
  const [year, month, day] = event.start_date.split('-');
  const [, setStyle] = useState({
    display: 'none',
    maxHeight: '36px',
    maxWidth: '34px',
    minWidth: '34px',
    padding: '6px 5px',
    justifyItems: 'center'
  });
  const [bgc, SetBgC] = useState('transparent');

  return (
    <MainCard sx={{
      height: 1,
      '& .MuiCardContent-root': { height: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'transparent' },
      border: '1px solid black'
    }}
    onClick={() => {
    }}>
      <Box sx={{ width: '125%', mt: -2.75, mx: -2.75, backgroundColor: 'transparent' }}>
          {/* <CardMedia
              className="dim"
              sx={{ height: 250, width: '113%', textDecoration: 'none', top: 0, right: 0 }}
              image={displayImage(event.banner_image, eventBanner)}
              component={Link}
            /> */}
          <img
            className="dim"
            src={`${event.image}`}
            width={'100%'}
            height={250}
            style={{ textDecoration: 'none', top: 0, right: 0, objectFit: 'cover', objectPosition: '0 50' }}
          />
        </Box>
        <Stack
          direction="row"
          alignItems="space-between"
          justifyContent="space-between"
          sx={{
            width: '100%',
            height: 250,
            position: 'absolute',
            top: 0,
            right: 0,
            pt: 1.25,
            pl: 2.75,
            pr: 2.75,
            backgroundColor: bgc
          }}
          onMouseEnter={(e) => {
            setStyle({
              display: 'flex',
              maxHeight: '36px',
              maxWidth: '34px',
              minWidth: '34px',
              padding: '6px 5px',
              justifyItems: 'center'
            });
            SetBgC('#2aa1af66');
          }}
          onMouseLeave={(e) => {
            setStyle({
              display: 'none',
              maxHeight: '36px',
              maxWidth: '34px',
              minWidth: '34px',
              padding: '6px 5px',
              justifyItems: 'center'
            });
            SetBgC('transparent');
          }}
        >
          <Grid>
            <Chip label={event.status} color="primary" size="small" />
          </Grid>
        </Stack>
      {/* Event Cover Image Placeholder */}

      {/* Menu for Event Actions */}
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
        <MenuItem>View Event</MenuItem>
        <MenuItem>Get Tickets</MenuItem>
      </Menu>

      <Divider />

      {/* Event Details */}
      <CardContent sx={{ p: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid color="primary" item xs={6}>
                  <List sx={{ p: 0, overflow: 'hidden', '& .MuiListItem-root': { px: 0, py: 0.5 } }}>
                    <ListItem sx={{ mt: 1 }}>
                      <ListItemIcon sx={{ mr: 1 }}>
                        <CalendarMonth />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{ fontFamily: 'Public Sans-Regular, Helvetica', fontSize: '12px', fontWeight: 400 }}
                            color="secondary[800]"
                          >
                            {startDay(event.start_date)}{' '}
                            {startMonth(event.start_date)}{' '}
                            {startYear(event.start_date)}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List sx={{ p: 0, overflow: 'hidden', '& .MuiListItem-root': { px: 0, py: 0.5 } }}>
                    <ListItem sx={{ mt: 1 }}>
                      <ListItemIcon sx={{ mr: 1 }}>
                        <FiRrClock className="fi-rr-clock" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{ fontFamily: 'Public Sans-Regular, Helvetica', fontSize: '12px', fontWeight: 400 }}
                            color="secondary[800]"
                          >
                            {' '}
                            {event.start_time} -{' '}
                            {event.end_time}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ height: 50 }}>
              <Typography
                sx={{
                  color: 'secondary.dark',
                  fontFamily: 'Public Sans-Bold, Helvetica',
                  fontSize: '16px',
                  fontWeight: 700,
                  height: '40px',
                  lineHeight: 'normal',
                  justifyItems: 'center',
                  my: 2
                }}
              >
                {capitalize(event.name)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List sx={{ p: 0, overflow: 'hidden', '& .MuiListItem-root': { px: 0, py: 0.5 } }}>
                <ListItem sx={{ mt: 0 }}>
                  <ListItemIcon sx={{ mr: 1 }}>
                    <FiRsMapMarkerHome className="fi-rs-map-marker" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontFamily: 'Public Sans-Regular, Helvetica', fontSize: '12px', fontWeight: 400 }}
                        color="secondary[800]"
                      >
                        {' '}
                        {event.location}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ mt: 1 }}>
                  <ListItemIcon sx={{ mr: 1 }}>
                    <FiRsTicket className="fi-rs-ticket" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontFamily: 'Public Sans-Regular, Helvetica', fontSize: '12px', fontWeight: 400 }}
                        color="secondary[800]"
                      >
                        {'Tickets sold: '}
                        {30 / event.capacity_venue_base !== 1 ? 30 + '/' + event.capacity_venue_base : 'Sold out'}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
    </MainCard>
  );
};

// Reusable Event Detail Component
const EventDetail = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {icon}
    <Typography>{text}</Typography>
  </Stack>
);

const EventCardList = ({ events }: { events: Event[] }) => {
  return (
    <>
      {/* Show message if there are no events */}
      {events.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 3, color: 'gray' }}>
          No events available
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ p: 2 }}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default EventCardList;
