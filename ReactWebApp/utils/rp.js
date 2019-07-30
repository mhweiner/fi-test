function rp(method, url, json, options) {

  let fetchOpts = Object.assign({}, {
    body: json ? JSON.stringify(json) : null,
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: method
  }, options);

  return window.fetch(url, fetchOpts).then(responseObject => {

    if (!responseObject || !responseObject.ok) {

      return Promise.reject(responseObject);

    }

    return responseObject;

  });

}

function GET(url, jsonPayload, options) {

  return rp('GET', url, jsonPayload, options);

}

function POST(url, jsonPayload, options) {

  return rp('POST', url, jsonPayload, options);

}

export {
  rp,
  GET,
  POST
}