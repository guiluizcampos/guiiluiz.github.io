export const fetchData = (endpoint) => (
  fetch(endpoint)
    .then((response) => (
      response.json().then((json) => response && Promise.resolve(json))))
);
