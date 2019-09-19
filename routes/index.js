const express = require('express')
const router = express.Router()
const RecordsController = require('../controllers/RecordsController')

/* GET home page. */

router.post('/', async function (req, res) {
  var response = await RecordsController.getListByFilter(req.body)
  res.status(200).send(response)
})

module.exports = router
