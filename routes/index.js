var express = require('express');
var router = express.Router();
var userData = require('./users');  

// GET home page
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET form page
router.get('/', function(req, res) {
  res.render('form');
});

// POST student-form - Handle form submission
router.post('/student-form', async function(req, res) {
  try {
    const data = await userData.create({
      name: req.body.name,
      last: req.body.last,
      age: req.body.age,
      campus: req.body.campus 
    });
    res.status(200).send("User data saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving user data: " + error.message);
  }
});


//get data
router.get('/data',async function(req,res){
  const data = await userData.find();
  res.send(data);
})

module.exports = router;
