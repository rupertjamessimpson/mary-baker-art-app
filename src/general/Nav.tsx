import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Tabs, Tab, Box } from '@mui/material';

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="nav nav-overline">
      <Box display="flex" justifyContent="space-between">
        <Tabs value={pathname} textColor="primary" indicatorColor="primary">
          <Tab 
            component={Link}
            to="/painting"
            label="PAINTINGS"
            value="/painting"
          />
          <Tab 
            component={Link}
            to="/photography"
            label="PHOTOGRAPHY"
            value="/photography"
          />
          <Tab 
            component={Link}
            to="/digital"
            label="DIGITAL"
            value="/digital"
          />
          <Tab 
            component={Link}
            to="/charcoal"
            label="CHARCOAL"
            value="/charcoal"
          />
          <Tab 
            component={Link}
            to="/mary"
            label="MARY BAKER"
            value="/mary"
          />
        </Tabs>
      </Box>
    </nav>
  );
}

export default Nav;
