const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app-server')
const server = app.listen(8070, () => console.log(`8070 WISHLIST TEST`))
const Department = require('../models/department')
const Wishlist = require('../models/wishlist')
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})


describe('Wishlist Testing')
   
it('should get a user\'s wishlist', async () => {
    const response = await request(app).get(`/api/wishlist/${testWishlistId}`)
    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  })


  it('should add an item to the wishlist', async () => {
    const requestBody = {
      wishlistId: testWishlistId,
      itemId: testItemId,
      Id: 'test-sub-item-idsubItem',
    }
    const response = await request(app)
      .post('/api/wishlist/add')
      .send(requestBody)

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  })

  it('should remove an item from the wishlist', async () => {
    const requestBody = {
      wishlistId: testWishlistId,
      itemId: testItemId,
      subItemId: 'test-sub-item-id',
    }

    const response = await request(app)
      .post('/api/wishlist/remove')
      .send(requestBody)

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  })

  it('should delete a wishlist', async () => {
    const requestBody = {
      wishlistId: testWishlistId,
    }
    const response = await request(app)
      .delete('/api/wishlist/delete')
      .send(requestBody)

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  })

  






