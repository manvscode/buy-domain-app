const Config = {
	port: 9001,
	emailRecipients: ['manvscode@gmail.com', 'mkamb001@yahoo.com'],
	gmailSmtpUser:'manvscode@gmail.com',
	gmailSmtpPass: 'hpigugrwpqlooqne',
	corsWhitelist: [
		'http://tikitock.com',
		'https://tikitock.com',
		'http://www.tikitock.com',
		'https://www.tikitock.com',

		'http://lostdude.com',
		'https://lostdude.com',
		'http://www.lostdude.com',
		'https://www.lostdude.com',

		'http://unitserver.com',
		'https://unitserver.com',
		'http://www.unitserver.com',
		'https://www.unitserver.com',

		'http://jobtician.com',
		'https://jobtician.com',
		'http://www.jobtician.com',
		'https://www.jobtician.com',

		'http://127.0.0.1:8080',
		'http://localhost:8080',
	],
}

module.exports = Config
