// /controllers/api/users.js
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkToken = (req, res) => {
	console.log('req.user', req.user);
	res.json(req.exp);
};

const dataController = {
	// createGuest function
	async createGuest(req, res, next) {
		try {
		  const guestInfo = {
			name: 'Guest',
			email: `${Date.now()}@guest.com`,
			password: `${Date.now()}`, // You can generate a random password for guests
			isGuest: true
		  };
	  
		  const user = await User.create(guestInfo);
	  
		  // Generate JWT token for the guest
		  const token = createJWT(user);
	  
		  // Send back the token as a string
		  res.locals.data.user = user;
		  res.locals.data.token = token;
		  next();
		} catch (e) {
		  console.log('Error creating guest:', e);
		  res.status(500).json({ message: 'Internal Server Error' });
		}
	  },

	async signUp(req, res, next) {
		try {
			req.body.isGuest = false
			const user = await User.findById(req.user._id)
			const updates = Object.keys(req.body)
            updates.forEach(update => user[update] = req.body[update])
            await user.save()
			const token = createJWT(user);
			res.locals.data.user = user;
			res.locals.data.token = token;
			next();
		} catch (e) {
			console.log('you got a database problem');
			res.status(400).json({ message: e.message });
		}
	},
	async login(req, res, next) {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user || !await bcrypt.compare(req.body.password, user.password)) 
			throw new Error();
			res.locals.data.user = user;
			res.locals.data.token = createJWT(user);
			next();
		} catch {
			res.status(400).json('Bad Credentials');
		}
	},

	async update(req, res, next) {
		try {
			const user = await User.findByIdAndUpdate(req.user._id, req.body, {
				new: true
			});
			res.locals.data.user = user;
			res.locals.data.token = createJWT(user);
			next();
		} catch (e) {
			res.status(400).json({ message: e.message });
		}
	},

	async deleteUser(req, res, next) {
		try {
		  await User.findByIdAndDelete(req.user._id); 
		  res.locals.data.user = null; 
		  res.locals.data.token = null; 
		  next();
		} catch (e) {
		  res.status(400).json({ message: e.message });
		}
	  }
	};

const apiController = {
	auth(req, res) {
		res.json(res.locals.data.token);
	}
};

module.exports = {
	checkToken,
	dataController,
	apiController
};

/* -- Helper Functions -- */

function createJWT(user) {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
