// Creator: Grafana k6 Browser Recorder 1.0.4

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  scenarios: {
    main: {
      //Name of executor
      executor: 'constant-vus',
      // more configuration here
      vus: 100,
      duration: '2m',
    },
  },
}

export default function main() {
  let response

  group('page_1 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', function () {
    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      headers: {
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1711595107870',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1711595107870',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1711595107870',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          accept: 'application/json',
          'if-none-match': '"r2bCuSoCq/RIhAIrdHucIA2NuLVeuc+DC+DURIjsY5E="',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          contenttype: 'application/json',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/favicon.ico?v=1711595107870',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1711595107870',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png', {
      headers: {
        referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg', {
      headers: {
        referer: 'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1711595107870',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group(
    'page_2 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
    function () {
      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        {
          _token:
            'b57c3fd7de9eefce9343427.1gpxaN_-beyGvhT-Q8fWf09U7NUiYdOYLpx1SkYITrE.vEw9Wo7PHY3n7mKsM62lGiE4vKZaCuLRTcgmfh5QBtOyRQQBlZIk3rKKcw',
          username: 'Admin',
          password: 'admin123',
        },
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"r2bCuSoCq/RIhAIrdHucIA2NuLVeuc+DC+DURIjsY5E="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/dashboard_empty_widget_watermark.png',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=5.5&currentDate=2024-07-17&currentTime=20:55',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2024-07-17',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/events/push',
        null,
        {
          headers: {
            accept: 'application/json',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/22',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/11',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/photo/9', {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/9',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_3 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMyDetails',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMyDetails',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1711595107870',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1711595107870',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1711595107870',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"r2bCuSoCq/RIhAIrdHucIA2NuLVeuc+DC+DURIjsY5E="',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1711595107870',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1711595107870',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7/personal-details',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7/custom-fields?screen=personal',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7/screen/personal/attachments?limit=50&offset=0',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2024-01-01&toDate=2024-12-31',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2024-01-01&toDate=2024-12-31',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.put(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/7/personal-details',
        '{"lastName":"LastNameTest","firstName":"Ashish","middleName":"akhil","employeeId":"Employee","otherId":"OtherIdTest","drivingLicenseNo":"DriversLicenseTest","drivingLicenseExpiredDate":"2025-10-03","gender":1,"maritalStatus":"Single","birthday":"2023-10-21","nationalityId":82}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_4 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',
    function () {
      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout', {
        headers: {
          referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"r2bCuSoCq/RIhAIrdHucIA2NuLVeuc+DC+DURIjsY5E="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1711595107870',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get('https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png', {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg', {
        headers: {
          referer: '',
        },
      })
    }
  )

  // Automatically added sleep
  sleep(1)
}
