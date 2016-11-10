import axios from 'axios';

// Vanilla Lambda function.
export default async (e, ctx) => {
  console.log('fetching %d urls', e.urls.length);

  try {
    const res = await Promise.all(e.urls.map(async (url) => {
      console.log('fetching %s', url);
      return {
        status: (await axios.get(url)).status,
        url,
      };
    }));

    ctx.succeed(res);
  } catch (err) {
    ctx.fail(err);
  }
};
