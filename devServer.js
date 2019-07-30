import express from 'express';
import rf from 'fs-readfile-promise';
import path from 'path';

const app = express();

(async () => {

  //index
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  });

  //set up middleware to serve static files in /dist
  app.use('/static', express.static(path.join(__dirname, 'www_static_dist')));

  let port = process.env.PORT || 3000;

  //start server
  app.listen(port, () => console.log(`App running on port ${port}`));

})();