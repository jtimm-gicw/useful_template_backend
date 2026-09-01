'use strict';

/*
========================================================
EXPRESS SERVER
========================================================
This file creates and exports the Express application.

IMPORTANT:
We do NOT call app.listen() in this file.

That allows Supertest to import the app and test it
without starting a real server.
========================================================
*/

const express = require('express');

const app = express();

/*
========================================================
MIDDLEWARE
========================================================
*/

app.use(express.json());

/*
========================================================
TEST DATA
========================================================
Simple data for our example API.
========================================================
*/

let foods = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Tacos' },
];

/*
========================================================
GET ROUTE
========================================================
GET /api/v1/foods

Returns all foods.
========================================================
*/

app.get('/api/v1/foods', (req, res) => {
  res.status(200).json(foods);
});

/*
========================================================
GET ONE ROUTE
========================================================
GET /api/v1/foods/:id

Returns one food.
========================================================
*/

app.get('/api/v1/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  const food = foods.find((food) => food.id === id);

  if (!food) {
    return res.status(404).json({
      error: 'Food not found',
    });
  }

  res.status(200).json(food);
});

/*
========================================================
POST ROUTE
========================================================
POST /api/v1/foods

Creates a new food.
========================================================
*/

app.post('/api/v1/foods', (req, res) => {
  const newFood = {
    id: foods.length + 1,
    name: req.body.name,
  };

  foods.push(newFood);

  res.status(201).json(newFood);
});

/*
========================================================
PUT ROUTE
========================================================
PUT /api/v1/foods/:id

Updates an existing food.
========================================================
*/

app.put('/api/v1/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  const food = foods.find((food) => food.id === id);

  if (!food) {
    return res.status(404).json({
      error: 'Food not found',
    });
  }

  food.name = req.body.name;

  res.status(200).json(food);
});

/*
========================================================
DELETE ROUTE
========================================================
DELETE /api/v1/foods/:id

Deletes an existing food.
========================================================
*/

app.delete('/api/v1/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  const food = foods.find((food) => food.id === id);

  if (!food) {
    return res.status(404).json({
      error: 'Food not found',
    });
  }

  foods = foods.filter((food) => food.id !== id);

  res.status(200).json({
    message: 'Food deleted',
  });
});

/*
========================================================
EXPORT APP
========================================================
Supertest imports this app.
========================================================
*/

module.exports = app;
