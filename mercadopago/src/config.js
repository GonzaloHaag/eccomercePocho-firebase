import {config} from 'dotenv';
config();

export const PORT = process.env.PORT || 4000; //Para detectar el puerto del navegador o el 4000(el que yo quiero)
export const MERCADOPAGO_TOKEN  = process.env.MERCADOPAGO_TOKEN;
