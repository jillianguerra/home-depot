const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app-server')
const server = app.listen(8080, () => console.log(`8020 DEPARTMENT TEST`))
const Department = require('../models/department')
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

describe('Test the department endpoint', () => {
    test('It should display departments', async () => {
        const hardware = new Department({ name: 'hardware' })
        await hardware.save()
        const bathroom = new Department({ name: 'bathroom' })
        await bathroom.save()
        const kitchen = new Department({ name: 'kitchen' })
        await kitchen.save()
        const response = await request(app)
            .get(`api/departments/`)
        expect(response.statusCode).toBe(200)
        expect.objectContaining(hardware)
        expect.objectContaining(bathroom)
        expect.objectContaining(kitchen)
    })
})