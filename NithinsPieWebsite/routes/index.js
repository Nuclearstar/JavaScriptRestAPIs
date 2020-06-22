var express = require('express');
var router = express.Router();
const apiHelper = require('../helpers/apiHelper');
const { response } = require('express');

/* GET home page. */
router.get('/', function(req, res, next) {
  apiHelper.callApi('http://localhost:5000/api/')
  .then(response => {
    console.log(response);
    res.render('index', { title: "Nithin's Pie Shop", data: response.data });
  })
  .catch(error => {
    response.send(error)
  });
});

module.exports = router;
