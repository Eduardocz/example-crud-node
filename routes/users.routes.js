const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req,res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const users = [];
  for(let i = 0; i < limit; i++){
    users.push({
      user:faker.internet.userName()
    })
  }
  res.json(users);
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    user:faker.internet.userName(),
  })
});

module.exports = router;
