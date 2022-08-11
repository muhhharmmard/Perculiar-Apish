import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const BuyProd =({user, amount })=>{
  try{
  const config = {
    public_key: "FLWPUBK_TEST-f22ca9162b9beb43d195f0345865e781-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
     payment_options:"card",
    payment_plan:"3341",
    customer: {
      email:user.email ,
      phonenumber: '07064586146',
      name: user.name,
    },
    meta : {
      counsumer_id: "7898", 
      consumer_mac: "kjs9s8ss7dd" },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               alert(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Buy now
      </button>
    </div>
  );
  }
  /* code */
 catch (e) {
  alert(e)
}
}


export default BuyProd
