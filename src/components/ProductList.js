import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <Paper>
      <Typography variant="h5" gutterBottom>Top Products</Typography>
      <List>
        {products.map(product => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`Price: ${product.price}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ProductList;
