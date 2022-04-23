const router = require("express").Router()
const Razorpay = require("razorpay")

var instance = new Razorpay({
  key_id: "rzp_test_WVu8bni55PVN2d",
  key_secret: "dVFjJRoia3zCc9B8gg4lQr7R",
});


router.post("/payment", async (req, res, next) => {
    const { amount } = req.body;
  
    var params = await {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "su001",
      payment_capture: "1",
    };
    
    await instance.orders
      .create(params)
      .then((data) => {
        return res.send({ sub: data, status: "success" });
      })
      .catch((error) => {
        console.log(error, "Razorpay");
        return res.send({ sub: error, status: "failed" });
      });
  });



module.exports = router