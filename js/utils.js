function promisifiedGet(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (xhttp.status === 200) {
        resolve(xhttp.responseText);
      } else {
        reject(xhttp.status);
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  })
}

function promisifiedWait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

