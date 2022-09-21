import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="white">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '220px', height: '95px' }} />
    </Stack>
    <Typography variant="h1" sx={{ fontSize: { lg: '20px', xs: '10px' } }} mt="30px" textAlign="center" pb="40px">Made with ❤️ by Shivank Joshi</Typography>
  </Box>
);

export default Footer;
