/*
## greedy-url

### Instruction

Write 3 functions :

- `getURL` that returns an array with all valid URLs present in a data-set, http and https
- `greedyQuery` that returns at least 3 or more parameters from all URLs that contain a query.
- `notSoGreedy` that returns at least 2, but not more then 3 parameters from all URLs that contain a query.

You can search for greedy quantifiers for help

### Notions

- https://www.regular-expressions.info/refrepeat.html

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = f => tests.push(f)

let dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you qq 233.123.12.234 qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsd https://devdocs.io/javascript/global_objects/object/fromentries njnkfsdjnk sfdjn fsp fd192.168.1.123:8080 https://devdocs.io/javascript/global_objects/regexp/@@split
htpp://wrong/url hello %$& wf* ][½¬ http://correct/url?correct=yes è[}£§ https://nan-academy.github.io/js-training/?page=editor#data.nested 255.256.1233.2
ssages has become an accepted part of many cultures, as happened earlier with emailing. htt://[1] This makes texting a quick and http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy way to communicate 255.256.2 with friends, family and colleagues, including 255.256.555.2 in contexts where a call would be when one knows the other person is busy 192.169.1.23 with family or work activities).; 172.01.123.254:1234
for example, to order products or 10.1.23.7
services fromhttps://regex-performance.github.io/exercises.html
this permits communication even between busy individuals255.253.123.2:8000 https: // . Text messages can also http:// be used to http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact with automated systems,https:// regex -performance.github.io/ exercises.html172.01.123.999:1234
https//nan-academy.github.io/js-training/?page=editor#data.nested impolite or inappropriate (e.g., calling very late at night orhttp://localhost/exercises
https://192.168.1.123?something=nothing&pro=[23] htts:/nan-academy.github.io/js-training?b=123&a=123/?page=editor#data.nested  Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient),
http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot texting does not require the caller and recipient to both be free at the same moment0.0.0.0`

t(({ eq }) =>
  eq(getURL(dataSet), [
    'https://something.com/hello',
    'http://example.com/hello?you=something&something=you',
    'https://devdocs.io/javascript/global_objects/object/fromentries',
    'https://devdocs.io/javascript/global_objects/regexp/@@split',
    'http://correct/url?correct=yes',
    'https://nan-academy.github.io/js-training/?page=editor#data.nested',
    'http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy',
    'https://regex-performance.github.io/exercises.html',
    'http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact',
    'http://localhost/exercises',
    'https://192.168.1.123?something=nothing&pro=[23]',
    'http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot'
  ])
)

t(({ eq }) =>
  eq(greedyQuery(dataSet), [
    'http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy',
    'http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot'
  ])
)

t(({ eq }) =>
  eq(
    notSoGreedy(dataSet),
      [
        'http://example.com/hello?you=something&something=you',
        'http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy',
        'http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact',
        'https://192.168.1.123?something=nothing&pro=[23]'
      ]
  )
)

Object.freeze(tests)
