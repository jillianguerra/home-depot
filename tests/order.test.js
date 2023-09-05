const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app-server')
const server = app.listen(6060, () => console.log(`6060 ORDER TEST`))
const Order = require('../models/order')
const User = require('../models/user')
const Item = require('../models/item')
const SubItem = require('../models/subItem')
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

describe('Test the order endpoints', () => {
    test('It should add an item to the cart', async () => {
        const user = new User({ guest: true })
        await user.save()
        const token = await user.generateAuthToken()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const response = await request(app)
            .post(`/api/orders/items/${item._id}`)
            .set(`Authorization`, `Bearer ${token}`)
            .send(subItem._id)
    expect(response.statusCode).toBe(200)
    expect(response.body.total).toEqual(100)
    })
    test('It should add an item to the cart that is already in the cart.', async () => {
        const user = new User({ guest: true })
        await user.save()
        const token = await user.generateAuthToken()
        const order = new Order({ user: user._id })
        await order.save()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const cart = order.getCart(user._id)
        cart.lineItems = [{item: item, subItem: subItem}]
        await cart.save()
        const response = await request(app)
            .post(`/api/orders/items/${item._id}`)
            .set(`Authorization`, `Bearer ${token}`)
            .send(subItem._id)
        expect(response.statusCode).toBe(200)
        expect(response.body.total).toBe(200)
        expect.objectContaining(cart)
    })
    test('It should display items in the cart and the total', async () => {
        const user = new User({ guest: true })
        await user.save()
        const token = await user.generateAuthToken()
        const order = new Order({ user: user._id })
        await order.save()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const cart = order.getCart(user._id)
        cart.lineItems = ([{item: item, subItem: subItem}])
        await cart.save()
        const response = await request(app)
            .get(`/api/orders/cart`)
            .set(`Authorization`, `Bearer ${token}`)
        expect(response.statusCode).toBe(200)
        expect(response.body.total).toEqual(100)
        expect.objectContaining(cart)
    })
    test('It should change item quantity', async () => {
        const user = new User({ guest: true })
        await user.save()
        const token = await user.generateAuthToken()
        const order = new Order({ user: user._id })
        await order.save()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const cart = order.getCart(user._id)
        cart.lineItems = [{item: item._id, subItem: subItem._id}]
        const response = await request(app)
            .put(`/api/orders/cart/qty`)
            .set(`Authorization`, `Bearer ${token}`)
            .send({subItem: subItem._id, quantity: 3 })
        expect(response.statusCode).toBe(200)
        expect(response.body.total).toEqual(300)
        expect.objectContaining(cart)
    })
    test('It should delete an item from the cart', async () => {
        const user = new User({ guest: true })
        const token = await user.generateAuthToken()
        await user.save()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const order = new Order({user: user._id})
        const cart = order.getCart(user._id)
        cart.lineItems = ([{item: item, subItem: subItem}])
        await cart.save()
        const response = await request(app)
            .put(`/api/orders/cart/qty`)
            .set(`Authorization`, `Bearer ${token}`)
            .send({ subItem: subItem._id, qty: 0 })
        expect(response.statusCode).toBe(200)
        expect(response.body.total).toEqual(0)
        expect.objectContaining(cart)
    })
    test('It should check out the cart', async() => {
        const user = new User({ guest: true })
        const token = await user.generateAuthToken()
        await user.save()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const order = new Order({user: user._id})
        const cart = order.getCart(user._id)
        cart.lineItems = ([{item: item, subItem: subItem}])
        await cart.save()
        const response = await request(app)
            .post(`/api/orders/cart/checkout`)
            .set(`Authorization`, `Bearer ${token}`)
        expect(response.statusCode).toBe(100)
        expect(response.body.cart.total).toBe(100)
        expect.objectContaining(cart)
    })
    test('It should show paid carts', async() => {
        const user = new User({ guest: true })
        await user.save()
        const token = await user.generateAuthToken()
        const order = new Order({ user: user._id })
        await order.save()
        const subItem = new SubItem({ color: 'test', price: 100 })
        await subItem.save()
        const item = new Item({ name: 'test', image: 'test', description: 'test', subItems: [subItem] })
        await item.save()
        const cart = order.getCart(user._id)
        cart.lineItems = ([{ item: item, subItem: subItem }])
        cart.isPaid = true
        await cart.save()
        const response = await request(app)
            .get(`/api/orders/history`)
            .set(`Authorization`, `Bearer ${token}`)
        expect(response.statusCode).toBe(200)
        expect.objectContaining(cart)
    })
})