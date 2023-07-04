import {config} from 'dotenv';
config();

export const PORT = 4000;
export const MERCADOPAGO_TOKEN  = process.env.MERCADOPAGO_TOKEN;
