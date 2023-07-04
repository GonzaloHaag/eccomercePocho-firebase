import express from 'express';
import morgan from 'morgan';
import paymentRutas from './src/rutas/payment.rutas.js';
import {PORT} from './src/config.js';

import cors from 'cors'

const app = express();
app.use(cors(
    {
        origin : 'https://eccomerce-pocho-firebase-mercadopago.vercel.app/',
        methods : ['POST','GET'],
        credentials : true
    }
));

app.use(express.json());

app.use(morgan('dev')); //Da informacion sobre las peticiones en mi consola
app.get('/',(req,res)=> {
    res.json("Hello");
})
app.use(paymentRutas);
app.listen(PORT);
console.log('SERVER EN PUERTO: ' , PORT);