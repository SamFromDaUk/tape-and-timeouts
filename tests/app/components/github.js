import 'babel-polyfill';
import test from 'tape';
import proxyquire from 'proxyquire';
import promise from 'promise';

let promise_handler = () => {};

const github = proxyquire('../../../app/components/github', {
  'request-promise': async (options) => {
    return await promise_handler(options);
  }
});

test('github: Handles timeouts by returning null', async (assert) => {
  assert.plan(1);

  process.env.API_TOKEN=123;
  process.env.API_URL='github';
  process.env.API_TIMEOUT='500';

  promise_handler = (options) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Timeout 600ms');
      }, 600);
    });
  }

  const result = await github.default();

  assert.equal(result, null);
});
