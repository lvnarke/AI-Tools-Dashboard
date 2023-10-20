import { Card as MUICard, CardMedia, CardContent, Typography, Box } from '@mui/material';

function Card({ image, title, description, tags,onClick }) {
    return (
        <MUICard sx={{ 
            maxWidth: 345, 
            m: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Adjusted the alpha value to 0.2
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            color: 'white'  // Set text color to white
        }}onClick={onClick}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    {tags.map(tag => <Typography key={tag} variant="caption" component="span" sx={{ mr: 1 }}>{tag}</Typography>)}
                </Box>
            </CardContent>
        </MUICard>
    );
}

export default Card;
