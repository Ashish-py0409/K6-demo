import { Httpx } from 'https://jslib.k6.io/httpx/0.1.0/index.js';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '30s', target: 40 },
    { duration: '30s', target: 80 },
    { duration: '30s', target: 120 },
    { duration: '30s', target: 140 },
    { duration: '1m30s', target: 200 },
    { duration: '20s', target: 0 },
  ],
}

const session = new Httpx({
  headers: {
    "accept": "text/plain; v=1.0"
  }
});

export default function () {
  let response = session.get("https://fakerestapi.azurewebsites.net/api/v1/Activities");
  console.log(response.timings.duration);
  check(response, { 'Response is 200': (res) => res.status === 200 });
  sleep(1);
}

// har to k6
// metrics