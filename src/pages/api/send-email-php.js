import sendEmail from '../../services/sendmail';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    await sendEmail({ name, email, message });

	return res
      .status(200)
      .json({ message: 'Your message was sent, thanks for reaching out  🚀' });
  }

  return res.status(404).json({
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

export default handler;
