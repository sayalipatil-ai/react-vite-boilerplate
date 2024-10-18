import React from 'react';
import { Card, Box, Typography, Grid } from '@mui/material';

const cardData = [
  { color: '#2f4a94', title: '22', subtitle: 'Total Cards' },
  { color: '#96e9eb', title: '18', subtitle: 'Fully Approved' },
  { color: '#edd5ed', title: '1', subtitle: 'Rejected' },
  { color: '', title: '2', subtitle: 'Created' },
  { color: '#edbc77', title: '1', subtitle: 'Partially Approved' },
];

const CircleCard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
       <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: '16px', maxWidth: 400, flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Box 
                sx={{ 
                  width: 15, 
                  height: 15, 
                  backgroundColor: card.color, 
                  borderRadius: '50%' 
                }} 
              />
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                {card.title}
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: '8px' }}>
              {card.subtitle}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CircleCard;
