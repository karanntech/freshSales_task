const express = require('express');
const axios = require('axios');
const router = express.Router();

// Configuration
const API_KEY = process.env.FRESHSALES_API_KEY;
const BASE_URL = '';


const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Token token=${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Create a new contact
router.post('/', async (req, res) => {
  try {
    const response = await apiClient.post('/', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Retrieve a contact by ID
router.get('/:id', async (req, res) => {
  try {
    const response = await apiClient.get(`/${req.params.id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Update a contact by ID
router.put('/:id', async (req, res) => {
  try {
    const response = await apiClient.put(`/${req.params.id}`, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Delete a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    await apiClient.delete(`/${req.params.id}`);
    res.status(204).end();
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

module.exports = router;
