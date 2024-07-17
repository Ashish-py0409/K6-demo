// Creator: Grafana k6 Browser Recorder 1.0.4

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '20s', target: 0 },
  ],
}

export default function main() {
  let response

  group('page_1 - https://www.google.com/', function () {

    response = http.get(
      'https://www.google.com/complete/search?q&cp=0&client=gws-wiz&xssi=t&gs_pcrt=2&hl=en-IN&authuser=0&psi=ZWmFZom0K6Lg2roPoYWC6AY.1720019302863&dpr=1.25',
      {
        headers: {
          referer: 'https://www.google.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-arch': '"x86"',
          'sec-ch-ua-bitness': '"64"',
          'sec-ch-ua-full-version': '"126.0.6478.127"',
          'sec-ch-ua-full-version-list':
            '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-model': '""',
          'sec-ch-ua-platform': '"Windows"',
          'sec-ch-ua-platform-version': '"15.0.0"',
          'sec-ch-ua-wow64': '?0',
        },
      }
    )
  })

  group(
    'page_2 - https://www.google.com/search?q=laptop&sca_esv=a171c0af4a6cee4c&sca_upv=1&sxsrf=ADLYWIKGjZlLxD8_CfS6xy-cfgt25nhsPw%3A1720019301759&source=hp&ei=ZWmFZom0K6Lg2roPoYWC6AY&iflsig=AL9hbdgAAAAAZoV3dX9zRz2YywrjnrR7gD6yEUQ2BKUd&ved=0ahUKEwjJ-vCbk4uHAxUisFYBHaGCAG0Q4dUDCA0&uact=5&oq=laptop&gs_lp=Egdnd3Mtd2l6IgZsYXB0b3AyCBAAGIAEGLEDMgsQABiABBixAxjJAzIKEAAYgAQYAhjLATIIEAAYgAQYsQMyCBAAGIAEGJIDMggQABiABBiSAzIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixAzIFEAAYgARIihhQgAtYuhBwAXgAkAEBmAHbAqABuwyqAQUyLTQuMrgBA8gBAPgBAZgCBqAClwqoAgrCAgcQIxgnGOoCwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgILEAAYgAQYsQMYigXCAg4QLhiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIKEAAYgAQYsQMYCsICChAuGIAEGLEDGAqYAxaSBwcxLjAuNC4xoAe3Mg&sclient=gws-wiz',
    function () {
      response = http.get(
        `https://www.google.com/search?q=laptop&sca_esv=a171c0af4a6cee4c&sca_upv=1&sxsrf=${user_id}-cfgt25nhsPw%3A1720019301759&source=hp&ei=ZWmFZom0K6Lg2roPoYWC6AY&iflsig=AL9hbdgAAAAAZoV3dX9zRz2YywrjnrR7gD6yEUQ2BKUd&ved=0ahUKEwjJ-vCbk4uHAxUisFYBHaGCAG0Q4dUDCA0&uact=5&oq=laptop&gs_lp=Egdnd3Mtd2l6IgZsYXB0b3AyCBAAGIAEGLEDMgsQABiABBixAxjJAzIKEAAYgAQYAhjLATIIEAAYgAQYsQMyCBAAGIAEGJIDMggQABiABBiSAzIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixAzIFEAAYgARIihhQgAtYuhBwAXgAkAEBmAHbAqABuwyqAQUyLTQuMrgBA8gBAPgBAZgCBqAClwqoAgrCAgcQIxgnGOoCwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgILEAAYgAQYsQMYigXCAg4QLhiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIKEAAYgAQYsQMYCsICChAuGIAEGLEDGAqYAxaSBwcxLjAuNC4xoAe3Mg&sclient=gws-wiz`,
        {
          headers: {
            referer: 'https://www.google.com/',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/googlesans/v29/4UaRrENHsxJlGDuGo1OIlJfC6mGS6vhAK1YobMu2vgCI.woff2',
        {
          headers: {
            origin: 'https://www.google.com',
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://lh3.google.com/u/0/ogw/AF2bZygLoeGhl8u5qqrDqX78FHfLxVkJ6XvHC4VN15L7uBWhjQ=s32-c-mo',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.google.com/images/searchbox/desktop_searchbox_sprites318_hr.webp',
        {
          headers: {
            referer:
              'https://www.google.com/search?q=laptop&sca_esv=a171c0af4a6cee4c&sca_upv=1&sxsrf=ADLYWIKGjZlLxD8_CfS6xy-cfgt25nhsPw%3A1720019301759&source=hp&ei=ZWmFZom0K6Lg2roPoYWC6AY&iflsig=AL9hbdgAAAAAZoV3dX9zRz2YywrjnrR7gD6yEUQ2BKUd&ved=0ahUKEwjJ-vCbk4uHAxUisFYBHaGCAG0Q4dUDCA0&uact=5&oq=laptop&gs_lp=Egdnd3Mtd2l6IgZsYXB0b3AyCBAAGIAEGLEDMgsQABiABBixAxjJAzIKEAAYgAQYAhjLATIIEAAYgAQYsQMyCBAAGIAEGJIDMggQABiABBiSAzIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixAzIFEAAYgARIihhQgAtYuhBwAXgAkAEBmAHbAqABuwyqAQUyLTQuMrgBA8gBAPgBAZgCBqAClwqoAgrCAgcQIxgnGOoCwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgILEAAYgAQYsQMYigXCAg4QLhiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIKEAAYgAQYsQMYCsICChAuGIAEGLEDGAqYAxaSBwcxLjAuNC4xoAe3Mg&sclient=gws-wiz',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.googleadservices.com/pagead/conversion/16521530460/?gad_source=1&adview_type=1&adview_query_id=CJ-VsKGTi4cDFboOewcdO5kG2A',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.google.com/pagead/1p-conversion/16521530460/?gad_source=1&adview_type=4&adview_query_id=CJ-VsKGTi4cDFboOewcdO5kG2A',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.googleadservices.com/regsrc?asi=ChsKEwjHn5qGmoWHAxWQq2YCHTm2DdQQABgCIAAQABgBIAA4lbfU9ihA3PiR_ANItenH9ktQvLLwzbQEWgJJTmAAcAR4AoABAYgBA5IBmgEKEwiQ8ommmoWHAxWCqWYCHfh_CKMQAhqAAU1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCAxNDsgU00tRzk5OEIpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjYuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYsZ3ppcChnZmUpmgEUaHR0cHM6Ly9iaWdzaHlmdC5jb22oAQuyASgQAjICgEA6DcvxgICAgASCwICAhCBCAQRI0ezzKlAJWJ-VsKGTi4cDugETCJ-VsKGTi4cDFboOewcdO5kG2MIBDJm1sQLqsbECicGxAtABAdoBfQp5TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNi4wLjAuMCBTYWZhcmkvNTM3LjM2LGd6aXAoZ2ZlKRAB6gF5TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNi4wLjAuMCBTYWZhcmkvNTM3LjM2LGd6aXAoZ2ZlKfABAQ&cid=CAESDeD2qQNTfH0orWSBN9Y',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.googleadservices.com/regsrc?asi=ChsKEwjHn5qGmoWHAxWQq2YCHTm2DdQQABgBIAAQABgBIAA4wtSUwANAhpWLmgNI9IDM8D9QwNOEi5UEWgJJTmABcAR4AoABAYgBA5IBmgEKEwjFueaImoWHAxXzF4MDHbYIBPwQAhqAAU1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCAxNDsgU00tRzk5OEIpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjYuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYsZ3ppcChnZmUpmgESaHR0cHM6Ly9pbmRlZWQuY29tqAELsgEoEAIyAoBAOg3L8YCAgIAEgsCAgIQgQgEESNHs8ypQCViflbChk4uHA7oBEwiflbChk4uHAxW6DnsHHTuZBtjCAQyZtbEC6rGxAonBsQLQAQHaAX0KeU1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjYuMC4wLjAgU2FmYXJpLzUzNy4zNixnemlwKGdmZSkQAeoBeU1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjYuMC4wLjAgU2FmYXJpLzUzNy4zNixnemlwKGdmZSnwAQE&cid=CAESDeD2mA0XsuQdU1Kkd1I',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://id.google.com/verify/ABDN9YcRwOvMqTJezPa_SdCUaOlVutferH0YHWQ3CTQDR4w0DWy9_oDPyentdBgEPwtVL54kOXFJZwki3bPxW9xId8edU491n18b1lRP-_OkglOjRA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get('https://www.google.com/images/nav_logo321_hr.webp', {
        headers: {
          referer:
            'https://www.google.com/search?q=laptop&sca_esv=a171c0af4a6cee4c&sca_upv=1&sxsrf=ADLYWIKGjZlLxD8_CfS6xy-cfgt25nhsPw%3A1720019301759&source=hp&ei=ZWmFZom0K6Lg2roPoYWC6AY&iflsig=AL9hbdgAAAAAZoV3dX9zRz2YywrjnrR7gD6yEUQ2BKUd&ved=0ahUKEwjJ-vCbk4uHAxUisFYBHaGCAG0Q4dUDCA0&uact=5&oq=laptop&gs_lp=Egdnd3Mtd2l6IgZsYXB0b3AyCBAAGIAEGLEDMgsQABiABBixAxjJAzIKEAAYgAQYAhjLATIIEAAYgAQYsQMyCBAAGIAEGJIDMggQABiABBiSAzIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixAzIFEAAYgARIihhQgAtYuhBwAXgAkAEBmAHbAqABuwyqAQUyLTQuMrgBA8gBAPgBAZgCBqAClwqoAgrCAgcQIxgnGOoCwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgILEAAYgAQYsQMYigXCAg4QLhiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIKEAAYgAQYsQMYCsICChAuGIAEGLEDGAqYAxaSBwcxLjAuNC4xoAe3Mg&sclient=gws-wiz',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-arch': '"x86"',
          'sec-ch-ua-bitness': '"64"',
          'sec-ch-ua-full-version': '"126.0.6478.127"',
          'sec-ch-ua-full-version-list':
            '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-model': '""',
          'sec-ch-ua-platform': '"Windows"',
          'sec-ch-ua-platform-version': '"15.0.0"',
          'sec-ch-ua-wow64': '?0',
        },
      })

      response = http.post(
        'https://www.google.com/gen_204?s=web&t=aft&atyp=csi&ei=cWmFZqWrCf2t0-kPtL6l-Ak&rt=wsrt.278,aft.773,afti.773,afts.746,frts.746,frvt.773,hst.116,prt.1103,sct.510&frtp=1145&imn=143&ima=8&imad=8&imac=6&wh=643&aftie=2ahUKEwjlp6uhk4uHAxX91jQHHTRfCZ8Q-pcBegQIDBAG&aft=1&aftp=643&opi=89978449',
        null,
        {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/ss/k=xjs.s.iyvtSME9zfA.L.B1.O/am=AMyBQgAAgACHBgQAAAAAAAAAAAAAAACQAABACAAAAAABCgBAJgcABAA2BAAAH-AQgAAAAAAAAFAAAAAAPAMAAAgAQAKAAAABAQAAAAAAwAEAAAAigACAAEKgAAJIABQIABlAAACACGAxDIBUADBwBAAAAAiAAAAAAADcCAAgQAAAiAAIwAOIACAACKAAwAAAAgEAAIAcYCAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAgAAAAAAAAAAAAAAAAAAAAQ/d=1/ed=1/br=1/rs=ACT90oEX4XQf1SsO3ljW2P3cdCFP6kkv4A/m=attn,cdos,gwc,hsm,jsa,mb4ZUb,d,csi,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.gstatic.com/og/_/js/k=og.asy.en_US.sy4m_TYpbc8.2019.O/rt=j/m=_ac,_awd,adrc,ada,lldp/exm=/d=1/ed=1/rs=AA2YrTvA6ePtftTfdGBjHwQkqaFPPVyCXg',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.gstatic.com/og/_/ss/k=og.asy.lIrihRtkXLc.L.W.O/m=ll_tdm,adcgm3,ll_fw/excm=/d=1/ed=1/ct=zgms/rs=AA2YrTsjYRVqCH5zoYAUN0HfRyfLhvdZZQ',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=1/ed=1/dg=2/br=1/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug/ee=ALeJib:B8gLwd;AfeaP:TkrAjf;BMxAGc:E5bFse;BgS6mb:fidj5d;BjwMce:cXX2Wb;CxXAWb:YyRLvc;DM55c:imLrKe;DULqB:RKfG5c;Dkk6ge:wJqrrd;DpcR3d:zL72xf;EABSZ:MXZt9d;ESrPQc:mNTJvc;EVNhjf:pw70Gc;EmZ2Bf:zr1jrb;EnlcNd:WeHg4;Erl4fe:FloWmf,FloWmf;F9mqte:UoRcbe;Fmv9Nc:O1Tzwc;G0KhTb:LIaoZ;G6wU6e:hezEbd;GleZL:J1A7Od;HMDDWe:G8QUdb;HoYVKb:PkDN7e;HqeXPd:cmbnH;IBADCc:RYquRb;IZrNqe:P8ha2c;IoGlCf:b5lhvb;IsdWVc:qzxzOb;JXS8fb:Qj0suc;JbMT3:M25sS;JsbNhc:Xd8iUd;KOxcK:OZqGte;KQzWid:ZMKkN;KcokUb:KiuZBf;KpRAue:Tia57b;LBgRLc:SdcwHb,XVMNvd;LEikZe:byfTOb,lsjVmc;LsNahb:ucGLNb;Me32dd:MEeYgc;NPKaK:SdcwHb;NSEoX:lazG7b;Np8Qkd:Dpx6qc;Nyt6ic:jn2sGd;OgagBe:cNTe0;Oj465e:KG2eXe,KG2eXe;OohIYe:mpEAQb;Pjplud:EEDORb,PoEs9b;PqHfGe:im2cZe;Q1Ow7b:x5CSu;Q6C5kf:pfdZCe;QGR0gd:Mlhmy;R2kc8b:ALJqWb;R4IIIb:QWfeKf;R9Ulx:CR7Ufe;RDNBlf:zPRCJb;SLtqO:Kh1xYe;SMDL4c:fTfGO,fTfGO;SNUn3:ZwDk9d,x8cHvb;ShpF6e:N0pvGc;TxfV6d:YORN0b;U96pRd:FsR04;UBKJZ:LGDJGb;UDrY1c:eps46d;UVmjEd:EesRsb;UyG7Kb:wQd0G;V2HTTe:RolTY;VGRfx:VFqbr;VN6jIc:ddQyuf;VOcgDe:YquhTb;VsAqSb:PGf2Re;VxQ32b:k0XsBb;WCEKNd:I46Hvd;WDGyFe:jcVOxd;Wfmdue:g3MJlb;XUezZ:sa7lqb;YV5bee:IvPZ6d;YkQtAf:rx8ur;ZMvdv:PHFPjb;ZSH6tc:QAvyLe;ZWEUA:afR4Cf;Zen4yb:jMF88c;a56pNe:JEfCwb;aAJE9c:WHW6Ef;aCJ9tf:qKftvc;aZ61od:arTwJ;af0EJf:ghinId;bDXwRe:UsyOtc;bFZ6gf:RsDQqe;bcPXSc:gSZLJb;cEt90b:ws9Tlc;cFTWae:gT8qnd;coJ8e:KvoW8;dIoSBb:ZgGg9b;dLlj2:Qqt3Gf;daB6be:lMxGPd;dtl0hd:lLQWFe;eBAeSb:Ck63tb;eBZ5Nd:VruDBd;eHDfl:ofjVkb;eO3lse:nFClrf;euOXY:OZjbQ;g8nkx:U4MzKc;gaub4:TN6bMe;gtVSi:ekUOYd;h3MYod:cEt90b;hK67qb:QWEO5b;heHB1:EtZ8Cd;hjRo6e:F62sG;hsLsYc:Vl118;iFQyKf:QIhFr,vfuNJf;imqimf:jKGL2e;io8t5d:sgY6Zb;jY0zg:Q6tNgc;k2Qxcb:XY51pe;kCQyJ:ueyPK;kMFpHd:OTA3Ae;kbAm9d:MkHyGd;lkq0A:JyBE3e;nAFL3:NTMZac,s39S4;nJw4Gd:dPFZH;oGtAuc:sOXFj;oSUNyd:fTfGO,fTfGO;oUlnpc:RagDlc;okUaUd:wItadb;pKJiXd:VCenhc;pNsl2d:j9Yuyc;pXdRYb:JKoKVe;pj82le:mg5CW;qGV2uc:HHi04c;qZx2Fc:j0xrE;qaS3gd:yiLg6e;qavrXe:zQzcXe;qddgKe:d7YSfd,x4FYXe;rQSrae:C6D5Fc;sP4Vbe:VwDzFe;sTsDMc:kHVSUb;sZmdvc:rdGEfc;tH4IIe:Ymry6;tosKvd:ZCqP3;trZL0b:qY8PFe;uY49fb:COQbmf;uuQkY:u2V3ud;vGrMZ:lPJJ0c;vfVwPd:lcrkwe;w3bZCb:ZPGaIb;w4rSdf:XKiZ9;w9w86d:dt4g2b;wQlYve:aLUfP;wR5FRb:O1Gjze,TtcOte;wV5Pjc:L8KGxe;whEZac:F4AmNb;xBbsrc:NEW1Qc;xbe2wc:wbTLEd;ysNiMc:CpIBjd;yxTchf:KUM7Z;z97YGf:oug9te;zOsCQe:Ko78Df;zaIgPb:Qtpxbd/m=attn,cdos,gwc,hsm,jsa,mb4ZUb,d,csi,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl?cb=KSYIDmRZNORQSclT',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/complete/search?q&cp=0&client=gws-wiz-serp&xssi=t&gs_pcrt=2&hl=en-IN&authuser=0&pq=laptop&psi=cWmFZqWrCf2t0-kPtL6l-Ak.1720019315687&dpr=1.25',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/complete/search?q=laptop&cp=0&client=desktop-gws-wiz-on-focus-serp&xssi=t&gs_pcrt=3&hl=en-IN&authuser=0&pq=laptop&psi=cWmFZqWrCf2t0-kPtL6l-Ak.1720019315687&dpr=1.25&ofp=EAEyjQEKDgoMbGFwdG9wIHByaWNlCgsKCWxhcHRvcCBocAoNCgtkZWxsIGxhcHRvcAoRCg9ocCBsYXB0b3AgcHJpY2UKDwoNbGVub3ZvIGxhcHRvcAoOCgxsYXB0b3AgYXBwbGUKFAoSbGFwdG9wIHVuZGVyIDIwMDAwChMKEWRlbGwgbGFwdG9wIHByaWNlEEcyZQokCiJXaGljaCBicmFuZCBpcyBiZXN0IHRvIGJ1eSBsYXB0b3A_ChwKGldoaWNoIGlzIGJlc3QsIERlbGwgb3IgSFA_ChwKGldoaWNoIGxhcHRvcCBzaXplIGlzIGJlc3Q_EOQC',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=csi&ei=cWmFZqWrCf2t0-kPtL6l-Ak&s=web&t=all&frtp=1145&imn=143&ima=8&imad=8&imac=6&wh=643&aftie=2ahUKEwjlp6uhk4uHAxX91jQHHTRfCZ8Q-pcBegQIDBAG&aft=1&aftp=643&adh=tv.623.6250152587891,t.175.0250244140625,tcu.442.6000061035156&cls=0.0002427928175641173&ime=0&imeae=0&imeap=0&imex=0&imeh=9&imeha=9&imehb=0&imea=0&imeb=0&imel=0&imed=0&imeeb=0&scp=0&cb=226974&ucb=1201458&mem=ujhs.29,tjhs.47,jhsl.4295,dm.8&nv=ne.2,feid.3ace8026-2379-46e3-b8e5-229e99718665&net=dl.4300,ect.4g,rtt.200&hp=&sys=hc.12&p=bs.false&rt=hst.116,sct.510,frts.746,frvt.773,prt.1103,afti.773,aftip.764,afts.746,aft.773,aftqf.1144,xjspls.1259,xjsls.1259,dcl.1295,xjses.2395,xjsee.2484,xjs.2484,lcp.802,fcp.185,wsrt.278,cst.0,dnst.0,rqst.1344,rspt.1088,rqstt.22,unt.11,cstt.11,dit.1573&zx=1720019315771&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/ck=xjs.s.iyvtSME9zfA.L.B1.O/am=AMyBQgAAgACHBgQAAAAAAAAAAAAAAACQAABACAAAAABBSiBIJgcAFAA2BAAAH-AQgAAAQCAAgFAAACAAPgMlAgoAQAKAAAgFAfz-EwAAwAEAAAAigEyAAEKg4AJIABQIADlAAACACGAxDIBUADBwBAAAAAiAAAAAgAHc2A8gQAAAiAAIwAOIACAADeD4wQCAAhFAEIAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=1/exm=SNUn3,attn,cEt90b,cdos,csi,d,dtl0hd,eHDfl,gwc,hsm,jsa,mb4ZUb,qddgKe,sTsDMc/excm=ABxRVc,AD6AIb,AOTkuc,B0xr7b,BH66lf,Bbm9gb,CJucxe,CX5LId,CalA8,Cl1Hgb,D1J6He,DwS4bb,E9dJ8c,FljZ5,FmnE6b,FuQWyc,G4tpde,GVjdyd,GXyz1,Ghqpae,H5Kvfd,IHnzse,JxE93,KYXthe,KbVV9d,KiXlnd,M4w02c,MRb7nf,NHCpDd,NsEUGe,ONYJsd,Oa7Qpb,Ok4XMd,Ollhtb,P4o2fd,PX0cP,PlCTlc,PoJj8d,QujVXc,SJv1S,SKZSKc,SMP3Ge,SfrWY,SpjoE,T3q8Wd,TO0csb,TRMPr,TqEQVb,Tzd4Yc,U3Ovcc,UQpTU,UbcHRb,UiPhkb,Ut0TMc,VL58m,VZLyBe,WFRJOb,Wx0Z2d,WxJ6g,X6KoRc,XHo6qe,XbupY,Xkvmac,ZGLUZ,ZcOm0d,ZgKcee,ZrXR8b,Zudxcb,adn7N,bXyZdf,cKV22c,dI5Ii,dfvqwf,du3Q4e,eTv59e,erGeSe,f26on,fLiOCd,fNMhz,fNbibc,giyuec,hU1IHe,htkoae,i5w0Yc,jkRPje,kCkfUb,kOSi0d,m3AaXd,mhIYhf,nIaGk,noX7qe,oOTiFc,pTgt2d,pbYjsd,qngJBf,rL2AR,ra3uhb,sU6eaf,smKWJb,tOQULd,tnnVDe,tzTB5,uUhTh,vJPFse,vhsfse,vif6Hc,vymBNb,w7ysg,wKa2Bd,wopkVc,xams8c,xlsLW,y0l7mc,y25qZb,yChgtb,ypVg7e,zoFt6e,zs9f9d/ed=1/dg=0/br=1/ujg=1/rs=ACT90oE4lPnuNbuaR5lAjndWNiq1-pG9Iw/ee=ALeJib:B8gLwd;AfeaP:TkrAjf;BMxAGc:E5bFse;BgS6mb:fidj5d;BjwMce:cXX2Wb;CxXAWb:YyRLvc;DM55c:imLrKe;DULqB:RKfG5c;Dkk6ge:wJqrrd;DpcR3d:zL72xf;EABSZ:MXZt9d;ESrPQc:mNTJvc;EVNhjf:pw70Gc;EmZ2Bf:zr1jrb;EnlcNd:WeHg4;Erl4fe:FloWmf;F9mqte:UoRcbe;Fmv9Nc:O1Tzwc;G0KhTb:LIaoZ;G6wU6e:hezEbd;GleZL:J1A7Od;HMDDWe:G8QUdb;HoYVKb:PkDN7e;HqeXPd:cmbnH;IBADCc:RYquRb;IZrNqe:P8ha2c;IoGlCf:b5lhvb;IsdWVc:qzxzOb;JXS8fb:Qj0suc;JbMT3:M25sS;JsbNhc:Xd8iUd;KOxcK:OZqGte;KQzWid:ZMKkN;KcokUb:KiuZBf;KpRAue:Tia57b;LBgRLc:SdcwHb,XVMNvd;LEikZe:byfTOb,lsjVmc;LsNahb:ucGLNb;Me32dd:MEeYgc;NPKaK:SdcwHb;NSEoX:lazG7b;Np8Qkd:Dpx6qc;Nyt6ic:jn2sGd;OgagBe:cNTe0;Oj465e:KG2eXe;OohIYe:mpEAQb;Pjplud:EEDORb,PoEs9b;PqHfGe:im2cZe;Q1Ow7b:x5CSu;Q6C5kf:pfdZCe;QGR0gd:Mlhmy;R2kc8b:ALJqWb;R4IIIb:QWfeKf;R9Ulx:CR7Ufe;RDNBlf:zPRCJb;SLtqO:Kh1xYe;SMDL4c:fTfGO;SNUn3:ZwDk9d,x8cHvb;ShpF6e:N0pvGc;TxfV6d:YORN0b;U96pRd:FsR04;UBKJZ:LGDJGb;UDrY1c:eps46d;UVmjEd:EesRsb;UyG7Kb:wQd0G;V2HTTe:RolTY;VGRfx:VFqbr;VN6jIc:ddQyuf;VOcgDe:YquhTb;VsAqSb:PGf2Re;VxQ32b:k0XsBb;WCEKNd:I46Hvd;WDGyFe:jcVOxd;Wfmdue:g3MJlb;XUezZ:sa7lqb;YV5bee:IvPZ6d;YkQtAf:rx8ur;ZMvdv:PHFPjb;ZSH6tc:QAvyLe;ZWEUA:afR4Cf;Zen4yb:jMF88c;a56pNe:JEfCwb;aAJE9c:WHW6Ef;aCJ9tf:qKftvc;aZ61od:arTwJ;af0EJf:ghinId;bDXwRe:UsyOtc;bFZ6gf:RsDQqe;bcPXSc:gSZLJb;cEt90b:ws9Tlc;cFTWae:gT8qnd;coJ8e:KvoW8;dIoSBb:ZgGg9b;dLlj2:Qqt3Gf;daB6be:lMxGPd;dtl0hd:lLQWFe;eBAeSb:Ck63tb;eBZ5Nd:VruDBd;eHDfl:ofjVkb;eO3lse:nFClrf;euOXY:OZjbQ;g8nkx:U4MzKc;gaub4:TN6bMe;gtVSi:ekUOYd;h3MYod:cEt90b;hK67qb:QWEO5b;heHB1:EtZ8Cd;hjRo6e:F62sG;hsLsYc:Vl118;iFQyKf:QIhFr,vfuNJf;imqimf:jKGL2e;io8t5d:sgY6Zb;jY0zg:Q6tNgc;k2Qxcb:XY51pe;kCQyJ:ueyPK;kMFpHd:OTA3Ae;kbAm9d:MkHyGd;lkq0A:JyBE3e;nAFL3:NTMZac,s39S4;nJw4Gd:dPFZH;oGtAuc:sOXFj;oSUNyd:fTfGO;oUlnpc:RagDlc;okUaUd:wItadb;pKJiXd:VCenhc;pNsl2d:j9Yuyc;pXdRYb:JKoKVe;pj82le:mg5CW;qGV2uc:HHi04c;qZx2Fc:j0xrE;qaS3gd:yiLg6e;qavrXe:zQzcXe;qddgKe:d7YSfd,x4FYXe;rQSrae:C6D5Fc;sP4Vbe:VwDzFe;sTsDMc:kHVSUb;sZmdvc:rdGEfc;tH4IIe:Ymry6;tosKvd:ZCqP3;trZL0b:qY8PFe;uY49fb:COQbmf;uuQkY:u2V3ud;vGrMZ:lPJJ0c;vfVwPd:lcrkwe;w3bZCb:ZPGaIb;w4rSdf:XKiZ9;w9w86d:dt4g2b;wQlYve:aLUfP;wR5FRb:O1Gjze,TtcOte;wV5Pjc:L8KGxe;whEZac:F4AmNb;xBbsrc:NEW1Qc;xbe2wc:wbTLEd;ysNiMc:CpIBjd;yxTchf:KUM7Z;z97YGf:oug9te;zOsCQe:Ko78Df;zaIgPb:Qtpxbd/m=Eox39d,GElbSc,HYSCof,Zby8rf,Zjgvvd,hOt4Bb,pHXghd,pgCXqb,qWsXOc,w4UyN,xdV1C?cb=QzTYGYIBgfYEluxi&xjs=s1',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/md=10/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug?cb=KSYIDmRZNORQSclT',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ct=slh&v=t1&m=HV&aqid=cWmFZt-YDrqd7OsPu7KawA0&pv=0.2624487687737298&me=1:1720019313889,V,0,0,1536,643:0,B,3805:0,N,1,cWmFZqWrCf2t0-kPtL6l-Ak:0,R,1,8,39,25,92,34:0,R,1,CA0QAA,195,76,1120,56:0,R,1,CA0QAQ,195,76,670,44:0,R,1,CBEQAA,195,76,35,44:0,R,1,CBEQAQ,195,90,35,30:0,R,1,CA8QAA,233,77,80,42:0,R,1,CA8QAQ,233,77,80,42:0,R,1,CBAQAA,314,77,66,42:0,R,1,CBAQAQ,314,77,66,42:0,R,1,CBIQAA,382,77,63,42:0,R,1,CBIQAQ,382,77,63,42:0,R,1,CA4QAA,447,77,55,42:0,R,1,CA4QAQ,447,77,55,42:0,R,1,CBQQqwE,195,132,1324,40:0,R,1,CBQQrAE,195,132,1100,40:0,R,1,CBQQrgE,195,132,54,40:0,R,1,CBQQrwE,256,136,46,32:0,R,1,CBQQsAE,309,136,51,32:0,R,1,CBQQsQE,368,136,78,32:0,R,1,CBQQsgE,454,136,65,32:0,R,1,CBQQswE,526,136,125,32:0,R,1,CBQQtAE,659,136,74,32:0,R,1,CBQQtQE,740,136,62,32:0,R,1,CBQQtgE,810,136,109,32:0,R,1,CBQQtwE,926,136,130,32:0,R,1,CBQQuAE,1064,136,75,32:0,R,1,CBQQuQE,1146,136,89,32:0,R,1,CBQQugE,1243,136,92,32:0,R,1,CBQQuwE,1343,136,91,32:0,R,1,CBQQvAE,1442,136,97,32:0,R,1,CAwQAQ,195,179,1096,429:0,R,1,CAwQBg,195,209,1096,399:0,R,1,CAwQCQ,195,218,130,380:0,R,1,CAwQEw,333,218,130,380:0,R,1,CAwQHQ,470,218,130,380:0,R,1,CAwQJw,608,218,130,380:0,R,1,CAwQNA,746,218,130,380:0,R,1,CAwQPg,883,218,130,380:0,R,1,CAwQSA,1021,218,130,380:0,R,1,CAwQUw,1158,218,130,380:0,R,1,CBMQAA,195,627,600,146:1921,x:65,T:0,R,1,8,39,25,92,34:0,R,1,CA0QAA,195,76,1120,56:0,R,1,CA0QAQ,195,76,670,44:0,R,1,CBEQAA,195,76,35,44:0,R,1,CBEQAQ,195,90,35,30:0,R,1,CA8QAA,233,77,80,42:0,R,1,CA8QAQ,233,77,80,42:0,R,1,CBAQAA,314,77,66,42:0,R,1,CBAQAQ,314,77,66,42:0,R,1,CBIQAA,382,77,63,42:0,R,1,CBIQAQ,382,77,63,42:0,R,1,CA4QAA,447,77,55,42:0,R,1,CA4QAQ,447,77,55,42:0,R,1,CH8QAA,504,77,54,42:0,R,1,CH8QAQ,504,77,54,42:0,R,1,CIIBEAA,560,77,59,42:0,R,1,CIIBEAE,560,77,59,42:0,R,1,CBQQqwE,195,132,1324,40:0,R,1,CBQQrAE,195,132,1100,40:0,R,1,CBQQrgE,195,132,54,40:0,R,1,CBQQrwE,256,136,46,32&zx=1720019315921&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ct=slh&v=t1&aqid=cWmFZt-YDrqd7OsPu7KawA0&pv=0.2624487687737298&me=68:1720019315875,R,1,CBQQsAE,309,136,51,32:0,R,1,CBQQsQE,368,136,78,32:0,R,1,CBQQsgE,454,136,65,32:0,R,1,CBQQswE,526,136,125,32:0,R,1,CBQQtAE,659,136,74,32:0,R,1,CBQQtQE,740,136,62,32:0,R,1,CBQQtgE,810,136,109,32:0,R,1,CBQQtwE,926,136,130,32:0,R,1,CBQQuAE,1064,136,75,32:0,R,1,CBQQuQE,1146,136,89,32:0,R,1,CBQQugE,1243,136,92,32:0,R,1,CBQQuwE,1343,136,91,32:0,R,1,CBQQvAE,1442,136,97,32:0,R,1,CAwQAQ,195,179,1096,429:0,R,1,CAwQBg,195,209,1096,399:0,R,1,CAwQCQ,195,218,130,380:0,R,1,CAwQEw,333,218,130,380:0,R,1,CAwQHQ,470,218,130,380:0,R,1,CAwQJw,608,218,130,380:0,R,1,CAwQNA,746,218,130,380:0,R,1,CAwQPg,883,218,130,380:0,R,1,CAwQSA,1021,218,130,380:0,R,1,CAwQUw,1158,218,130,380:0,R,1,CBMQAA,195,627,600,146:59,T:0,R,1,8,39,25,92,34:0,R,1,CA0QAA,195,76,1120,56:0,R,1,CA0QAQ,195,76,670,44:0,R,1,CBEQAA,195,76,35,44:0,R,1,CBEQAQ,195,90,35,30:0,R,1,CA8QAA,233,77,80,42:0,R,1,CA8QAQ,233,77,80,42:0,R,1,CBAQAA,314,77,66,42:0,R,1,CBAQAQ,314,77,66,42:0,R,1,CBIQAA,382,77,63,42:0,R,1,CBIQAQ,382,77,63,42:0,R,1,CA4QAA,447,77,55,42:0,R,1,CA4QAQ,447,77,55,42:0,R,1,CH8QAA,504,77,54,42:0,R,1,CH8QAQ,504,77,54,42:0,R,1,CIIBEAA,560,77,59,42:0,R,1,CIIBEAE,560,77,59,42:0,R,1,CBQQqwE,195,132,1324,40:0,R,1,CBQQrAE,195,132,1100,40:0,R,1,CBQQrgE,195,132,54,40:0,R,1,CBQQrwE,256,136,46,32:0,R,1,CBQQsAE,309,136,51,32:0,R,1,CBQQsQE,368,136,78,32:0,R,1,CBQQsgE,454,136,65,32:0,R,1,CBQQswE,526,136,125,32:0,R,1,CBQQtAE,659,136,74,32:0,R,1,CBQQtQE,740,136,62,32:0,R,1,CBQQtgE,810,136,109,32:0,R,1,CBQQtwE,926,136,130,32:0,R,1,CBQQuAE,1064,136,75,32:0,R,1,CBQQuQE,1146,136,89,32:0,R,1,CBQQugE,1243,136,92,32:0,R,1,CBQQuwE,1343,136,91,32:0,R,1,CBQQvAE,1442,136,97,32:0,R,1,CAwQAQ,195,179,1096,429:0,R,1,CAwQBg,195,209,1096,399:0,R,1,CAwQCQ,195,218,130,380:0,R,1,CAwQEw,333,218,130,380:0,R,1,CAwQHQ,470,218,130,380&zx=1720019315952&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/client_204?atyp=i&biw=1536&bih=643&dpr=1.25&ei=cWmFZqWrCf2t0-kPtL6l-Ak&opi=89978449',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get('https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg', {
        headers: {
          referer: 'https://www.google.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get('https://www.gstatic.com/ui/v1/activityindicator/loading_24.gif', {
        headers: {
          referer: 'https://www.google.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.post(
        'https://play.google.com/log?format=json&hasfast=true&authuser=0',
        {
          '[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,"en-IN",null,null,null,[[["Not/A)Brand","8"],["Chromium","126"],["Google Chrome","126"]],0,"Windows","15.0.0","x86","","126.0.6478.127"],[1,0,0,0,0]]],373,[["1720019314575",null,null,null,null,null,null,"[1,40400,1,1,\\"648210890.0\\",\\"cWmFZpjRC8a81e8P4-m1eA\\",null,null,null,\\"en\\",\\"IND\\",1,19,1709,null,1,0,null,\\"og-5120b166-b8f0-4de8-be94-768ee67915b4\\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,0,1,null,null,0,null,[2,5,\\"tp\\",22],null,null,0,0,1,null,null,null,0]",null,null,null,null,null,null,-19800,[null,null,null,"[null,null,[3700949,3701291,3701380,3701387,3701440,3701464]]"],null,null,null,null,1]],"1720019316018",null,null,null,null,null,null,null,null,null,null,null,null,null,[[null,[null,null,null,null,null,null,null,null,null,null,null,null,122505695]],9]]':
            '',
        },
        {
          headers: {
            authorization: 'SAPISIDHASH 3f0ccecf1d5178e6ebc8dd1286ca591c02f555ed',
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-goog-authuser': '0',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ct=slh&v=t1&m=HV&aqid=cWmFZt-YDrqd7OsPu7KawA0&pv=0.2624487687737298&me=1:1720019313889,V,0,0,1536,643:0,B,3805:0,N,1,cWmFZqWrCf2t0-kPtL6l-Ak:0,R,1,8,39,25,92,34:0,R,1,CA0QAA,195,76,1120,56:0,R,1,CA0QAQ,195,76,670,44:0,R,1,CBEQAA,195,76,35,44:0,R,1,CBEQAQ,195,90,35,30:0,R,1,CA8QAA,233,77,80,42:0,R,1,CA8QAQ,233,77,80,42:0,R,1,CBAQAA,314,77,66,42:0,R,1,CBAQAQ,314,77,66,42:0,R,1,CBIQAA,382,77,63,42:0,R,1,CBIQAQ,382,77,63,42:0,R,1,CA4QAA,447,77,55,42:0,R,1,CA4QAQ,447,77,55,42:0,R,1,CBQQqwE,195,132,1324,40:0,R,1,CBQQrAE,195,132,1100,40:0,R,1,CBQQrgE,195,132,54,40:0,R,1,CBQQrwE,256,136,46,32:0,R,1,CBQQsAE,309,136,51,32:0,R,1,CBQQsQE,368,136,78,32:0,R,1,CBQQsgE,454,136,65,32:0,R,1,CBQQswE,526,136,125,32:0,R,1,CBQQtAE,659,136,74,32:0,R,1,CBQQtQE,740,136,62,32:0,R,1,CBQQtgE,810,136,109,32:0,R,1,CBQQtwE,926,136,130,32:0,R,1,CBQQuAE,1064,136,75,32:0,R,1,CBQQuQE,1146,136,89,32:0,R,1,CBQQugE,1243,136,92,32:0,R,1,CBQQuwE,1343,136,91,32:0,R,1,CBQQvAE,1442,136,97,32:0,R,1,CAwQAQ,195,179,1096,429:0,R,1,CAwQBg,195,209,1096,399:0,R,1,CAwQCQ,195,218,130,380:0,R,1,CAwQEw,333,218,130,380:0,R,1,CAwQHQ,470,218,130,380:0,R,1,CAwQJw,608,218,130,380:0,R,1,CAwQNA,746,218,130,380:0,R,1,CAwQPg,883,218,130,380:0,R,1,CAwQSA,1021,218,130,380:0,R,1,CAwQUw,1158,218,130,380:0,R,1,CBMQAA,195,627,600,146:1921,x:65,T:0,R,1,8,39,25,92,34:0,R,1,CA0QAA,195,76,1120,56:0,R,1,CA0QAQ,195,76,670,44:0,R,1,CBEQAA,195,76,35,44:0,R,1,CBEQAQ,195,90,35,30:0,R,1,CA8QAA,233,77,80,42:0,R,1,CA8QAQ,233,77,80,42:0,R,1,CBAQAA,314,77,66,42:0,R,1,CBAQAQ,314,77,66,42:0,R,1,CBIQAA,382,77,63,42:0,R,1,CBIQAQ,382,77,63,42:0,R,1,CA4QAA,447,77,55,42:0,R,1,CA4QAQ,447,77,55,42:0,R,1,CH8QAA,504,77,54,42:0,R,1,CH8QAQ,504,77,54,42:0,R,1,CIIBEAA,560,77,59,42:0,R,1,CIIBEAE,560,77,59,42:0,R,1,CBQQqwE,195,132,1324,40:0,R,1,CBQQrAE,195,132,1100,40:0,R,1,CBQQrgE,195,132,54,40:0,R,1,CBQQrwE,256,136,46,32&zx=1720019316311&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ct=slh&v=t1&aqid=cWmFZt-YDrqd7OsPu7KawA0&pv=0.2624487687737298&me=68:1720019315875,R,1,CBQQsAE,309,136,51,32:0,R,1,CBQQsQE,368,136,78,32:0,R,1,CBQQsgE,454,136,65,32:0,R,1,CBQQswE,526,136,125,32:0,R,1,CBQQtAE,659,136,74,32:0,R,1,CBQQtQE,740,136,62,32:0,R,1,CBQQtgE,810,136,109,32:0,R,1,CBQQtwE,926,136,130,32:0,R,1,CBQQuAE,1064,136,75,32:0,R,1,CBQQuQE,1146,136,89,32:0,R,1,CBQQugE,1243,136,92,32:0,R,1,CBQQuwE,1343,136,91,32:0,R,1,CBQQvAE,1442,136,97,32:0,R,1,CAwQAQ,195,179,1096,429:0,R,1,CAwQBg,195,209,1096,399:0,R,1,CAwQCQ,195,218,130,380:0,R,1,CAwQEw,333,218,130,380:0,R,1,CAwQHQ,470,218,130,380:0,R,1,CAwQJw,608,218,130,380:0,R,1,CAwQNA,746,218,130,380:0,R,1,CAwQPg,883,218,130,380:0,R,1,CAwQSA,1021,218,130,380:0,R,1,CAwQUw,1158,218,130,380:0,R,1,CBMQAA,195,627,600,146:59,T:0,R,1,8,39,25,92,34:0,R,1,CA0QAA,195,76,1120,56:0,R,1,CA0QAQ,195,76,670,44:0,R,1,CBEQAA,195,76,35,44:0,R,1,CBEQAQ,195,90,35,30:0,R,1,CA8QAA,233,77,80,42:0,R,1,CA8QAQ,233,77,80,42:0,R,1,CBAQAA,314,77,66,42:0,R,1,CBAQAQ,314,77,66,42:0,R,1,CBIQAA,382,77,63,42:0,R,1,CBIQAQ,382,77,63,42:0,R,1,CA4QAA,447,77,55,42:0,R,1,CA4QAQ,447,77,55,42:0,R,1,CH8QAA,504,77,54,42:0,R,1,CH8QAQ,504,77,54,42:0,R,1,CIIBEAA,560,77,59,42:0,R,1,CIIBEAE,560,77,59,42:0,R,1,CBQQqwE,195,132,1324,40:0,R,1,CBQQrAE,195,132,1100,40:0,R,1,CBQQrgE,195,132,54,40:0,R,1,CBQQrwE,256,136,46,32:0,R,1,CBQQsAE,309,136,51,32:0,R,1,CBQQsQE,368,136,78,32:0,R,1,CBQQsgE,454,136,65,32:0,R,1,CBQQswE,526,136,125,32:0,R,1,CBQQtAE,659,136,74,32:0,R,1,CBQQtQE,740,136,62,32:0,R,1,CBQQtgE,810,136,109,32:0,R,1,CBQQtwE,926,136,130,32:0,R,1,CBQQuAE,1064,136,75,32:0,R,1,CBQQuQE,1146,136,89,32:0,R,1,CBQQugE,1243,136,92,32:0,R,1,CBQQuwE,1343,136,91,32:0,R,1,CBQQvAE,1442,136,97,32:0,R,1,CAwQAQ,195,179,1096,429:0,R,1,CAwQBg,195,209,1096,399:0,R,1,CAwQCQ,195,218,130,380:0,R,1,CAwQEw,333,218,130,380:0,R,1,CAwQHQ,470,218,130,380&zx=1720019316312&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=ZWmFZom0K6Lg2roPoYWC6AY&ct=slh&v=t1&im=M&pv=0.31912255056172456&me=9:1720019308482,V,0,0,0,0:263,V,0,0,1536,228:36,h,1,1,i:486,V,0,0,1536,643:506,R,1,1,0,0,1536,643:0,G,1,1,596,200:4,V,0,0,0,0:1114,B,643:2262,V,0,0,1536,643:0,R,1,1,0,0,1536,643:1,e,B&zx=1720019316314&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/ss/k=xjs.s.iyvtSME9zfA.L.B1.O/am=AMyBQgAAgACHBgQAAAAAAAAAAAAAAACQAABACAAAAAABCgBAJgcABAA2BAAAH-AQgAAAAAAAAFAAAAAAPAMAAAgAQAKAAAABAQAAAAAAwAEAAAAigACAAEKgAAJIABQIABlAAACACGAxDIBUADBwBAAAAAiAAAAAAADcCAAgQAAAiAAIwAOIACAACKAAwAAAAgEAAIAcYCAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAgAAAAAAAAAAAAAAAAAAAAQ/d=0/br=1/rs=ACT90oEX4XQf1SsO3ljW2P3cdCFP6kkv4A/m=sy24i,sy49n,y05UD,sy76x,sy1vf,sy1nj,sy1d0,sy1ni,sy1nk,sy1k8,syvh,sy40e,sy2nb,sy1p9,sy1nm,sy1tx,sy1d3,epYOx,L1AAkb,AjRVIe,g0Ekse,q28gvc,tE6Rzd,uDw4Nb,RcBNJ,FjvQsb,wDGPec,DuwA5b,GQxACe,bIMMof,MafjZe,gGYzg,nzu4Ud,I9JIjc,QzraZb,jtFQAf,Zymyhf,iVmxic,sy3w1,sy3nt,sy3ns,syl2,sy15v,sy15w,synb,sy15u,sy15t,sy15s,synh,synf,synu,sy16b,sy1c0,sy3ov,sy3wc,sy3wb,sy3wa,sy3l0,sy3we,sy3wd,sy3w9,sy3ts,sy3th,sy3tg,sy3tf,sy3td,sy3ta,sy3t4,sy3t3,sy3sy,sy3sx,sy3sw,sy3sv,sy3kn,syhi,syt6,syt4,syt2,sy1bz,sy3ws,sy3wq,sy3wo,sy3wn,sy3wm,sy3wl,sy3wj,sy3wi,sy3wt,sy3wr,sy3wp,sy3wk,syvp,sy3ou,sy3tn,sy3tm,sy3tl,sy3lv,sy3le,sy3l1,syuk,sy1co,sy3ua,sy3u8,sy3u7,sy3u6,sy3u5,sy3u4,sy3u3,sy3u2,sy3u1,sy3u0,sy3tz,sy3ty,sy3tx,sy3tw,sy3tv,sy3tu,sy3tt,sy3tr,sy3tq,sy3tp,sy3to,sy3tk,sy3tj,sy3ti,sy3tc,sy3tb,sy3t9,sy3t8,sy3t7,sy3t6,sy3t2,sy3t1,sy3t0,sy3sz,sy3su,sy3st,sy3ss,sy3sr,sy3sq,sy3sp,sy3so,sy3q8,sy3ld,sy3lc,sy3kw,syo1,syoh,sy2qy,syhs,sy3wu,sy3v4,sy3ub,sy3u9,sy3sn,sy3qi,sy3qh,sy3qg,sy3qf,syhr,syhn,syhc,syh7,sy3ok,syoi,synz,syi1,sy16g,sy16h,syni,sy16j,sy16i,sy3op,sy3oo,sy3on,sy3om,syoa,syo9,sy3ps,sy3nx,sy3ny,sy3nw,sy3oa,sy3vh,sy3vg,sy3vf,sy3ve,sy3vd,sy3vc,sy3vb,sy3va,sy3v9,sy3v8,sy3v6,sy3v5,sy3r4,sy3r3,sy3r1,sy3r2,sy3r0,sy3qz,sy3qy,sy3qx,sy3qw,sy3qu,sy3qt,sy3qs,sy3qr,sy3no,sy3qq,sy3qp,sy3qo,sy3qn,sy3qm,sy3ql,sy3qk,sy3qj,sy3oj,sy3oi,sy3oh,sy3og,sy3of,sy3oe,sy3od,sy3oc,sy3ob,sy3o9,sy3o8,sy3o7,sy3o6,sy3o5,sy3o4,sy3o3,sy3o2,sy3o1,sy3o0,sy3nz,sy3nv,sy3nr,sy3nq,sy3np,sy3nn,sy3n9,sy3n6,sy3n2,sy3n1,sy3mz,sy3my,sy3mx,sy3mu,sy3mt,sy3mr,sy3mo,sy3ml,sy3mk,sy3mj,sy3mh,sy3mg,sy3mf,sy3me,sy3md,sy3mc,sy3lu,sy3lt,sy3ls,sy3lr,sy3ln,sy3lm,sy3ll,sy3lj,sy3li,sy3lh,sy3lg,sy3lf,sy3lb,sy3la,sy3l9,sy3l8,sy3l7,sy3l6,sy3l4,sy3l3,sy3l2,sy3kz,sy3kx,sy3kv,sy3ks,syk4,symm,sytp,sytn,sytl,syl0,sykz,syky,sykx,sykw,syks,sykr,sy2rd,sy2rc,syn7,syhu,sy2rb,sy2ra,syh5,sy1at,syn8,sy1as,sy1ar,sy3ot,sy3os,sy3or,sy3oq,sy3pp,sy3po,sy3pg,sy3pd,sy3pc,sy3pa,sy3p7,sy3p4,sy3p3,sy3p2,sy3p1,sy3oy,sy3ox,sy3ow,sy3q5,sy3q4,sy3q3,sy3q2,sy3q1,sy3q0,sy3pz,sy3py,sy3px,sy3pw,sy3pv,sy3pu,sy3pt,sy3pr,sy3pq,sy3pn,sy3pm,sy3pl,sy3pk,sy3pj,sy3pi,sy3ph,sy3pf,sy3pe,sy3pb,sy3p9,sy3p8,sy3p6,sy3p5,sy3oz,syvr,sy3vt,sy3vi,sy3vj,sy3wx,sy3ww,sy3wv,sy3wh,sy3wg,sy3wf,sy3w8,sy3w7,sy3w6,sy3w5,sy3w4,sy3w3,sy3w2,sy3w0,sy3vz,sy3vx,sy3vy,sy3vw,sy3vv,sy3vu,sy3v7,sy3sm,sy3sj,sy3sl,sy3si,sy3sh,sy3sg,sy3sf,sy3se,sy3sd,sy3sc,sy3sb,sy3sa,sy3s9,sy3s8,sy3s7,sy3re,sy3s6,sy3s5,sy3s4,sy3s3,sy3s2,sy3s1,sy3s0,sy3rz,sy3ry,sy3rx,sy3rw,sy3rv,sy3ru,sy3rt,sy3rs,sy3rr,sy3rq,sy3rp,sy3ro,sy3rn,sy3rm,sy3rl,sy3rk,sy3rj,sy3ri,sy3rh,sy3rg,sy3rf,sy3rd,sy3rc,sy3rb,sy3ra,sy3r9,sy3r8,sy3r7,sy3r6,sy3r5,sy3qe,sy3qd,sy3qc,sy3qb,sy3qa,sy3q9,sy3q7,sy3q6,sy3ol,sy3nu,sy3nm,sy3nl,sy3nk,sy3nj,sy3ni,sy3nh,sy3ng,sy3nf,sy3ne,sy3nd,sy3nc,sy3nb,sy3na,sy3n4,sy3n3,sy3mi,sy3lz,sy3mb,sy3ma,sy3m9,sy3m8,sy3m7,sy3m6,sy3m5,sy3m4,sy3m3,sy3m2,sy3m1,sy3m0,sy3ly,sy3lx,sy3lw,sy2ma,sy2m9,sy2m8,sywr,sywo,sync,syhf,sy3fg,syvg,syud,syub,syu7,syty,syor,syo8,syhm?xjs=s4',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=0/dg=0/br=1/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug/m=sb_wiz,aa,abd,sy10m,sy10k,sy10f,sy10j,sy106,sy1yp,sy198,sy10a,sy197,sy195,sy10w,sy10u,sy10q,sy10e,sy108,syso,sy196,sy110,sy104,sy111,sy112,sy10r,sy10g,sy10i,sy10b,sy103,sy10o,sy199,sy118,sy119,sy117,async,sy12e,bgd,sy4ok,sy4oj,foot,sy2rk,kyn,sy1de,lli,sy1af,sys9,sy1ai,sy1ag,sy49u,sy2qq,sy2u3,sy49r,sy2qr,sy2qs,sy1ah,sy49q,sy49s,sy2u4,sy3kk,sy49p,sy49o,sy2u2,sy24i,sy49n,sy49l,sy20n,sy17l,sy134,sy133,sy153,sy14t,sy138,syyk,syyh,syyg,syya,syy9,syy6,syym,sy130,sy136,sy49k,pla,sf,sy18z,sy190,sy3km,sonic,TxCJfd,sy75v,qzxzOb,IsdWVc,sy20h,sy75x,sy1pf,sy237,sy385,spch,tl,MpJwZc,UUJqVe,sy7u,sOXFj,sy7t,s39S4,oGtAuc,NTMZac,nAFL3,sy8o,sy8n,q0xTif,y05UD,sy76x,sy1vf,sy1nj,sy1d0,sy1ni,sy1nk,sy1k8,syvh,sy40e,sy1vh,sy1nv,sy1nu,sy1cz,sy1cy,sy1cx,sy17x,sy17z,sy17y,sy17w,sy1d1,sy1nt,sy1nr,sy126,sy1ns,sy1ik,sy1nq,sy1np,sy1nh,sy1nw,sy1k9,sy40f,sy2nb,sy2rs,sy255,sy256,sy1p9,sy1nm,sy1tx,sy1ph,sy1o1,sy1nz,sy1ty,sy1d3,sy1d4,epYOx,sy438,sdH3v,L8KGxe,wV5Pjc,sy439,XO2lNe,sy5fz,nMfH9e,sy2tq,sy2to,sy12p,sy12r,sy2tp,sylc,EkevXb,syzn,syzl,syzi,syzj,syzm,syzk,syzh,syzg,syzf,SMquOb,sy17b,sy178,sy17a,d5EhJe,sy185,fCxEDd,sy184,sy183,sy182,sy181,sy180,sy17v,sy17u,sy17k,sy17i,syzo,sy175,sy17j,sy163,sy162,T1HOxc,sy17g,sy17f,zx30Y,sy186,sy173,Wo3n8,sy1a0,EbPKJf,sy18g,sy18e,syh4,sy16s,CnSW2d,sy1a6,sy1a4,sy1a2,pFsdhd,d6FVZd,sy40w,yb08jf,sy1cw,sy1cv,sy1dw,Tia57b,KpRAue,sy7pe,sy6k8,sy1d7,sy1d6,syq8,sy1d8,sy149,t2rqS,sy1aw,sy1av,syvm,sy1aq,Bnimbd,sy1ax,MaEUhd,syro,L1AAkb,sy1xe,fiAufb,sy19u,SZXsif,sy51j,sy4ps,sy4pr,syqw,sYEX8b,sy2sq,NEW1Qc,xBbsrc,sy2ss,sy1dj,IX53Tb,sy5j9,k6GQw,sy15o,sy14w,syz7,syyz,syyy,syyx,syyw,syys,syyt,syz4,syz3,syz2,syz1,syz5,sy15j,Zilivc,E9M6Uc,syz6,NO84gd,b5lhvb,IoGlCf,syxh,syxg,C8HsP,syzb,syza,syz8,gOTY1,sy102,sy101,syzy,syzz,syzp,sy100,syzx,syzv,syzu,syzt,syzr,syze,syzc,sypy,sypz,syzd,syzw,syzq,syyo,PbHo4e,AjRVIe,g0Ekse,q28gvc,tE6Rzd,kpAr,eTVOC,rKbWof,rEAvrc,uDw4Nb,RcBNJ,FjvQsb,wDGPec,DuwA5b,FjjTod,GQxACe,SnmExf,TnJGKb,bIMMof,YlMcGe,XTmxwe,OjtwQe,SQAZFd,MafjZe,gGYzg,nzu4Ud,I9JIjc,QzraZb,z2eFcc,jtFQAf,Pq506,sy3zz,sy402,sy3ze,sy3xi,sy3xh,sy1fw,sy3zp,sy3zn,sy3zo,sy403,sy3zj,sy3zh,sy226,sy1zd,sy1zb,sy3zw,sy3zr,sy3zx,sy3zl,sy3x6,sy2z6,sy2wf,sy2we,sy1qe,sy1qg,sy1eu,sy1rj,sy1gc,sy1fu,sy3x5,sy3xa,sy3zk,sypv,sy3zi,sy3zc,sy3zs,sy3xo,sy39e,sy3zu,sy3xl,sy2rz,sy3xj,sy3xm,sy3zf,sy12l,sy2jp,sy3z4,sy3za,sy3z8,sy3zb,sy3z2,sy2vb,sy3yq,sy3yy,sy3yz,sy3ys,sy3yt,sy3yw,sy3yv,sy1mo,sy1ev,sy3yr,sy3yp,sy3yn,sy3ym,sy35c,sy2zh,sy2zf,sy2za,sy2z9,sy2zb,sy2td,sy2tc,sy1na,sy2ry,sy2kq,sy1rz,sy1n2,sy1mp,sy1mr,sy1gq,sy1fz,sy1f7,sy1ex,sy1ey,sy1ez,sy1br,sybm,sybn,sybz,syby,sybu,sybq,sybt,sy3yo,sy3x8,sy1fv,sy3yk,sy3xc,sy3xn,sy3xk,sy3xg,sy2iv,sy1ol,sy1gd,sy1ge,sy1eq,sy1ga,sy14v,sy2j1,sy2jj,sy2ie,sy1on,sy2iq,sy3x9,sy39s,sy39i,sy1zs,sy1zf,sy3z6,sy404,sy405,sy2ep,USgF8d,Zymyhf,iVmxic,sy49a,sy3w1,KH32Sd,sy458,Mf3zEb,g1fOXc,sy406,sy141,sy41a,A4Uref,FCJvZd,sy39f,sy39h,sy1yy,QzG4od,sy3nt,sy3ns,sy43z,sy497,sy496,sy495,sy447,sy494,sy493,sy492,sy45o,sy484,sy3hp,sy3hj,sy31i,sy3hb,sy3gp,sy384,syl2,sy31k,sy22w,sy22x,sy15v,syvs,syl5,syij,syia,sy15w,synb,sy15u,sy15t,sy15s,synh,synf,syn2,sy45t,sy3d4,sy3hh,synu,sykl,sy16b,sy45s,sy1ce,sy1c0,sy46q,sy43k,sy43l,sy3ov,sy440,sy3wc,sy3wb,sy3wa,sy2fr,sy22z,sy3ha,sy485,sy45q,sy43s,sy3l0,sy43y,sy3we,sy3wd,sy3w9,sy3d3,sy491,sy16a,sy490,sy48z,sy43i,sy2fi,sy1sj,sy1rp,sy1or,sy1oq,sypu,sy43f,sy3kr,sy43o,sy43q,sy3ts,sy3th,sy3tg,sy3tf,sy3td,sy3ta,sy3t4,sy3t3,sy3sy,sy3sx,sy3sw,sy3sv,sy3kn,syhh,sy230,sy22y,sy22r,sy22q,sy1vk,sy1t5,sy19r,syi0,syhi,sy22s,sy31c,sy2zx,sy239,sy232,sy43h,sy47z,sy47g,sy46p,sy43t,sy45e,syt6,syt4,syt2,sy44v,sy1bz,sy44u,sy43v,sy43n,sy3ws,sy3wq,sy3wo,sy3wn,sy3wm,sy3wl,sy3wj,sy3wi,sy3d6,sy2mh,sy2mi,sy2me,sy2gj,sy2fs,syvn,syom,syht,syh9,syvl,sy3d8,syqy,sy396,sy16t,syuj,sy16q,sy16r,sy399,syt9,syta,sys7,sy398,sy16n,synj,sy16o,sy397,sy2lw,sy2zk,sy46s,sy3wt,sy3wr,sy3wp,sy3wk,syvp,sy383,sy46t,sy442,sy3ou,sy43j,sy43w,sy3tn,sy3tm,sy3tl,sy43x,sy43u,sy3lv,sy3le,sy3l1,sy23i,sy23j,sy43p,syuk,syo7,syn5,sy1co,sy43r,sy43m,sy3ua,sy3u8,sy3u7,sy3u6,sy3u5,sy3u4,sy3u3,sy3u2,sy3u1,sy3u0,sy3tz,sy3ty,sy3tx?cb=WLUFmPOVrPfCIdCt&xjs=s4',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=0/dg=0/br=1/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug/m=sy3tw,sy3tv,sy3tu,sy3tt,sy3tr,sy3tq,sy3tp,sy3to,sy3tk,sy3tj,sy3ti,sy3tc,sy3tb,sy3t9,sy3t8,sy3t7,sy3t6,sy3t2,sy3t1,sy3t0,sy3sz,sy3su,sy3st,sy3ss,sy3sr,sy3sq,sy3sp,sy3so,sy3q8,sy3n7,sy3ld,sy3lc,sy3kw,syog,syo1,sy3hk,syoh,sy3hi,sy2i6,sy3hc,sy1oe,sy3hg,sy2qz,sy2qy,syhs,sy43g,sy431,sy433,sy3wu,sy3v4,sy3ub,sy3u9,sy3sn,sy3qi,sy3qh,sy3qg,sy3qf,sy2vv,sy48y,sy48x,sy48w,sy1em,sy48v,sy48u,sy48t,syhq,sy3h2,sy3h1,sy1t6,syhr,syhn,syhk,syhj,syhl,syhc,syh7,sy48s,sy48r,sy48q,sy48p,sy3ok,sy48m,sy468,syoi,synz,synv,symw,syi1,sy16g,sy469,sy19e,sy194,sy16h,syni,sy16j,sy16i,sy46a,sy3z3,sy3op,sy3oo,sy3on,sy3om,sy23a,syp8,syp6,syof,syo6,syo4,syo2,syne,symq,syp7,sy238,sy127,sy47v,sy479,sy476,syol,synx,sy477,syl4,sy31f,sy31u,sy2fc,sy31e,sy235,symx,syp3,syp2,sy234,syoa,syo9,syo3,syns,synr,sy472,sy46o,sy46n,sy46m,sy46l,sy46i,sy46f,sy3ps,sy45x,sy455,sy44y,sy44t,sy44f,sy42r,sy42j,sy42e,sy425,sy3nx,sy3ny,sy3nw,sy423,sy421,sy41m,sy41e,sy40v,sy3y3,sy3x3,sy3oa,sy3vh,sy3vg,sy3vf,sy3ve,sy3vd,sy3vc,sy3vb,sy3va,sy3v9,sy3v8,sy3v6,sy3v5,sy3r4,sy3r3,sy3r1,sy3r2,sy3r0,sy3qz,sy3qy,sy3qx,sy3qv,sy3qw,sy3qu,sy3qt,sy3qs,sy3qr,sy3no,sy3qq,sy3qp,sy3qo,sy3qn,sy3qm,sy3ql,sy3qk,sy3qj,sy3oj,sy3oi,sy3oh,sy3og,sy3of,sy3oe,sy3od,sy3oc,sy3ob,sy3o9,sy3o8,sy3o7,sy3o6,sy3o5,sy3o4,sy3o3,sy3o2,sy3o1,sy3o0,sy3nz,sy3nv,sy3nr,sy3nq,sy3np,sy3nn,sy3n9,sy3n8,sy3n6,sy3n2,sy3n1,sy3n0,sy3mz,sy3my,sy3mx,sy3mw,sy3mv,sy3mu,sy3mt,sy3ms,sy3mr,sy3mq,sy3mp,sy3mo,sy3mn,sy3mm,sy3ml,sy3mk,sy3mj,sy3mh,sy3mg,sy3mf,sy3me,sy3md,sy3mc,sy3lu,sy3lt,sy3ls,sy3lr,sy3lq,sy3lp,sy3lo,sy3ln,sy3lm,sy3ll,sy3lk,sy3lj,sy3li,sy3lh,sy3lg,sy3lf,sy3lb,sy3la,sy3l9,sy3l8,sy3l7,sy3l6,sy3l5,sy3l4,sy3l3,sy3l2,sy3kz,sy3ky,sy3kx,sy3kv,sy3ku,sy3kt,sy3ks,sy3dd,syk4,symm,sy3ht,sy2it,sy3gl,sy3gi,sytp,syto,sytn,sytl,sy3go,sy2ii,sy1os,sy3gg,sy39k,sy382,sy31l,syl6,sy31m,sy31j,sy1vr,syl0,sykz,syky,sykx,sykw,syku,sykt,syks,sykr,sy31o,sy2ff,sy2fe,sy1om,sy1nb,sy31d,sy2rd,sy2rc,syn7,syhu,sy2rb,sy2ra,sy2gh,sy2gg,sy2gm,sy2gk,sy2fg,sy1sw,sy1sd,sy1p0,sy1oj,sy1ok,sy1of,sywn,syv8,syts,syup,sylm,syh5,sy46j,sy460,sy45m,sy1at,syn8,sy1as,sy1ar,sy45r,sy31t,sy45v,sy45f,sy451,sy3ot,sy3os,sy3or,sy3oq,sy44z,sy3pp,sy3po,sy3pg,sy3pd,sy3pc,sy3pa,sy3p7,sy3p4,sy3p3,sy3p2,sy3p1,sy3oy,sy3ox,sy3ow,sy2i7,sy3ho,sy31r,sy45p,sy457,sy44b,sy3q5,sy3q4,sy3q3,sy3q2,sy3q1,sy3q0,sy3pz,sy3py,sy3px,sy3pw,sy3pv,sy3pu,sy3pt,sy3pr,sy3pq,sy3pn,sy3pm,sy3pl,sy3pk,sy3pj,sy3pi,sy3ph,sy3pf,sy3pe,sy3pb,sy3p9,sy3p8,sy3p6,sy3p5,sy3oz,sy381,syvo,sy233,sy13u,syvt,syvr,sy380,sy45n,sy3vt,sy45y,sy456,sy3vi,sy45g,sy3vj,sy46b,sy46c,sy44s,sy43b,sy422,sy3wx,sy3ww,sy3wv,sy3wh,sy3wg,sy3wf,sy3w8,sy3w7,sy3w6,sy3w5,sy3w4,sy3w3,sy3w2,sy3w0,sy3vz,sy3vx,sy3vy,sy3vw,sy3vv,sy3vu,sy3v7,sy3sm,sy3sj,sy3sl,sy3si,sy3sh,sy3sg,sy3sf,sy3se,sy3sd,sy3sc,sy3sb,sy3sa,sy3s9,sy3s8,sy3s7,sy3re,sy3s6,sy3s5,sy3s4,sy3s3,sy3s2,sy3s1,sy3s0,sy3rz,sy3ry,sy3rx,sy3rw,sy3rv,sy3ru,sy3rt,sy3rs,sy3rr,sy3rq,sy3rp,sy3ro,sy3rn,sy3rm,sy3rl,sy3rk,sy3rj,sy3ri,sy3rh,sy3rg,sy3rf,sy3rd,sy3rc,sy3rb,sy3ra,sy3r9,sy3r8,sy3r7,sy3r6,sy3r5,sy3qe,sy3qd,sy3qc,sy3qb,sy3qa,sy3q9,sy3q7,sy3q6,sy3ol,sy3nu,sy3nm,sy3nl,sy3nk,sy3nj,sy3ni,sy3nh,sy3ng,sy3nf,sy3ne,sy3nd,sy3nc,sy3nb,sy3na,sy3n5,sy3n4,sy3n3,sy3mi,sy3lz,sy3mb,sy3ma,sy3m9,sy3m8,sy3m7,sy3m6,sy3m5,sy3m4,sy3m3,sy3m2,sy3m1,sy3m0,sy3ly,sy3lx,sy3lw,sy3in,sy2ma,sy2m9,sy2m8,sy3im,sy2hq,sywr,sywo,sync,syna,syn1,syhf,syhe,syhd,sy3gz,sy3fg,syvi,sy3db,sy3dc,sy14z,sy31w,sy2fa,sy1xg,sy236,sy1tc,sy1pd,sy15q,syvg,syud,syub,syu7,syu6,syty,syn4,sytd,syor,syoe,syo8,synd,syhm,IPPcAe,sy41d,sy41c,sy41b,sy39o,uQjlvd,sy410,sy40z,sy3xq,bTGkSd,sy19h,sy19i,sy19b,sy41s,sy49d,sy499,sy3yl,XTUZWc,sy498,UagZge,sy3y0,XThK1c,RagDlc,oUlnpc,ALJqWb,R2kc8b,sy49e,sy40y,sy26m,XT8Clf,sy3xp,dhnGve,sy40x,sy14b,sy142,rQR4vd,sy3xw,yezgIc,syqd,TSZEqd,sy2ta,msmzHf,sy3bc,sy3b9,sx3ZWd,sy7ar,sy765,sy766,sy5w3,sy144,syql,syqq,Da4hkd,sy2sb,fVaWL,sy5w1,xfmZMb,sy145,sy140,sy13z,sy13t,sy13y,sy13x,syqp,sy13v,sylo,aD8OEe,sy4by,GU4Gab,sy2xc,sy1gx,sy2xa,sy2xk,sy2xj,sy2x9,sy2xh,sy2xg,KHourd,sy3fd,T5VV,sy23p,aDVF7,sy5gw,rhYw1b,syhIed,M6QgBb,sy15f,sy15i,sy15h,sy15g,sy15e,sy14y,EO13pd?cb=WLUFmPOVrPfCIdCt&xjs=s4',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/gen_204?atyp=i&ct=psnt&cad=&nt=navigate&ei=cWmFZqWrCf2t0-kPtL6l-Ak&zx=1720019316729&opi=89978449',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ct=slh&v=t1&aqid=cWmFZt-YDrqd7OsPu7KawA0&pv=0.2624487687737298&me=132:1720019315934,R,1,CAwQJw,608,218,130,380:0,R,1,CAwQNA,746,218,130,380:0,R,1,CAwQPg,883,218,130,380:0,R,1,CAwQSA,1021,218,130,380:0,R,1,CAwQUw,1158,218,130,380:0,R,1,CBMQAA,195,627,600,146:1526,e,B&zx=1720019317460&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ct=fa&vt=paq:[15,734,[[%22amazon.in%22,0.004]],[[%22lenovo.com%22,0.078],[%22amazon.in%22,0.041],[%22acer.com%22,0.041],[%22reliancedigital.in%22,0.021],[%22croma.com%22,0.021]],0,null,null,[1,null,[[0,1,34,26,null,1720019313889,1720019317464],[4,1,178,138,null,1720019313889,1720019317464],[4,2,177,137,null,1720019313889,1720019317464],[4,3,178,138,null,1720019313889,1720019317464],[4,4,178,138,null,1720019313889,1720019317464],[4,5,177,137,null,1720019313889,1720019317464],[4,6,178,138,null,1720019313889,1720019317464],[4,7,177,137,null,1720019313889,1720019317464],[4,8,178,138,null,1720019313889,1720019317464],[4,9,178,138,null,1720019313889,1720019317464],[4,10,140,108,null,1720019313889,1720019317464]],%22cWmFZt-YDrqd7OsPu7KawA0%22,1720019317481]]&pvt=3584&s=0&pv=93156&authuser=0&zx=1720019317483&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/async/bgasy?ei=cWmFZqWrCf2t0-kPtL6l-Ak&opi=89978449&sca_esv=a171c0af4a6cee4c&sca_upv=1&yv=3&cs=0&async=_fmt:jspb',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-dos-behavior': 'Embed',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/gen_204?atyp=i&ct=phandle&cad=0,det:0&ei=cWmFZqWrCf2t0-kPtL6l-Ak&zx=1720019317658&opi=89978449',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get('https://www.google.com/images/phd/px.gif', {
        headers: {
          referer: 'https://www.google.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-arch': '"x86"',
          'sec-ch-ua-bitness': '"64"',
          'sec-ch-ua-full-version': '"126.0.6478.127"',
          'sec-ch-ua-full-version-list':
            '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-model': '""',
          'sec-ch-ua-platform': '"Windows"',
          'sec-ch-ua-platform-version': '"15.0.0"',
          'sec-ch-ua-wow64': '?0',
        },
      })

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQm6-Gf4CpD8zC-iTwgC653TZCeG109lrgjJVxDSVlUSuQQiMEeRvOCDbl5x8GDBisXLM5poPMCfnNh9ENp38OfIq44P-P8RhxsFFU4h9oDXMp6Z1g_lFG7cQ',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn%3AANd9GcRXOQ5ROkEQT2fXBcgeT7Xzatgje12vmkHB7VakUxQVacWba-InarHAnoTfJeQodie4vfHuyy9PygHyDUM_G-l1OXCvcK6lZ-3X',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpMUHx0yhNQfbR4che4qeD_sbYJU-bbdepA7Pk9U9h_iOQvub7GUkjaL91hizyoAs9zxHq7rwiPSwWQ0dvY4B4dm7TSQ6a-4Ra02PicZycGqzIGofOG4Y',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn%3AANd9GcR0eTQfv1wQfKlSG1mccui6Eawfhe4fZppVAiQp7BVG16qjexnV61Mc9pB4enUtAKC4D014OmQs-MIBtWmuFr3mbuPiz8ekV2UWw-dv-Ohw',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZF8tXKDwEp2aa3-NuxcppIvWpTGiDe95ohJsu5cEEpTlWc0msPIEEMTY9ttJ5tQtWskawQgN3LbiZOsFd5ezqFrNtlI80N7J7jf27Imu4ChnLkvITbg',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn%3AANd9GcSiabj7e5KTBsQlGr71-b-jwFGAtDp2OyXWRNORs7mtl3LfaiZQBqCi7gY0-aPD657m7I5ZssuBtViXcUGcAmd7pH3i8SJV',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsHwTygBfRxrcKALwIpPi0I8KLWz_FtBe9smmfFIQk8aU8tTDA7IcNPtRxrDpGYp_3bQPRPOYdm73VReQlPHfq_c_D-Hpn10Osc6UM3qp2uzPGQl0-oNA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn%3AANd9GcSk9zd0HItj4cB5A6Q2-pR8BmGxtNeaH4P-0si5EnFKv6CmkQAsfZfKKp8ncY_R4p18pkyunqUnshR192Er9VaUHVKI30w',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTj3Uxv94DfazgIADVTDDSJDp4lazyXkj377bJwLnSYuYJdcwf3ZGBhThbpxToeXOEG8JLCTDRKuIZH1JMu2p_-HqmlwqxsFXxa2vhM4UiHNOKfhCnb_aP_81GMv5mRl98E23jJRw2IYmc&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT64_o8BzZCs7YAMRpjOP4lMCuya5aNnbikMV7f8mJGDQRIwj1K3FwiSYOJvJYZbnI1Xy8Y7Hvzm36xLDZ99o2r42-S2VTv8OrKQtxyPl7NOiE4i6eULrAnqr4ga5ufh0m-a-NGwdcMhdw&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNFCELTG7IaaAlmZhZQ-NZYDK7U-EJ4sgea2OcTkFOaqIuGJTBzehCNz7vh-7GbMBoiIqBp8hY8TwfSm8AwEs0URHGbwbEIGrmvxO7XJOSkX8tBujddRFhPRAeMIbW77MaPTk__mpH82Q&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdfWNmAvtqFCjj7wHIquP3Tx4z2xmW__luO9D5wh_0CpLqdwIPDwDzHmJlfjh9dWrb6u-fx2eKFam6NZwiPWk8hFXLcZPSIpY8HvWLki2Pbf0sARXGPmiI9S3dY2q64OdcPR8Q78Gp1zE&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAsg4X1SniRZiUMj_KqU8ve1D28xiP4OnkVQqf5znSUvU57ij1z0bNNPBW6DDPJfPFbTWJDUhEZEh2aZ2YigOuAeZETgMOJZMSt8uXPn_bjOqa-FNGNB2tl4W651TEa5tDJ8Qvwu98UQ&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3eDeiT4UZJZc0AIE_lrXks3YYkmTT1WFJOOUJY6ZLVG3ZxW1tgSJ9ntKiYeHniJZ5i4KUTsL1LM_joGFcTedN8jvt_uHiMzpkHcAsn2SyiDnYLnQs-BkIInEv5XC9u7hcPkpQX2NBPr8&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkwbQY4yunR9U5bGlQYTnxtBrEmKCAxnA1xeFK80yKlCXgHeW7ACAPK7nnHf1atKfyo5Qao6iBN92joalk1iQnFnZmAIb8ZwYBw3kGA3P_YQJO_1M5xqu4J_VTuCg5tmq2iorqaq6717M&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRq2tHC9g6qsYP__QoeBCr1q1cAGLqjVJbox83mv4nur-XKwy6kS34_AQXWBBWV9nHC-Y8vgXd02Rj4R_J0SYMWXkelogdz-NRJRWf1NYOqxaY42Jhlpy7JLZ827DYQEf0rKs0VpNqVjw&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStWa9xYcCFlMNrO9tviuGpOMR-XB1-M7YGwcXceULhq_X53kBBgEMVy9uuWJ7jeidXocXmV_jvIjl9xH8OB4Hd7dYWcvXnMywc89LnwvXfThKHY9ND7-MnBRSLg5LoTQ_B44H04D60zJY&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSjAU7ZIExJnkO7uJRO_p3V5p8S-5mRJnubweA4exF0MBKwvQG_k-mBfXMwEep5qdwB9xEa7VTvj6C2D-vJfu9YQ_jGOzADzYmbAms8kT59a48K93yCLx2iWs4FWzFjXkz_4Z2fOpclVQ&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTTCkWwF4yYYWaG8MyBs5srmVatUeUkZMRfzOTIPI7p9bE8ZqmmHrFhyFJMwgQxgbkdvbR33P78kqEx1KUYqksCEx_-FzIUjh3avt7cfpt9zPAr_CrVJm7WMZ4glBDh0C2q1-bgxw0ueA&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaMTAE0r4bjw2IGxf2nu9KAXDMS_XsvJTMgTrKcP9uSVWEh8sZS7MGxGsfDHpW3e5ObD1clznIQMuAPyYK_dm3D-fnbjkfut7pRGnHcw3eCOB-mXd48g4aBNSTYkfVj40PuNwmRYwL1Ao&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHEm5iL6UA1aA5YTm_WrxbFqUEXkiHFgsUuraLNLJt2dEmJ9owy8dVf2mLHfMeUTQHRnKi9a2m0IYdaBxojhIKCmYMGupRhLtxD8a5qJBtuOFjpvJvISACSDIxrVQ3BaZoJRxxaw9IOFI&usqp=CAc',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://www.google.com/js/bg/kQEoeiSmObXx1VZn0nwlEqjunOr7QpQq3AZyTgXDbpA.js',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=0/dg=0/br=1/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug/m=sy4os,sy3d2,DpX64d,uKlGbf,sy4ot,EufiNb,sy1ap,P10Owf,sy176,sy171,gSZvdb,sys6,sysa,DPreE,WlNQGd,voHY2d,sy6k4,wLS77,sy7pg,sy6ki,D3Iavf,sy6kh,VcYpMe,sy70i,sy6ka,sy4dd,os9GOe,sy41j,sy41i,RDrqnf,sy3c0,sy3bz,Jgo89b,sy7pd,sy6kb,rRVyBc,sy2ds,sy2dr,sy2ci,sy284,sy281,sy27x,sydm,sy280,sy2dq,sy27u,sy27t,M8IzD,syfm,BYwJlf,syrv,syrr,syrq,syrj,VEbNoe,sy2st,zpQkVc,sy501,wuEeed,sy3xx,wRnMub,sy6w9,sy6ks,SC7lYd?cb=WLUFmPOVrPfCIdCt&xjs=s4',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&dt19=2&zx=1720019318257&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvMxTRcs5JY2XMg1QrwUm14juk-XaUxYSR7u2ka-Req47AS_O1sfAWGFtqmASmEEv3qne7G8hF5hmYfsgq_FyplEizc4pYPOEIFOin4Y6sxYy5VtBLq1k',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvNiIfNcTYxPKejoRtwkkYrtJ0G6pOwLjgCx4Fw6z4oEA1HjUt1aDJaCRdsWkA7ma2belXLTBIwnYL9bkoyGGGQ_GG7BR6HLmLQwhf',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEKv3uGRnLOHRtvm3q0pgZVyThwgWfPRV8_AYtXFvc9XOCIJ6-99u-KSD5lARVmukstnGk2oJwm8zPwWcPdvpEhTuEAHDxvI-r7ozQe9-E7Tpe0Fo9HEQ',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjEGZ_16H8i1Mnis7TAOGMIoTCFyv2kGPJkxKkvQ-tF9xrwAGap_YYwD_E842Gbau-iJWpUkho6UHBZOom5dSghfH2swJNkfY7HwqYS0ke1wltMIQcWNiZ',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMIY8Gujhat90PxZLbMy-af98IoG9nZDUSLtbOlDee5PtJwQA9J2kTldAPIj0YwA5yvu0DYUDUixc7JQ8ed3IzKAFGYloYmB8KSDOWIhjFgBLGaM6liA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMkt-g4sr9WGsIFS1ENXt7YCLE-YzlOi4xmqS4mk7cGWavxaMoY9fAhoSYw1EjFg1ycOf20Baa1tLntuqKoLyvBW8geFbXy6gwxSwskJ0XzaceLIPXgA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdztuY9jp-MYpGA2TeRW1BeciwM3asDM39940kA0H-c6uH_FLimQR1WyKEC1uebzig7Ohmn2wUWpO-v-Azxd-04NTc1VLSz6uo0udl',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYBoB2R6c7lHPndnqhUBf8qBHhmM-NG_WRUzax8JrgT72HrRxJeLjqvUVHf61YgkDuyyI8qAsbaPi3ihxp3TicNRSOQWhe0pJ5QpfSUxbwebf541QXjPM',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfjFPztHkLvraqrzSIIQpj0hpSzqn77oeh_OZSb_fRswbuPN8u50c_0Zs0QwCofQ0ZAbVCAUkEKKlSykSBsSlVbp6xcnM_3Tg1UsM5OdZC8CrXrTdwTzN2',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7jxRLNzV9B0IBNwQ2Ber9liysda2pvOgACC0mY4qoxmC1uviVcYunSzLieMvQw8swY7brPXkUhVIxMzqidNEIf6WMuw8hUOKz_Ex7razs_seATDyOEnA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTxb-NOg0raEjawBpnBFIMY_bwFi09C7H4TMJ6v04gk6AEHwEVWWH3gsu5Doa3E3QYkv39W8RJs2yhzH8BBffcm7pftCr_ET9SjCCIDrXraMgQPkUs3S3E',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3xULnq8Vu36DPhUcY2XVjWamV-BRRIzdjjxhaRVkEH2t-l_-3tZmUnlOUGN_mOm1P7x1-RKVhtt89J2He2ozlz1xXMHeDVH-3UxLtLg',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBJOuF8eoXBy4c1U02rw0dRSpgsW3d_tfrqzOJb4ZjOEdFk9Bs7o4V8M3EFjuyhXWzq1i5cD8Ovd-XLp6gmMd7mfYWTluig1PWB1QBByw_4hDabfxTgws',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-Lync77X0l_ZIrzttwqyq4eu_FRI1zWuAL9tvnVs4hYXnce4I26SDa3Ik6jH3G6w47jlEVZEB6gab1RnzY6F_rlh6jWJAwod3ZCEQt-9qL3i1H5ByzYTJ',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdFVVMwwa3S82W8NFB4S_WYWOVZWjACbfh1fW5eFZgd3AqP0EshEcFEGOD2BkirjFBTupbLufpBDbt7shMHxuydSprhtfTKt7-wP5MsoQJT2u2SiqI880',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQByhR5w8m6ZWPP3NCLIPA28-FQXxG-a2G0KW5YdTlUuPsemM5OEMVdTpmLS0TvfIOnt8pF3MkGZHxGltcX3t0AVm6hBVzOFIPV-fTKPT6eMugT_TuXpA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQb2a93Rsg2f7PNKEavKBYjlLkA72vlAU8NuIqATM8gIaY0FN4NNY1WH0uJN_bpalUUNbl1baHqp-QCF0QLqsoQNKp4Qsf1ubJwHlIzWjf_MyWULM9EiQtM',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBuE0dKLRAJfQr9dwArlrrwK1zXHEavTl2xIBpLUYl-cq5_Yimi_kZqo44JLyDULOqA0Wq9Z4HP3y2D_jqe0KRZoG2wkfkgKe5RQIXPvqXTJyoI-G8-M0',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxQ0cVq0VrP4DapwlbJsF8fjNJGBU1y9NwvSHoyIs3XACqs7aHoceHpT4_24tgoCOjN6WlupNKZ7xv1v7auLgR3ucEivjSBoLY7R9C6JH6q-h4DX7I6LAD',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBTO4DWzax7EHuomJHST905wNl47f6IXwGPCXXkWuMj3MEHCSuEKsd11Et-uOZGJ_PIIODySno6lWdjOpayiJtqVdD9bSm81ZtdtHBbtX3W7e6hHfXgGA',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&vet=12ahUKEwjlp6uhk4uHAxX91jQHHTRfCZ8QuqMJegQICxAA..s&bl=QNJp&s=web&lpl=CAUYATAWOAM&zx=1720019318338&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=0/dg=0/br=1/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug/m=sy5ky,sy2ud,KSk4yc,syrw,eX5ure,sy761,sy75z,sy3bn,sy760,sy75y,sy5j8,sy1dk,C2yzkd,A7ULAd,sy155,cNgdQc,sy15m,LdB9sd,hezEbd,G6wU6e,sy18t,sy5e6,Qqt3Gf,dLlj2,sy14x,Wn3aEc,sy7d8,sy5tl,sy1zh,Um3BXb,sy12c,UBXHI,sy12d,R3fhkb,sy1dx,NyeqM,sy2x5,sy2x4,O9SqHb?cb=WLUFmPOVrPfCIdCt&xjs=s4',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.get(
        'https://www.google.com/xjs/_/js/k=xjs.s.en_GB.wJJPyA7sQno.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABASCAIAAAAFAAAAAAAAAAAAAAAQCAAgFAAACAAHgAlAgIAAAIAAAgEAfz-EwAAAAAAAAAgAEwAAAAA4AIAABQIACBAAAAACAABAABQAAAAAAAAAAAAAAAAgAEE0A8AAAAAAAAAAAAAAAAADUD4AQCAABBAEAAcYCAAAEAAAAAA7QHA84DhIIUFAAAAAAAAAAAAAAAgAAmCOZD-ggAIAAAAAAAAAAAAAAAAICXoxOUNAJo/d=0/dg=0/br=1/rs=ACT90oHgdc4ox3BmlPRvEK89iBP2r8S2Ug/m=sy3b4,sy3b3,nabPbb,sy4dg,sy4df,sy1ad,sy1ab,sy1a8,sy1a9,sy1ae,sy1aa,VD4Qme,sy7dn,sy5w5,U9Yape,sy5w4,ND0kmf,sy2y6,qcH9Lc,pjDTFb,sy2xe,sy2xd,sy2x2,sy1w9,KgxeNb,sy2x7,khkNpe?cb=WLUFmPOVrPfCIdCt&xjs=s4',
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&vp-aft=1&zx=1720019318572&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/gen_204?atyp=i&ei=cWmFZqWrCf2t0-kPtL6l-Ak&ved=0ahUKEwjlp6uhk4uHAxX91jQHHTRfCZ8Qj5gNCB0&vet=10ahUKEwjlp6uhk4uHAxX91jQHHTRfCZ8Qj5gNCB0..i&bl=QNJp&s=web&zx=1720019318572&opi=89978449',
        null,
        {
          headers: {
            referer: 'https://www.google.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-full-version': '"126.0.6478.127"',
            'sec-ch-ua-full-version-list':
              '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
