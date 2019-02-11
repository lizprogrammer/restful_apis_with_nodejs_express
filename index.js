import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// passing the express instance for the routes
routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);

// mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connection('mongodb://localhost/CRMdb', {
//   useMongoClient: true
// });

// bodyparser for
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// server static files
app.use(express.static('public'));

