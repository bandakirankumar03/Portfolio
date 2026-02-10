import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Contact from './components/Contact';
import ProjectDetail from './components/Projectdetails/ProjectDetail'; // ← Add this import
import StillImages from './components/StillImages';
import ProjectUpload from "./components/ProjectUpload";
import DreamRide from "./components/Projectdetails/DreamRide";
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    primary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h4: {
      fontWeight: 300,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/still-images" element={<StillImages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} /> {/* ← New route */}
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/project/dreamride" element={<DreamRide />} />
            <Route path="/upload" element={<ProjectUpload />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
