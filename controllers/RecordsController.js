const RecordRepository = require('../datalayer/repositories/RecordRepository')
// const validator = require('validator')
class RecordsController {
  async getListByFilter (filters) {
    let response
    try {
      const recordList = await RecordRepository.getListByFilter(filters)

      response = { code: 0, msg: 'success', records: recordList }
    } catch (error) {
      response = { code: -1, msg: 'error', records: [] }
    }

    return response
  }
}

module.exports = new RecordsController()
