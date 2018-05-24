const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

/* app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})