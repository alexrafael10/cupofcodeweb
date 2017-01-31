var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/send', function(req, res) {
  smtpTransport.sendMail({
    from: "Sender Name <master@cupofcodeteam.com>",
    to: "Receiver Name <alexrafael10@gmail.com>",
    subject: "Emailing with nodemailer",
    text: "Email example"
  }, function (error,response){
    if (error){
      console.log(error);
    }else{
      console.log("Message sent: " + response.message);
    }
  });
});

module.exports = router;
