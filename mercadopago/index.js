import express from 'express';
import morgan from 'morgan';
import paymentRutas from './src/rutas/payment.rutas.js';
import { PORT } from './src/config.js';
import cors from 'cors';
import { rutaPrincipal } from './src/controllers/payment.controller.js';

const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.json());
app.use(morgan('dev'));

app.get('/', rutaPrincipal );


app.use(paymentRutas);

app.listen(PORT, () => {
  console.log('SERVER EN PUERTO:', PORT);
});
