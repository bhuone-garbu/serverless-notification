import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-2' });

async function sendMail(event, context) {
  const params = {
    Source: process.env.PRIVATE_EMAIL,
    Destination: {
      ToAddresses: [process.env.PRIVATE_EMAIL],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello fom bhuone-garbu'
        }
      },
      Subject: {
        Data: 'Test Mail'
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;


