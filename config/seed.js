require('dotenv').config();
require('./database');
const Category = require('../models/category')
const Department = require('../models/department')
const SubItem = require('../models/subItem')
const Item = require('../models/item')

    (async function () {

        await Department.deleteMany({});
        const department = await Department.create({name: test})
        await Category.deleteMany({});
        const category = await Category.create({name: test, image: test, department: department})

        await SubItem.deleteMany({});
        const subItems = await SubItem.create([
            {
                color: 'test',
                gallery: ['test', 'test', 'test'],
                size: '10cm x 10cm',
                price: 10
            },
            {
                color: 'test two',
                gallery: ['test', 'test', 'test'],
                size: '20cm x 20 cm',
                price: 20
            }
        ])
        await Item.deleteMany({})
        const item = await Item.create({
            name: 'test', 
            img: 'test', 
            category: category,
            details: 'test',
            searchTerms: ['test', 'test', 'test'],
            subItems: [subItems]
        })
        console.log(item)
        process.exit()

    })()