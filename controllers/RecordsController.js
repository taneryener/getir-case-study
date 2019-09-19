var RecordRepository = require('../datalayer/repositories/RecordRepository')

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
