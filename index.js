const express = require('express');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

const app = express();
const port = 80;

app.use('/', pokeneaRoutes);

app.listen(port, () => {
  console.log(`Pokenea app listening on port ${port}`);
});
