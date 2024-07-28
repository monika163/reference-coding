const Razorpay = require("razorpay");

// apiKey = "rzp_test_SGhq40ZcIAn2ab";
// apiSecret = "OYyTmfSKvAnbGf";

apiKey = "rzp_test_oqszrWeNT1rlAN";
apiSecret = "CSQAFjvjRDOwyatqdfQgP9he";

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret
});

module.exports = razorpay;
