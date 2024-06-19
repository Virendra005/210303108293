import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const CompanyList = ({ companies, onSelectCompany }) => {
  return (
    <Paper>
      <Typography variant="h5" gutterBottom>Companies</Typography>
      <List>
        {companies.map(company => (
          <ListItem button key={company.id} onClick={() => onSelectCompany(company.id)}>
            <ListItemText primary={company.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CompanyList;
