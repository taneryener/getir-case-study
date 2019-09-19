/* eslint-disable no-undef */

const request = require('supertest')
const app = require('../app')
const mongoose = require('../datalayer/dbContext')

afterAll(function () {
  mongoose.disconnect()
})

describe('GET / | records ', function () {
  test('returns successful response on correct input', async function () {
    const response = await request(app).post('/').send({
      startDate: '2016-01-26',
      endDate: '2020-02-02',
      minCount: 2000,
      maxCount: 3000
    })

    expect(response.body.code).toBe(0)
    expect(response.body.msg).toBe('success')
    expect(response.body.records.length).toBeGreaterThan(1)
  })
})
