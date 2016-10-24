import request from 'request-promise';

export default async () => {
  let results;

  const options = {
    uri: process.env.API_URL,
    headers: {
      Authorization: `token ${process.env.API_TOKEN}`,
      'User-Agent': process.env.API_USER_AGENT
    },
    timeout: +process.env.API_TIMEOUT
  }

  const start = Date.now();

  try {
    results = await request(options);
  } catch(e) {
    console.log(e);
    results = null;
  }

  const end = Date.now();

  console.log(`Took ${end - start} milliseconds`);

  return results;
}
