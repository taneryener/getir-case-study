const records = require('../entities/records')

class RecordRepository {
  constructor (records) {
    this.records = records
  }

  async getListByFilter (filters) {
    var response = await this.records.aggregate([
      {
        $project: {
          key: '$key',
          createdAt: '$createdAt',
          totalCount: { $sum: '$counts' }
        }
      },
      {
        $match: {
          createdAt: {
            $gte: new Date(filters.startDate),
            $lte: new Date(filters.endDate)
          },
          totalCount: {
            $gte: filters.minCount,
            $lte: filters.maxCount
          }
        }
      }
    ])
    return response
  }
}

module.exports = new RecordRepository(records)
