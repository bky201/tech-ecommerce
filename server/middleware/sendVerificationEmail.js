import nodemailer from 'nodemailer';
// urse jaaz yqhu felo
// mohammedbekry1@gmail.com
// https://miracleio.me/snippets/use-gmail-with-nodemailer
export const sendVerificationEmail = (token, email, name) => {
    const html = `
    <html>
        <body>
            <h3>Dear ${name}</h3>
            <p>Thanks for signing up at Tech Lines!</p>
            <p>Use the link below to verify your email</p>
            <a href="http://localhost:3000/email-verify/${token}">Click here!</a>
        </body>
    </html>
    `;

    const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'mohammedbekry1@gmail.com',
			pass: 'urse jaaz yqhu felo',
		},
	});

	const mailOptions = {
		from: 'mohammedbekry1@gmail.com',
		to: email,
		subject: 'Verify your email address',
		html: html,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log(`Email send to ${email}`);
			console.log(info.response);
		}
	});

}