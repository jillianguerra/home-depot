require('dotenv').config()

require('./config/database')

const app = require('./app-server')

const PORT = process.env.PORT || 8008

app.listen(PORT, () => {
	console.log(`${PORT} Get in loser, we're going shopping.`)
})