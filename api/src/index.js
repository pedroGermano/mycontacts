const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);
// app.use(routes);
// app.use(routes);

app.listen(3001, () => console.log('🔥 Server stardet at http://localhost:3001'));