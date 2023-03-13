const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const https = require('https');
const axios = require('axios')
const PORT = 8080


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/', express.static(__dirname + "/html")) //serve static content

app.post('/pay-by-prime', (req, res, next) => {
    const post_data = {
        "prime": req.body.prime,
        "partner_key": "partner_6ID1DoDlaPrfHw6HBZsULfTYtDmWs0q0ZZGKMBpp4YICWBxgK97eK3RM",
        "merchant_id": "GlobalTesting_CTBC",
        "amount": 1,
        "currency": "TWD",
        "details": "An apple and a pen.",
        "cardholder": {
            "phone_number": "+886923456789",
            "name": "jack",
            "email": "example@gmail.com"
        },
        "remember": false
    }

    axios.post('https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime', post_data, {
        headers: {
            'x-api-key': 'partner_6ID1DoDlaPrfHw6HBZsULfTYtDmWs0q0ZZGKMBpp4YICWBxgK97eK3RM'
        }
    }).then((response) => {
        console.log(response.data);
        return res.json({
            result: response.data
        })
    })

})

app.listen(PORT, () => {
    console.log('Connet your webiste in the http://localhost:8080/');
})