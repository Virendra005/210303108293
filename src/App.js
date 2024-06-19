import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyList from './components/CompanyList';
import ProductList from './components/ProductList';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/data.json')
      .then(response => {
        setCompanies(response.data.companies);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching companies:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      setLoading(true);
      axios.get('/data.json')
        .then(response => {
          setProducts(response.data.products[selectedCompany]);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }
  }, [selectedCompany]);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Top Products</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CompanyList companies={companies} onSelectCompany={setSelectedCompany} />
        </Grid>
        <Grid item xs={12} md={8}>
          {loading ? (
            <CircularProgress />
          ) : (
            selectedCompany && <ProductList products={products} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
