import sendEmail from '../../services/send-email';

const ERROR = {
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  }

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const data = await sendEmail({ name, email, message })
			.catch(error =>{
				console.log(error)
			  return res.status(404).json(ERROR)
			}
		);

		if(data.statusText !== "Accepted"){
			console.log("sendgrid error")
			return res.status(404).json(ERROR)
		}

		console.log('Message sent.')
		return res
				.status(200)
				.json({ message: 'Your message was sent, thanks for reaching out  🚀' });
  }

  return res.status(404).json(ERROR);
};

export default handler;
