import mercadopago from 'mercadopago';
import { MERCADOPAGO_TOKEN } from '../config.js';


// export const createOrder = async (req,res) => {

//       mercadopago.configure({
//         access_token : MERCADOPAGO_TOKEN //Acces token de cuenta de prueba(incognito)
//       });
//       const resultado = await mercadopago.preferences.create({
//         items : [
//             {
//                 title: "Laptop Lenovo",
//                 unit_price : 2350,
//                 currency_id : "ARS", //pesos argentinos
//                 quantity : 1,
//             }
//         ],
//         back_urls : {
//             success : 'http://localhost:4000/success',
//             failure : 'http://localhost:4000/failure',
//             pending : 'http://localhost:4000/pending'
//         },
//         notification_url : 'https://3bce-190-183-202-163.ngrok-free.app/webhook'
//       })
//       console.log(resultado);
//     res.send(resultado.body);
// }
export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_TOKEN // Access token de cuenta de prueba (incognito)
  });

  const { items } = req.body;

  const productos = items.map((item) => ({
    title: item.title,
    unit_price: item.unit_price,
    currency_id: item.currency_id,
    quantity: item.quantity
  }));

  const resultado = await mercadopago.preferences.create({
    items: productos,
    back_urls: {
      success: 'http://localhost:4000/success',
      failure: 'http://localhost:4000/failure',
      pending: 'http://localhost:4000/pending'
    },
    notification_url: 'https://3bce-190-183-202-163.ngrok-free.app/webhook'
  });

  console.log(resultado);
  res.send(resultado.body);
};



export const rutaPrincipal = async (req, res) => {
  res.json("Hello");
  console.log('Hello')
}

export const reciveWebhook = async (req,res) => {
    console.log(req.query);
    const payment = req.query;
    try {
    if(payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log(data);
      //Esto lo podemos guardar en base de datos
    
    }
    res.sendStatus(204);
  }
  catch(err) {
    console.log(err);
    return res.sendStatus(500).json({err : err.message});
  }
}