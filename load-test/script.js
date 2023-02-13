import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  stages: [
    { duration: '30s', target: 2 },
    { duration: '10s', target: 30 },
    { duration: '2m', target: 30 },
    { duration: '10s', target: 2 },
    { duration: '2m', target: 2 },
  ],
}

export default function () {
  const res = http.get('http://api:3000/', { timeout: '2s' })
  check(res, { 'status was 200': (r) => r.status == 200 })
  sleep(0.5)
}