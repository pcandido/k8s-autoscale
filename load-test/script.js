import http from 'k6/http'
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1 },
    { duration: '2m', target: 10 },
    { duration: '2m', target: 2 },
  ],
}

export default function () {
  const res = http.get('http://api:3000/')
  check(res, { 'status was 200': (r) => r.status == 200 })
  sleep(20)
}