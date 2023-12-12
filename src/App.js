import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Box } from '@mui/material';
import Dashboard from './components/Dashboard';
import CheatSheet from './components/CheatSheet';
import data from './cardData.json';

function App() {
    const [currentPage, setCurrentPage] = useState('cards'); // Initial state is set to 'cards'
    const [selectedCard, setSelectedCard] = useState(null);

    return (
      <div style={{ 
          backgroundImage: `url("bg3.jpg")`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
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

<div style={{ display: 'flex' }}>
                <Container component="main" maxWidth="lg" style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(7px)',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
                    minHeight: '100vh',
                    marginTop: '20px'
                }}>
                    <Dashboard data={data} onCardClick={setSelectedCard} />
                </Container>

                {selectedCard && (
                    <div style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                        backdropFilter: 'blur(5px)', 
                        borderRadius: '10px', 
                        border: '2px solid rgba(255, 255, 255, 0.1)', 
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        width: '40%',
                        marginLeft: '20px',
                        marginTop: '20px',
                        height: selectedCard ? '78vh' : 'auto',  // Set the height to 90% of the viewport height only when a card is selected
                        overflowY: selectedCard ? 'auto' : 'visible',
                        textColor: 'white',
                        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out',
                        transform: selectedCard ? 'translateX(0)' : 'translateX(100%)', // Slide in/out based on selection
                        opacity: selectedCard ? 1 : 0,  // Fade in/out based on selection
                        visibility: selectedCard ? 'visible' : 'hidden'
                        
                    }}>
                        {/* Render card details here */}
                        <h2>{selectedCard.title}</h2>
                        <p>{selectedCard.description}</p>
                        <button onClick={() => setSelectedCard(null)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
