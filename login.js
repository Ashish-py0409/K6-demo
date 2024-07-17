import http from 'k6/http';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { vu } from 'k6/execution'
import { SharedArray } from 'k6/data';
import { check } from 'k6';

const csvData = new SharedArray("creds", function () {
    return papaparse.parse(open("data.csv"), { header: true }).data
})

export const options = {
    scenarios: {
        main: {
            executor: 'constant-vus',
            //iterations: 2,
            vus: csvData.length, // 2 VUS -> 2 iter
            duration: "2s"
        }
    }
}

export default function main() {
    const baseUrl = "https://fakestoreapi.com/auth/login"
    let username = csvData[vu.idInTest - 1].username
    let password = csvData[vu.idInTest - 1].password

    const data = JSON.stringify({
        "username": username,
        "password": password
    })

    let headers = {
        'Content-Type': `application/json`
    }

    let response = http.post(`${baseUrl}`, data, {
        headers: headers
    })

    console.log(response.timings.duration);

    check(response, {
        'status is ok': (r) => { r.status === 200 },
    })
}