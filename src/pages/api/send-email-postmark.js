import { Client } from 'postmark';
import { Configuration, OpenAIApi } from 'openai'

const handler = async (req, res) => {
  if (req.method === 'POST') {

	const sendEmail = true // set to false to skip sending email; for testing purposes
    const { name, email, message } = req.body;

    const HtmlBody = `<h1>Contact from = </h1><p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`;
    const TextBody = `Contact from ${name}: \r\n${email}\r\n${message}`;

	console.log('HtmlBody: ', HtmlBody)
	console.log('TextBody: ', TextBody)

	let isSpam = ''
    let spamPrefix = '❌'
    // ai spam check
    let isAISpam = false

    // // Check for spam using Postmark's spam check API (spamcheck.postmarkapp.com):
    // const isPostSpam = await fetch('https://spamcheck.postmarkapp.com/filter', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-Postmark-Server-Token': process.env.POSTMARK_TOKEN,
    //   },
    //   body: JSON.stringify({
	// 	options: 'short',
    //     email: `Contact from ${name}:\r\nEmail:\r\n${email}\r\nMessage:\r\n${message}`,
    //   }),
    // })
    //   .then(async (response) => {
	// 			const data = await response.json()
	// 			console.log(data.score)
	// 			// {
	// 			// 	success: true,
	// 			// 	score: '7.9',
	// 			// 	rules: [
	// 			// 		{ score: '1.2', description: 'Missing To: header' },
	// 			// 		{
	// 			// 			score: '-0.0',
	// 			// 			description: 'Informational: message was not relayed via SMTP'
	// 			// 		},
	// 			// 		{ score: '0.1', description: 'Missing Message-Id: header' },
	// 			// 		{ score: '1.0', description: 'Missing From: header' },
	// 			// 		{
	// 			// 			score: '2.3',
	// 			// 			description: 'Message appears to have no textual parts'
	// 			// 		},
	// 			// 		{ score: '1.4', description: 'Missing Date: header' },
	// 			// 		{ score: '1.8', description: 'Missing Subject: header' },
	// 			// 		{
	// 			// 			score: '-0.0',
	// 			// 			description: 'Informational: message has no Received headers'
	// 			// 		},
	// 			// 		{
	// 			// 			score: '0.0',
	// 			// 			description: 'Message appears to be missing most RFC-822 headers'
	// 			// 		}
	// 			// 	],
	// 			// 	report: ' pts rule                   description                                       \n' +
	// 			// 		'---- ---------------------- --------------------------------------------------\n' +
	// 			// 		' 1.2 MISSING_HEADERS        Missing To: header                                \n' +
	// 			// 		'-0.0 NO_RELAYS              Informational: message was not relayed via SMTP   \n' +
	// 			// 		' 0.1 MISSING_MID            Missing Message-Id: header                        \n' +
	// 			// 		' 1.0 MISSING_FROM           Missing From: header                              \n' +
	// 			// 		' 2.3 EMPTY_MESSAGE          Message appears to have no textual parts          \n' +
	// 			// 		' 1.4 MISSING_DATE           Missing Date: header                              \n' +
	// 			// 		' 1.8 MISSING_SUBJECT        Missing Subject: header                           \n' +
	// 			// 		'-0.0 NO_RECEIVED            Informational: message has no Received headers    \n' +
	// 			// 		' 0.0 NO_HEADERS_MESSAGE     Message appears to be missing most RFC-822 headers'
	// 			// }
	// 			return data.score
	// 		})

    // console.log(`Postmark Spam Check: ${console.dir(isPostSpam)}`);

      // if (isPostSpam && spamPrefix) {
    //   return res.status(400).json({
    //     error: {
      //       code: 'bad_request',
      //       message: 'Your message was flagged as spam.',
      //     },
      //   });
      // }

      // break the app if the API key is missing
    //   if (!process.env.OPENAI_API_KEY) {
    //     return res.status(404).json({
    //       error: {
    //         code: 'not_found',
    //         message:
    //           "The requested endpoint was not found or doesn't support this method.",
    //       },
    //     });
    // }

    // const configuration = new Configuration({
    //   apiKey: process.env.OPENAI_API_KEY,
    // });

    // const openai = new OpenAIApi(configuration);

// {
// 	"id":"chatcmpl-abc123",
// 	"object":"chat.completion",
// 	"created":1677858242,
// 	"model":"gpt-3.5-turbo-0301",
// 	"usage":{
// 		"prompt_tokens":13,
// 		"completion_tokens":7,
// 		"total_tokens":20
// 	},
// 	"choices":[
// 		{
// 			"message":{
// 				"role":"assistant",
// 				"content":"\n\nThis is a test!"
// 			},
// 			"finish_reason":"stop",
// 			"index":0
// 		}
// 	]
// }

    // const response = await openai.createCompletion({
	// 		// model: 'gpt-3.5-turbo',
	// 		// model: "text-moderation-latest",
	// 		model: "text-davinci-003",
	// 		// prompt: "Respond with `true` if you believe the message to be legitimate business correspondance or `false` if the message seems like a scam or promotion.",
	// 		// prompt:  'USER: Answer the question based on the context below. Keep the answer short and concise. Respond "Unsure about answer" if not sure about the answer.'
	// 		// Context: `A website form is getting a lot of spam email from a small, local business. Would you be able to give me a floating point number between 0 and 1 that represents the probability that the following message is spam? The closer to 1, the more likely it is spam. The closer to 0, the less likely it is spam. \n\n failing business and need as much accuracy to avoid false positives.
	// 		// Here is the Message: ' + body.message + '\n\nAnswer:,
	// 		// Question: `Does this message seem legitimate or like suspicuious spam. It was submitted via a homemade php contact form`?
	// 		prompt: `The following messages are from a contact form for a therapist. Answer "spam" if the following message seems like spam or an unwanted business promotion. Answer "notspam" if the message seems legitimate. Message: ${TextBody} Answer: `,
	// 		temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.3,
	// 		max_tokens: process.env.AI_MAX_TOKENS
	// 		? parseInt(process.env.AI_MAX_TOKENS)
	// 		: 100,
	// 		top_p: 1,
	// 		frequency_penalty: 0,
	// 		presence_penalty: 0,
	// 		stop: ["\n"],
	// })
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		// if(response.status < 400) {
	// 		// 	console.log(response.data)
	// 		// 	throw new Error(response)
	// 		// }

	// 		console.log(response.data)
	// 		// const data = response.data.choices[0].text;
	// 		// let isSpam = data === 'spam' ? '[❌ AI: SPAM]' : ''

	// 		// return data
	// 		return response
	// 	})
	// 	.catch((error) => {
	// 		return error
	// 	});

		// let isSpam = data === 'spam' ? '[❌ AI: SPAM]' : ''



		// isSpam = (!isSpam && isPostSpam ) ? '[❌ MAYBE: SPAM]' : ''

    // // if (data === 'true') {
    // //   return res.status(400).json({
    // //     error: {
    // //       code: 'bad_request',
    // //       message: '❌ Your message seems to flagged as spam.',
    // //     },
    // //   });
    // // }

    // Send an email via postmark:
		if(sendEmail) {
			const subject = `${isSpam || '👻'} SusanMorrow.us Inquiry: ${name}`

			const postmarkClient = new Client(process.env.POSTMARK_TOKEN || '');

			await postmarkClient.sendEmail({
				From: 'susan@susanmorrow.us',
				To: 'me@lacymorrow.com',
				Subject: subject,
				HtmlBody,
				TextBody,
				MessageStream: 'outbound',
			});

			const emailResponse = await postmarkClient.sendEmail({
				From: 'susan@susanmorrow.us',
				To: process.env.RECEIVING_EMAIL || 'me@lacymorrow.com',
				Subject: subject,
				HtmlBody,
				TextBody,
				MessageStream: 'outbound',
			});

			console.dir(emailResponse);

			if(emailResponse.ErrorCode === 0) {
				return res
					.status(200)
					.json({ message: 'Your message was sent, thanks for reaching out  🚀' });
			}
		} else {
			// Testing, don't send email
			return res
				.status(200)
				.json({ message: 'You are in test mode, your message was not sent  🚀' });
		}
  } // POST Request

  return res.status(404).json({
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

export default handler;
