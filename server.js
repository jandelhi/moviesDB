'use strict';

import express from 'express';
import 'babel-polyfill';
import Review from './src/controller/Review';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/say', (req, res) => {
  res.send('say something!\n');
});

app.post('/v1/review', Review.create);
app.get('/v1/review', Review.getAll);
app.get('/v1/review/:id', Review.getOne);
app.put('/v1/review/:id', Review.update);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);