import express, { Application } from 'express';
import Router from './routes';
import morgan from 'morgan';

const PORT = 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
// app.use(express.static('public'));

app.use(Router);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
