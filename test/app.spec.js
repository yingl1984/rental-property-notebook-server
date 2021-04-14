const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app')

describe('App', () => {
  let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
  })
  
  it('GET / responds with 200 containing "Hello, rental property notebook user!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, rental property notebook user!')
  })
  it.only('GET /api/notes responds with 200 containing a array of objects', () => {
    return supertest(app)
      .get('/api/notes')
      .expect(200)
  })
  // it('POST / responds with ', () => {
  //   return supertest(app)
  //     .get('/')
  //     .expect(200, 'Hello, rental property notebook user!')
  // })
})