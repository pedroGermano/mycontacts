const express = require('express');

const app = express()

app.get('/teste', (request, response) => {
  response.send('Hello World')
  response.send('Hello World')
});


app.listen(3000, () => console.log('🔥 Server stardet at http://localhost:3000'));