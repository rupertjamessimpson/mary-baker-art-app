import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#9ED7E6', // Light blue
      },
      secondary: {
        main: '#F9B87F', // Light orange
      },
      background: { // Background color options
        default: '#F5F5F5', // Very light gray
        paper: '#E0E0E0', // Light gray for content areas
      },
      text: { // Text color options
        primary: '#333333', // Black for main text
        secondary: '#999999', // Dark gray for secondary text
      },
    },
  });

export default theme;