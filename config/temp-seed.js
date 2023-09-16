require('dotenv').config();
require('./database');
import { images } from '../src/images';

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
		{ name: 'Cabinets', image: images.cabinetsBG, department: departments[0] },
		{
			name: 'Kitchen Faucets',
			image: images.faucetBG,
			department: departments[0]
		},
		{
			name: 'Backsplash',
			image: images.backSplashBG,
			department: departments[0]
		},
		{
			name: 'Garbage Disposal',
			image: images.showerHeadBG,
			department: departments[0]
		},

		{ name: 'Tubs', image: images.tubBG, department: departments[1] },
		{
			name: 'Shower Heads',
			image: images.showerHeadBG,
			department: departments[1]
		},
		{
			name: 'Bathroom Faucets',
			image: images.bfBG,
			department: departments[1]
		},
		{ name: 'Toilets', image: images.toiletBG, department: departments[1] },

		{
			name: 'Refridgerators',
			image: images.fridgeBG,
			department: departments[2]
		},
		{ name: 'Ovens', image: images.ovenBG, department: departments[2] },
		{
			name: 'Washers and Dryers',
			image: images.washerdryerBG,
			department: departments[2]
		},
		{
			name: 'Microwaves',
			image: images.microwaveBG,
			department: departments[2]
		},

		{ name: 'Power Drills', image: images.drillBG, department: departments[3] },
		{ name: 'Toolsets', image: images.toiletBG, department: departments[3] },
		{ name: 'Nails and Bolts', image: images.NBBG, department: departments[3] },
		{ name: 'Buckets', image: images.bucketsBG, department: departments[3] }
	]);

	//Create Items:
	await Item.deleteMany({});
	let test = 100;
	const items = await Item.create([
		// kitchen faucets
		{
			name: 'Glacier Bay',
			img: images.glacierBay,
			category: categories[0],
			details: `Single-Handle Pull Down Sprayer Kitchen Faucet`,
			searchTerms: ['faucet', 'bathroom', 'silver'],
			price: 69.99
		},
		{
			name: 'KOHLER',
			img: images.kohler,
			category: categories[0],
			details: `Sous Pro-Style Single-Handle Pull-Down Sprayer Kitchen Faucet`,
			searchTerms: ['faucet', 'bathroom', 'gray'],
			price: 129.99
		},
		{
			name: 'Delta',
			img: images.delta,
			category: categories[0],
			details: `Pivotal Single-Handle Pull-Down Sprayer Kitchen Faucet with Touch2O Technology`,
			searchTerms: ['faucet', 'bathroom', 'black'],
			price: 349.99
		},
		//cabinets
		{
			name: 'Contractor Express Cabinets',
			img: images.CECcabinet,
			category: categories[1],
			details: `36 in. x 34.5 in. x 24 in`,
			searchTerms: [
				'kitchen',
				'cabinet',
				'cabinets',
				'beige',
				'contractor express cabinets'
			],
			price: 329.99
		},
		{
			name: 'Hampton Bay',
			img: images.HBcabinet,
			category: categories[1],
			details: `60 in. W x 24 in. D x 34.5 in`,
			searchTerms: ['kitchen', 'cabinet', 'cabinets', 'brown', 'hampton bay'],
			price: 399.99
		},
		{
			name: 'Home Decorators Collection',
			img: images.HDCcabinet,
			category: categories[1],
			details: `30 in. x 34.5 in. x 24 in`,
			searchTerms: [
				'kitchen',
				'cabinet',
				'cabinets',
				'white',
				'home decorators collection'
			],
			price: 299.99
		},
		//backslash
		{
			name: 'MSI',
			img: images.MSI,
			category: categories[2],
			details: `Angora Herringbone 12 in. x 12 in. Polished Marble Wall Mosaic Tile`,
			searchTerms: ['msi', 'tiles', 'backsplash'],
			price: 8.99
		},
		{
			name: 'Daltile',
			img: images.Daltile,
			category: categories[2],
			details: `3 in. x 6 in. Ceramic Bright White Subway Tile`,
			searchTerms: ['daltile', 'tiles', 'backsplash', 'white'],
			price: 4.99
		},
		{
			name: 'Marazzi',
			img: images.Marazzi,
			category: categories[2],
			details: `Stonehollow 14 in. x 12 in. x 6.35 mm Mist Ceramic Herringbone Mosaic Wall Tile`,
			searchTerms: ['marazzi', 'stone', 'backsplash'],
			price: 12.99
		},
		//garbage desposel
		{
			name: 'InSinkErator',
			img: images.inSinkErator,
			category: categories[3],
			details: `Badger 500, 1/2 HP Continuous Feed Kitchen Garbage Disposal`,
			searchTerms: ['insinkerator', 'garbage disposal', 'kitchen', 'black'],
			price: 79.99
		},
		{
			name: 'MOEN',
			img: images.MOEN,
			category: categories[3],
			details: `Prep Series 1/2 HP Continuous Feed Garbage Disposal with Power Cord and Universal Mount`,
			searchTerms: ['moen', 'garbage disposal', 'kitchen', 'black'],
			price: 89.99
		},
		{
			name: 'Waste King',
			img: images.wasteKing,
			category: categories[3],
			details: `Legend Series 1/2 HP Continuous Feed Garbage Disposal`,
			searchTerms: ['waste king', 'garbage disposal', 'kitchen', 'white'],
			price: 99.99
		},
		//Tubs
		{
			name: 'KOHLER',
			img: images.kohlerTub,
			category: categories[4],
			details: `60 in. x 30.25 in`,
			searchTerms: ['bathroom', 'tubs', 'white', 'kohler'],
			price: 379.99
		},
		{
			name: 'Vanity Art',
			img: images.vanityArt,
			category: categories[4],
			details: `55 in. x 28.3 in`,
			searchTerms: ['bathroom', 'tubs', 'white', 'vanity art'],
			price: 799.99
		},
		{
			name: 'Home Decorators Collection',
			img: images.HDCtub,
			category: categories[4],
			details: `63 in. x 30.25 in`,
			searchTerms: ['bathroom', 'tubs', 'white', 'home decorators collection'],
			price: 599.99
		},
		//shower heads
		{
			name: 'Delta',
			img: images.deltaSH,
			category: categories[5],
			details: `5-Spray Patterns 1.75 GPM 6.63 in. Wall Mount Dual Shower Heads`,
			searchTerms: ['bathroom', 'shower heads', 'silver', 'delta'],
			price: 79.99
		},
		{
			name: 'MOEN',
			img: images.MOENSH,
			category: categories[5],
			details: `Attract with Magnetix 6-spray 6.75 in. Dual Shower Head and Adjustable Handheld`,
			searchTerms: ['bathroom', 'shower heads', 'silver', 'moen'],
			price: 109.99
		},
		{
			name: 'Glacier Bay',
			img: images.glacierBaySH,
			category: categories[5],
			details: `3-Spray 3.5 in. Single Wall Mount Fixed Adjustable Shower Head`,
			searchTerms: ['bathroom', 'shower heads', 'silver', 'glacier bay'],
			price: 9.99
		},
		//Bathroom faucets
		{
			name: 'Glacier Bay',
			img: images.glacierBayBF,
			category: categories[6],
			details: `4 in. Centerset 2-Handle Low-Arc Bathroom Faucet`,
			searchTerms: ['bathroom', 'bathroom faucets', 'nickel', 'glacier bay'],
			price: 39.99
		},
		{
			name: 'Delta',
			img: images.deltaBF,
			category: categories[6],
			details: `4 in. Centerset 2-Handle Bathroom Faucet `,
			searchTerms: ['bathroom', 'bathroom faucets', 'silver', 'delta'],
			price: 99.99
		},
		{
			name: 'Pfister',
			img: images.pfisterBF,
			category: categories[6],
			details: `4 in. Centerset Single-Handle Waterfall Bathroom Faucet`,
			searchTerms: ['bathroom', 'bathroom faucets', 'silver', 'pfister'],
			price: 112.99
		},
		//Toilets
		{
			name: 'Glacier Bay',
			img: imahes.glacierBayToilet,
			category: categories[7],
			details: `High Efficiency Dual Flush Complete Elongated Toilet`,
			searchTerms: ['bathroom', 'toilets', 'white', 'glacier bay'],
			price: 99.99
		},
		{
			name: 'American Standard',
			img: images.americanStandardToilet,
			category: categories[7],
			details: `Single Flush Elongated Toilet`,
			searchTerms: ['bathroom', 'toilets', 'white', 'american standard'],
			price: 179.99
		},
		{
			name: 'KOHLER',
			img: images.KohlerToilet,
			category: categories[7],
			details: `Single Flush Elongated Toilet`,
			searchTerms: ['bathroom', 'toilets', 'white', 'kohler'],
			price: 299.99
		},
		//frides
		{
			name: 'LG',
			img: images.lgFridge,
			category: categories[8],
			details:
				'28 cu. ft. 4-Door French Door Smart Refrigerator with Ice and Water Dispenser',
			searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'lg'],
			price: 1899.99
		},
		{
			name: 'Samsung',
			img: images.ssFridge,
			category: categories[8],
			details:
				'35.75 in. W 26.5 cu. ft. 3-Door Family Hub French Door Smart Refrigerator',
			searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'samsung'],
			price: 3399.99
		},
		{
			name: 'Kitchen Aid ',
			img: images.kaFridge,
			category: categories[8],
			details: '25.8 cu. ft. French Door Refrigerator',
			searchTerms: [
				'refridgerators',
				'fridge',
				'kitchen',
				'silver',
				'kitchen aid'
			],
			price: 3398.99
		},
		//ovens
		{
			name: 'LG',
			img: images.lgOven,
			category: categories[9],
			details:
				'5.8 cu. ft. Smart Wi-Fi Enabled True Convection InstaView Gas Range Oven with Air Fry',
			searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'lg'],
			price: 1049.99
		},
		{
			name: 'Samsung',
			img: images.ssOven,
			category: categories[9],
			details:
				'6.3 cu. ft. 30 in. Smart Freestanding Double Oven Electric Range with Flex Duo',
			searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'samsung'],
			price: 1099.99
		},
		{
			name: 'Kitchen Aid Oven',
			img: images.kaOven,
			category: categories[9],
			details: '30 in. Single Electric Wall Oven Self-Cleaning with Convection',
			searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'kitchen aid'],
			price: 2199.99
		},
		//washer & dryers
		{
			name: 'LG',
			img: images.lgWasherDryer,
			category: categories[9],
			details: '4.5 Cu. Ft. "each" Stackable SMART Front Load Washer',
			searchTerms: [
				'dryer',
				'dryers',
				'washer',
				'washers',
				'appliance',
				'lg',
				'gun metal gray'
			],
			price: 1599.99
		},
		{
			name: 'Samsung',
			img: images.ssWasherDryer,
			category: categories[9],
			details:
				'4.5 cu. ft. "each", Smart High-Efficiency Front Load Washer with Super Speed',
			searchTerms: [
				'dryer',
				'dryers',
				'washer',
				'washers',
				'appliance',
				'samsung',
				'dark gray'
			],
			price: 1199.99
		},
		{
			name: 'Electrolux',
			img: images.elWasherDryer,
			category: categories[9],
			details:
				'27 in. W 4.5 cu. ft. "each" Front Load Washer & dryer with SmartBoost, LuxCare Plus Wash & dry System',
			searchTerms: [
				'dryer',
				'dryers',
				'washer',
				'washers',
				'appliance',
				'electrolux',
				'white'
			],
			price: 1999.99
		},
		//microwaves
		{
			name: 'LG',
			img: images.lgMicrowave,
			category: categories[10],
			details: '24 in. Width 2.0 cu.ft. 1200-Watt Countertop Microwave',
			searchTerms: ['microwave', 'microwaves', 'lg', 'appliance', 'silver'],
			price: 209.99
		},
		{
			name: 'Samsung',
			img: images.ssMicrowave,
			category: categories[10],
			details: '30 in. 1.9 cu. ft. Over-the-Range Microwave',
			searchTerms: [
				'microwave',
				'microwaves',
				'samsung',
				'appliance',
				'silver'
			],
			price: 278.99
		},
		{
			name: 'Kitchen Aid ',
			img: images.lgMicrowave,
			category: categories[10],
			details: '1.5 cu. ft. Countertop Microwave',
			searchTerms: [
				'microwave',
				'microwaves',
				'kitchen aid',
				'appliance',
				'silver'
			],
			price: 689.99
		},
		//Power Drills
		{
			name: 'DEWALT',
			img: images.dewaltDrill,
			category: categories[11],
			details: '12V MAX XR Cordless Brushless 3-Speed 1/2 in Drill',
			searchTerms: ['drill', 'drills', 'power tools', 'dewalt', 'yellow'],
			price: 129.99
		},
		{
			name: 'Craftsman',
			img: images.craftsmanDrill,
			category: categories[11],
			details: '20V MAX XR Cordless Brushless 3-Speed 1/2 in Drill',
			searchTerms: ['drill', 'drills', 'craftsman', 'power tools', 'red'],
			price: 99.99
		},
		{
			name: 'Rockwell',
			img: images.rockwellDrill,
			category: categories[11],
			details: '18V MAX XR Cordless Brushless 3-Speed 1/2 in Drill',
			searchTerms: ['drill', 'drills', 'Rockwell', 'power tools', 'green'],
			price: 59.99
		},
		//Toolsets
		{
			name: 'Stanley',
			img: images.stanleyTS,
			category: categories[12],
			details: 'Home Tool Kit (65-Piece)',
			searchTerms: ['toolset', 'stanley', 'yellow'],
			price: 59.99
		},
		{
			name: 'DEWALT',
			img: images.dewaltTS,
			category: categories[12],
			details:
				'1/4 in., 3/8 in., and 1/2 in. Drive Polished Chrome Mechanics Tool Set (200-Piece)',
			searchTerms: ['toolsets', 'dewalt', 'yellow', 'gray'],
			price: 155.99
		},
		{
			name: 'KING',
			img: images.kingTS,
			category: categories[12],
			details: 'Complete Home Pink Tool Kit with Bag (24-Piece)',
			searchTerms: ['toolsets', 'king', 'pink'],
			price: 29.99
		},
		//Nuts and bolts
		{
			name: 'TradesPro',
			img: images.tradesProNB,
			category: categories[13],
			details: '240 Piece Zinc Metric Nut and Bolt Assortment with Storage',
			searchTerms: ['Nuts', 'bolts', 'gray', 'tradespro'],
			price: 7.99
		},
		{
			name: 'Stark',
			img: images.starkNB,
			category: categories[13],
			details:
				'347-Piece SAE Nut And Bolt Assortment Sheet Metal Machine Screw Hardware Kit',
			searchTerms: ['Nuts', 'bolts', 'gray', 'stark'],
			price: 12.99
		},
		{
			name: 'Everbilt',
			img: images.everBitNB,
			category: categories[13],
			details: '405-Piece Zinc-Plated Machine Screw Kit',
			searchTerms: ['Nuts', 'bolts', 'gray'],
			price: 9.99
		},
		//buckets
		{
			name: 'Red Buckets',
			img: images.redBucket,
			category: categories[14],
			details: '5 gallon bucket',
			searchTerms: ['buckets', 'red'],
			price: 12.99
		},
		{
			name: 'Black Buckets',
			img: images.blackBucket,
			category: categories[14],
			details: '16L plastic bucket with lid',
			searchTerms: ['buckets', 'black'],
			price: 14.99
		},
		{
			name: 'white Bucket Set',
			img: images.whiteBucketSet,
			category: categories[14],
			details: '8 piece bucket set, 5 gallons',
			searchTerms: ['buckets', 'white'],
			price: 45.99
		}
	]);

	console.log(items);
	process.exit();
})();
