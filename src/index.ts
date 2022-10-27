import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './instances/db';

const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

sequelize
  .authenticate()
  .then(async () => {
    console.log('database connected');

    try {
      await sequelize.sync({ force: true });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((e: any) => {
    console.log(e.message);
  });

app.get('/', (req, res, next) => {
  res.json('Hello world');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
