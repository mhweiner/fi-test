import express from 'express';
import path from 'path';
import {getWalks} from './api';

const app = express();

(async () => {

  //index
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../ReactWebApp/index.html'))
  });

  //api
  app.get('/api/walks', getWalks);

  //set up middleware to serve static files in /dist
  app.use('/static', express.static(path.join(__dirname, '../www_static_dist')));

  let port = process.env.PORT || 3000;

  //start server
  app.listen(port, () => console.log(`App running on port ${port}`));

})();