import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Box } from '@mui/material';
import Dashboard from './components/Dashboard';
import CheatSheet from './components/CheatSheet';
import data from './cardData.json';

function App() {
    const [currentPage, setCurrentPage] = useState('cards'); // Initial state is set to 'cards'

    return (
      <div style={{ 
        backgroundImage: `url("bg3.jpg")`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',  // This creates the parallax effect
        minHeight: '100vh' 
    }}>
            <div style={{ paddingTop: '20px' }}> {/* This div wraps the AppBar and pushes it down */}
    <AppBar 
        position="static" 
        style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '72%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '20px',
        }}
    >
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                AI Dashboard
            </Typography>
            <Button color="inherit" onClick={() => setCurrentPage('cards')}>Cards</Button>
            <Button color="inherit" onClick={() => setCurrentPage('cheatsheet')}>CheatSheet</Button>
        </Toolbar>
    </AppBar>
</div>

            <Container component="main"  style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        minHeight: '100vh',
        marginTop: '20px'
    }}>
                <CssBaseline />
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                      
                    </Typography>
                    {currentPage === 'cards' && (  // Render content conditionally
                        <div id="cards">
                            <Dashboard data={data} />
                        </div>
                    )}
                    {currentPage === 'cheatsheet' && (  // Render content conditionally
                        <div id="cheatsheet">
                            <CheatSheet />
                        </div>
                    )}
                </Box>
            </Container>
        </div>
    );
}

export default App;
