import {Router} from 'express';

import { createOrder, reciveWebhook } from '../controllers/payment.controller.js';

const router = Router();

router.post('/create-order', createOrder); //Ese create order tiene el req,res y lo que tiene que responder

router.get('/success',(req,res) => {
    res.send('pago success');
});
router.get('/failure',(req,res) => {
    res.send('pago fallado');
});
router.get('/pending',(req,res) => {
    res.send('pago pendiente');
});
router.post('/webhook',reciveWebhook);


export default router;