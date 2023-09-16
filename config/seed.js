require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Department = require('../models/department');
const Item = require('../models/item');

(async function () {
	// generate departments:
	await Department.deleteMany({});
	const departments = await Department.create([
		{ name: 'Kitchen' },
		{ name: 'Bathroom' },
		{ name: 'Appliances' },
		{ name: 'Hardware' }
	]);
	// generate categories:
	await Category.deleteMany({});
	const categories = await Category.create([
		{
			name: 'Cabinets',
			image: 'https://i.imgur.com/UZVqOUg.png',
			department: departments[0]
		},
		{
			name: 'Kitchen Faucets',
			image: 'https://i.imgur.com/T3SB2Ex.jpg',
			department: departments[0]
		},
		{
			name: 'Backsplash',
			image: 'https://i.imgur.com/EUjcDd9.jpg',
			department: departments[0]
		},
		{
			name: 'Garbage Disposal',
			image: 'https://i.imgur.com/HAXzMdc.jpg',
			department: departments[0]
		},

		{
			name: 'Tubs',
			image: 'https://i.imgur.com/5fiWDyO.jpg',
			department: departments[1]
		},
		{
			name: 'Shower Heads',
			image: 'https://i.imgur.com/hjFNpn6.jpg',
			department: departments[1]
		},
		{
			name: 'Bathroom Faucets',
			image: 'https://i.imgur.com/jbGT3n3.jpg',
			department: departments[1]
		},
		{
			name: 'Toilets',
			image: 'https://i.imgur.com/L55oz3h.jpg',
			department: departments[1]
		},

		{
			name: 'Refrigerators',
			image: 'https://i.imgur.com/NaV2Q95.jpg',
			department: departments[2]
		},
		{
			name: 'Ovens',
			image: 'https://i.imgur.com/jv9jpAd.jpg',
			department: departments[2]
		},
		{
			name: 'Washers and Dryers',
			image: 'https://i.imgur.com/4actGZc.jpg',
			department: departments[2]
		},
		{
			name: 'Microwaves',
			image: 'https://i.imgur.com/ADVIeXq.jpg',
			department: departments[2]
		},

		{
			name: 'Power Drills',
			image: 'https://i.imgur.com/nYayBmj.jpg',
			department: departments[3]
		},
		{
			name: 'Toolsets',
			image: 'https://i.imgur.com/u5Frxvg.jpg',
			department: departments[3]
		},
		{
			name: 'Nails and Bolts',
			image: 'https://i.imgur.com/ZKrhONv.jpg',
			department: departments[3]
		},
		{
			name: 'Buckets',
			image: 'https://i.imgur.com/YVkwL9o.jpg',
			department: departments[3]
		}
	]);

	//Create Items:
	await Item.deleteMany({});
	const items = await Item.create([
		//cabinets
		{
			name: 'Contractor Express Cabinet',
			img: 'https://i.imgur.com/aef6Bfq.png',
			category: categories[0],
			details: `36 in. x 34.5 in. x 24 in`,
			searchTerms: [
				'kitchen',
				'kitchen cabinet',
				'cabinet',
				'cabinets',
				'wood',
				'beige',
				'contractor express cabinets'
			],
			price: 329.99
		},
		{
			name: 'Hampton Bay Cabinet',
			img: 'https://i.imgur.com/1sIzdHk.png',
			category: categories[0],
			details: `60 in. W x 24 in. D x 34.5 in`,
			searchTerms: [
				'kitchen',
				'kitchen cabinet',
				'cabinet',
				'cabinets',
				'brown',
				'wood',
				'hampton bay'
			],
			price: 399.99
		},
		{
			name: 'Home Decorators Cabinet',
			img: 'https://i.imgur.com/1g5urYy.png',
			category: categories[0],
			details: `30 in. x 34.5 in. x 24 in`,
			searchTerms: [
				'kitchen',
				'kitchen cabinet',
				'cabinet',
				'cabinets',
				'white',
				'wood',
				'home decorators cabinet'
			],
			price: 299.99
		},
		// Kitchen Faucets
		{
			name: 'Glacier Bay Kitchen Faucet',
			img: 'https://i.imgur.com/lq832rt.png',
			category: categories[1],
			details: `Single-Handle Pull Down Sprayer Kitchen Faucet`,
			searchTerms: ['faucet', 'faucets', 'kitchen', 'kitchen faucet', 'silver'],
			price: 69.99
		},
		{
			name: 'KOHLER Kitchen Faucet',
			img: 'https://i.imgur.com/QLZsUzj.png',
			category: categories[1],
			details: `Sous Pro-Style Single-Handle Pull-Down Sprayer Kitchen Faucet`,
			searchTerms: ['faucet', 'faucets', 'kitchen', 'kitchen faucet', 'gray'],
			price: 129.99
		},
		{
			name: 'Delta Kitchen Faucet',
			img: 'https://i.imgur.com/fc5x6uj.png',
			category: categories[1],
			details: `Pivotal Single-Handle Pull-Down Sprayer Kitchen Faucet with Touch2O Technology`,
			searchTerms: ['faucet', 'faucets', 'kitchen', 'kitchen faucet', 'black'],
			price: 349.99
		},
		//backslash
		{
			name: 'MSI Backsplash',
			img: 'https://i.imgur.com/0sJ1HXo.png',
			category: categories[2],
			details: `Angora Herringbone 12 in. x 12 in. Polished Marble Wall Mosaic Tile`,
			searchTerms: ['msi', 'kitchen', 'tiles', 'backsplash'],
			price: 8.99
		},
		{
			name: 'Daltile Backsplash',
			img: 'https://i.imgur.com/jcF3WH7.png',
			category: categories[2],
			details: `3 in. x 6 in. Ceramic Bright White Subway Tile`,
			searchTerms: ['daltile', 'kitchen', 'tiles', 'backsplash', 'white'],
			price: 4.99
		},
		{
			name: 'Marazzi Backsplash',
			img: 'https://i.imgur.com/65KdDMz.png',
			category: categories[2],
			details: `Stonehollow 14 in. x 12 in. x 6.35 mm Mist Ceramic Herringbone Mosaic Wall Tile`,
			searchTerms: ['marazzi', 'kitchen', 'stone', 'backsplash'],
			price: 12.99
		},
		// Garbage disposal
		{
			name: 'InSinkErator Garbage Disposal',
			img: 'https://i.imgur.com/EiDxxbE.png',
			category: categories[3],
			details: `Badger 500, 1/2 HP Continuous Feed Kitchen Garbage Disposal`,
			searchTerms: [
				'insinkerator',
				'garbage disposal',
				'plumbing',
				'appliance',
				'appliances',
				'kitchen',
				'black'
			],
			price: 79.99
		},
		{
			name: 'MOEN Garbage Disposal',
			img: 'https://i.imgur.com/zfMGPXb.png',
			category: categories[3],
			details: `Prep Series 1/2 HP Continuous Feed Garbage Disposal with Power Cord and Universal Mount`,
			searchTerms: [
				'moen',
				'garbage disposal',
				'plumbing',
				'appliance',
				'appliances',
				'kitchen',
				'black'
			],
			price: 89.99
		},
		{
			name: 'Waste King Garbage Disposal',
			img: 'https://i.imgur.com/3YqvvkE.png',
			category: categories[3],
			details: `Legend Series 1/2 HP Continuous Feed Garbage Disposal`,
			searchTerms: [
				'waste king',
				'garbage disposal',
				'plumbing',
				'appliance',
				'appliances',
				'kitchen',
				'white'
			],
			price: 99.99
		},
		//Tubs
		{
			name: 'KOHLER Tub',
			img: 'https://i.imgur.com/f9GsGkg.png',
			category: categories[4],
			details: `60 in. x 30.25 in`,
			searchTerms: ['bathroom', 'tub', 'tubs', 'white', 'kohler'],
			price: 379.99
		},
		{
			name: 'Vanity Art Tub',
			img: 'https://i.imgur.com/TX9yOX9.png',
			category: categories[4],
			details: `55 in. x 28.3 in`,
			searchTerms: ['bathroom', 'tub', 'tubs', 'white', 'vanity art'],
			price: 799.99
		},
		{
			name: 'Home Decorators Tub',
			img: 'https://i.imgur.com/GKR7Fgt.png',
			category: categories[4],
			details: `63 in. x 30.25 in`,
			searchTerms: ['bathroom', 'tub', 'tubs', 'white', 'home decorators Tub'],
			price: 599.99
		},
		//shower heads
		{
			name: 'Delta Shower Head',
			img: 'https://i.imgur.com/1Zo2F2w.png',
			category: categories[5],
			details: `5-Spray Patterns 1.75 GPM 6.63 in. Wall Mount Dual Shower Heads`,
			searchTerms: ['bathroom', 'shower heads', 'shower', 'silver', 'delta'],
			price: 79.99
		},
		{
			name: 'MOEN Shower Head',
			img: 'https://i.imgur.com/OBohqGO.png',
			category: categories[5],
			details: `Attract with Magnetix 6-spray 6.75 in. Dual Shower Head and Adjustable Handheld`,
			searchTerms: ['bathroom', 'shower heads', 'shower', 'silver', 'moen'],
			price: 109.99
		},
		{
			name: 'Glacier Bay Shower Head',
			img: 'https://i.imgur.com/OD6Bk5M.png',
			category: categories[5],
			details: `3-Spray 3.5 in. Single Wall Mount Fixed Adjustable Shower Head`,
			searchTerms: [
				'bathroom',
				'shower heads',
				'shower',
				'silver',
				'glacier bay'
			],
			price: 9.99
		},
		//Bathroom faucets
		{
			name: 'Glacier Bay Bathroom Faucet',
			img: 'https://i.imgur.com/LyfatSg.png',
			category: categories[6],
			details: `4 in. Centerset 2-Handle Low-Arc Bathroom Faucet`,
			searchTerms: [
				'bathroom',
				'bathroom faucets',
				'faucet',
				'faucet',
				'nickel',
				'glacier bay'
			],
			price: 39.99
		},
		{
			name: 'Delta Bathroom Faucet',
			img: 'https://i.imgur.com/3JDO3Oh.png',
			category: categories[6],
			details: `4 in. Centerset 2-Handle Bathroom Faucet `,
			searchTerms: [
				'bathroom',
				'bathroom faucets',
				'faucet',
				'faucet',
				'silver',
				'delta'
			],
			price: 99.99
		},
		{
			name: 'Pfister Bathroom Faucet',
			img: 'https://i.imgur.com/N6UHBzJ.png',
			category: categories[6],
			details: `4 in. Centerset Single-Handle Waterfall Bathroom Faucet`,
			searchTerms: [
				'bathroom',
				'bathroom faucets',
				'faucet',
				'faucet',
				'silver',
				'pfister'
			],
			price: 112.99
		},
		//Toilets
		{
			name: 'Glacier Bay Toilet',
			img: 'https://i.imgur.com/wgXKodQ.png',
			category: categories[7],
			details: `High Efficiency Dual Flush Complete Elongated Toilet`,
			searchTerms: ['bathroom', 'toilet', 'toilets', 'white', 'glacier bay'],
			price: 99.99
		},
		{
			name: 'American Standard Toilet',
			img: 'https://i.imgur.com/DaFVXWY.png',
			category: categories[7],
			details: `Single Flush Elongated Toilet`,
			searchTerms: [
				'bathroom',
				'toilet',
				'toilets',
				'white',
				'american standard'
			],
			price: 179.99
		},
		{
			name: 'KOHLER Toilet',
			img: 'https://i.imgur.com/IWZM736.png',
			category: categories[7],
			details: `Single Flush Elongated Toilet`,
			searchTerms: ['bathroom', 'toilet', 'toilets', 'white', 'kohler'],
			price: 299.99
		},
		//frides
		{
			name: 'LG Refrigerator',
			img: 'https://i.imgur.com/MRDCP5z.png',
			category: categories[8],
			details:
				'28 cu. ft. 4-Door French Door Smart Refrigerator with Ice and Water Dispenser',
			searchTerms: [
				'refrigerator',
				'refrigerators',
				'fridge',
				'kitchen',
				'appliance',
				'appliances',
				'silver',
				'lg'
			],
			price: 1899.99
		},
		{
			name: 'Samsung Refrigerator',
			img: 'https://i.imgur.com/Gj3huip.png',
			category: categories[8],
			details:
				'35.75 in. W 26.5 cu. ft. 3-Door Family Hub French Door Smart Refrigerator',
			searchTerms: [
				'refrigerator',
				'refrigerators',
				'fridge',
				'kitchen',
				'appliance',
				'appliances',
				'silver',
				'samsung'
			],
			price: 3399.99
		},
		{
			name: 'Kitchen Aid Refrigerator',
			img: 'https://i.imgur.com/cAHzJsF.png',
			category: categories[8],
			details: '25.8 cu. ft. French Door Refrigerator',
			searchTerms: [
				'refrigerator',
				'refrigerators',
				'fridge',
				'kitchen',
				'appliance',
				'appliances',
				'silver',
				'kitchen aid'
			],
			price: 3398.99
		},
		//Ovens
		{
			name: 'LG Oven',
			img: 'https://i.imgur.com/kjyTo8I.png',
			category: categories[9],
			details:
				'5.8 cu. ft. Smart Wi-Fi Enabled True Convection InstaView Gas Range Oven with Air Fry',
			searchTerms: [
				'oven',
				'ovens',
				'kitchen',
				'appliance',
				'appliances',
				'silver',
				'lg'
			],
			price: 1049.99
		},
		{
			name: 'Samsung Oven',
			img: 'https://i.imgur.com/H8mLAR8.png',
			category: categories[9],
			details:
				'6.3 cu. ft. 30 in. Smart Freestanding Double Oven Electric Range with Flex Duo',
			searchTerms: [
				'oven',
				'ovens',
				'kitchen',
				'appliance',
				'appliances',
				'silver',
				'samsung'
			],
			price: 1099.99
		},
		{
			name: 'Kitchen Aid Oven',
			img: 'https://i.imgur.com/MMitAcq.png',
			category: categories[9],
			details: '30 in. Single Electric Wall Oven Self-Cleaning with Convection',
			searchTerms: [
				'oven',
				'ovens',
				'kitchen',
				'appliance',
				'appliances',
				'silver',
				'kitchen aid'
			],
			price: 2199.99
		},
		//washer and dryers
		{
			name: 'LG Washer & Dryer',
			img: 'https://i.imgur.com/df6L2LC.png',
			category: categories[10],
			details: '4.5 Cu. Ft. "each" Stackable SMART Front Load Washer',
			searchTerms: [
				'dryer',
				'dryers',
				'washer',
				'washers',
				'washer and dryers',
				'appliance',
				'appliances',
				'lg',
				'gun metal gray'
			],
			price: 1599.99
		},
		{
			name: 'Samsung Washer & Dryer',
			img: 'https://i.imgur.com/QLvI1o5.png',
			category: categories[10],
			details:
				'4.5 cu. ft. "each", Smart High-Efficiency Front Load Washer with Super Speed',
			searchTerms: [
				'dryer',
				'dryers',
				'washer',
				'washers',
				'washer and dryers',
				'appliance',
				'appliances',
				'samsung',
				'dark gray'
			],
			price: 1199.99
		},
		{
			name: 'Electrolux Washer & Dryer',
			img: 'https://i.imgur.com/TrtY4nV.png',
			category: categories[10],
			details:
				'27 in. W 4.5 cu. ft. "each" Front Load Washer & dryer with SmartBoost, LuxCare Plus Wash & dry System',
			searchTerms: [
				'dryer',
				'dryers',
				'washer',
				'washers',
				'washer and dryers',
				'appliance',
				'appliances',
				'electrolux',
				'white'
			],
			price: 1999.99
		},
		//Microwaves
		{
			name: 'LG Microwave',
			img: 'https://i.imgur.com/KlEzXHA.png',
			category: categories[11],
			details: '24 in. Width 2.0 cu.ft. 1200-Watt Countertop Microwave',
			searchTerms: [
				'microwave',
				'microwaves',
				'lg',
				'appliance',
				'appliances',
				'silver'
			],
			price: 209.99
		},
		{
			name: 'Samsung Microwave',
			img: 'https://i.imgur.com/eNivv4S.png',
			category: categories[11],
			details: '30 in. 1.9 cu. ft. Over-the-Range Microwave',
			searchTerms: [
				'microwave',
				'microwaves',
				'samsung',
				'appliance',
				'appliances',
				'silver'
			],
			price: 278.99
		},
		{
			name: 'Kitchen Aid Microwave',
			img: 'https://i.imgur.com/9mONg6Z.png',
			category: categories[11],
			details: '1.5 cu. ft. Countertop Microwave',
			searchTerms: [
				'microwave',
				'microwaves',
				'kitchen aid',
				'appliance',
				'appliances',
				'silver'
			],
			price: 689.99
		},
		//Power Drills
		{
			name: 'DEWALT Power Drill',
			img: 'https://i.imgur.com/dAmV7xK.jpg',
			category: categories[12],
			details: '12V MAX XR Cordless Brushless 3-Speed 1/2 in Drill',
			searchTerms: ['drill', 'drills', 'power tools', 'dewalt', 'yellow'],
			price: 129.99
		},
		{
			name: 'Milwaukee Power Drill',
			img: 'https://i.imgur.com/UB7SCqJ.png',
			category: categories[12],
			details: 'M18 18V Lithium-Ion Cordless 1/2 in. Drill Driver',
			searchTerms: ['drill', 'drills', 'milwaukee', 'power tools', 'red'],
			price: 199.99
		},
		{
			name: 'Rockwell Power Drill',
			img: 'https://i.imgur.com/CGPzixk.jpg',
			category: categories[12],
			details: '18V MAX XR Cordless Brushless 3-Speed 1/2 in Drill',
			searchTerms: ['drill', 'drills', 'Rockwell', 'power tools', 'green'],
			price: 59.99
		},
		//Toolsets
		{
			name: 'Stanley Toolset',
			img: 'https://i.imgur.com/sQMyF5p.png',
			category: categories[13],
			details: 'Home Tool Kit (65-Piece)',
			searchTerms: ['toolset', 'tools', 'stanley', 'yellow'],
			price: 59.99
		},
		{
			name: 'DEWALT Toolset',
			img: 'https://i.imgur.com/i8EqgSp.png',
			category: categories[13],
			details:
				'1/4 in., 3/8 in., and 1/2 in. Drive Polished Chrome Mechanics Tool Set (200-Piece)',
			searchTerms: ['toolsets', 'tools', 'dewalt', 'yellow', 'gray'],
			price: 155.99
		},
		{
			name: 'KING Toolset',
			img: 'https://i.imgur.com/2JIFcE3.png',
			category: categories[13],
			details: 'Complete Home Pink Tool Kit with Bag (24-Piece)',
			searchTerms: ['toolsets', 'tools', 'king', 'pink'],
			price: 29.99
		},
		//nuts and bolts
		{
			name: 'TradesPro Nuts & Bolts',
			img: 'https://i.imgur.com/Jw5ZvJB.png',
			category: categories[14],
			details: '240 Piece Zinc Metric Nut and Bolt Assortment with Storage',
			searchTerms: ['nuts', 'bolts', 'nuts and bolts', 'gray', 'tradespro'],
			price: 7.99
		},
		{
			name: 'Stark Nuts & Bolts',
			img: 'https://i.imgur.com/mbCaHtt.png',
			category: categories[14],
			details:
				'347-Piece SAE Nut And Bolt Assortment Sheet Metal Machine Screw Hardware Kit',
			searchTerms: ['nuts', 'bolts', 'nuts and bolts', 'gray', 'stark'],
			price: 12.99
		},
		{
			name: 'Everbilt Nuts & Bolts',
			img: 'https://i.imgur.com/HJ140Wx.png',
			category: categories[14],
			details: '405-Piece Zinc-Plated Machine Screw Kit',
			searchTerms: ['nuts', 'bolts', 'nuts and bolts', 'gray', 'everbilt'],
			price: 9.99
		},
		//buckets
		{
			name: 'Red Buckets',
			img: 'https://i.imgur.com/xQDcpeN.jpg',
			category: categories[15],
			details: '5 gallon bucket',
			searchTerms: ['bucket', 'buckets', 'red', 'lid', 'lids'],
			price: 12.99,
			featured: true
		},
		{
			name: 'Black Buckets',
			img: 'https://i.imgur.com/9wYClIH.jpg',
			category: categories[15],
			details: '16L plastic bucket with lid',
			searchTerms: ['bucket', 'buckets', 'black', 'lid', 'lids'],
			price: 14.99,
			featured: true
		},
		{
			name: 'white Bucket Set',
			img: 'https://i.imgur.com/WsuAkaZ.jpg',
			category: categories[15],
			details: '8 piece bucket set, 5 gallons',
			searchTerms: ['bucket', 'buckets', 'white', 'lid', 'lids'],
			price: 45.99,
			featured: true
		}
	]);

	console.log(items);
	process.exit();
})();
