#!/usr/bin/env node
const express = require('express')
const app = express()
const cors = require('cors')
const Condition = require('conditional')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const config = require('./config')

// Using express behind a proxy.
//app.set('trust proxy', true)
app.set('trust proxy', 'loopback') // specify a single subnet

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

const corsOptionsDelegate = function (req, callback) {
	const whitelist = config.corsWhitelist
	Condition.checkNotEmpty(whitelist, 'CORS whitelist cannot be empty.')
	const origin = req.header('Origin')
	const isAllowed = whitelist.indexOf(origin) !== -1

	callback(null /*error*/, {
		origin: isAllowed
	})
}

// Enable CORS
app.use(cors(corsOptionsDelegate))

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: config.gmailSmtpUser,
		pass: config.gmailSmtpPass
	}
})


// respond with "hello world" when a GET request is made to the homepage
app.post('/api/buy-domain', buyDomain)


async function buyDomain(req, res) {
	const payload = req.body

	try {
		Condition.checkNotEmpty(payload.domain, 'Domain cannot be empty.')
		Condition.checkNotEmpty(payload.email, 'Email address cannot be empty.')
		Condition.checkNotEmpty(payload.offer, "Offer amount cannot be empty.")

		const mailOptions = {
			from: payload.email,
			to: config.emailRecipients.join(','),
			subject: '[' + payload.domain + '] I want to buy your domain!',
			html: `<p> I want to buy ${payload.domain}.</p><br><b>Email:</b> ${payload.email}<br><b>Phone:</b> ${payload.phone}<br><b>Offer:</b> ${payload.offer}<br><br>`
		}

		const info = await transporter.sendMail(mailOptions)
		console.log('Email sent: ' + info.response)
		res.status(200).end()
	}
	catch (error) {
		console.log(error)
		res.status(400).type('json').send({ error: 'Failed to send message.'})
	}
}

app.listen(config.port, () => console.log(`API: http://localhost:${config.port}`))
