var paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id: process.env.PAYPAL_ID,
  client_secret: process.env.PAYPAL_SECRET
});

function handleRedirect({ res, payment }) {
  //capture HATEOAS links
  var links = {};
  payment.links.forEach(function(linkObj) {
    links[linkObj.rel] = {
      href: linkObj.href,
      method: linkObj.method
    };
  });
  //if redirect url present, redirect user
  if (links.hasOwnProperty('approval_url')) {
    res.send({ redirect_url: links['approval_url'].href });
  } else {
    res.status(500).send({ error: { message: 'no redirect URI present' } });
  }
}

module.exports = ({ server }) =>
  server.post('/api/pay', (req, res) => {
    const { items, amount, redirect = true } = req.body;

    var create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000'
      },
      transactions: [
        {
          item_list: {
            items
          },
          amount,
          description: 'This is the payment description.'
        }
      ]
    };

    paypal.payment.create(create_payment_json, function(error, payment) {
      if (error) {
        res.status(500).send({ error });
        throw error;
      } else {
        if (redirect) {
          console.log('redirect');

          handleRedirect({ res, payment });
        } else {
          res.send(payment);
        }
      }
    });
  });
