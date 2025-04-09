import { useMediaQuery, Container, Link, Typography, Stack, Box, IconButton } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: 'grey.800', py: 4, color: 'white' }}> {/* Grey background */}
      <Container maxWidth="xl">
        <Stack spacing={3}>
          {/* Logo at the top left */}
          <Box component="img" src={'./amusema_logo_v2.png'} alt="Logo" sx={{ width: 120, height: 'auto' }} />

          {/* Terms & Policies */}
          <Stack
            direction={matchDownSM ? 'column' : 'row'}
            justifyContent={matchDownSM ? 'center' : 'space-between'}
            spacing={2}
            textAlign={matchDownSM ? 'center' : 'inherit'}
          >
            <Typography variant="subtitle2">
              This site is protected by{' '}
              <Link href="https://amusema.com/company-privacy" target="_blank" underline="hover" color="inherit">
                Privacy Policy
              </Link>
            </Typography>

            <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
              <Link href="https://amusema.com/company-terms" target="_blank" underline="hover" color="inherit">
                Terms and Conditions
              </Link>
              <Link href="https://amusema.com/company-privacy" target="_blank" underline="hover" color="inherit">
                Privacy Policy
              </Link>
              <Link href="https://amusema.com/company-refund" target="_blank" underline="hover" color="inherit">
                Refund Policy
              </Link>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 3, borderTop: '1px solid grey', pt: 2 }} // Line above social media
          >
            <Typography variant="body2">Support:</Typography>
            <Typography variant="body2">
            hello@app.amusema.com</Typography>
          </Stack>

          {/* Social Media Section */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 3, borderTop: '1px solid grey', pt: 2 }} // Line above social media
          >
            <Typography variant="body2">Find us on the socials:</Typography>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={2}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthFooter;
