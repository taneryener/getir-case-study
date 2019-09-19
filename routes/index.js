const express = require('express')
const router = express.Router()
const RecordsController = require('../controllers/RecordsController')

/* POST . */
router.post('/', async function (req, res) {
  var response = await RecordsController.getListByFilter(req.body)
  if (response.code === 0) {
    res.status(200).send(response)
  } else { res.status(402).send(response) }
})

module.exports = router
