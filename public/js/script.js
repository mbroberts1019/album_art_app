// jshint esversion: 6
/* authorization code: BQD3o6M_j01OWlolSdx7muL1OaLXrKzkwd60YKR1KkY5jGfuiaUAs3Bjbe8lX9_H6DfmM4VdFC0g7J3y4Ms0pmsgud43C2k2HWboSYpQg5xn04zarRDI5EsaAgYWb3t8LMtlpPQEEi0Ftz1x_BO6Bp5DNgHOgZ0 */

// curl -X "GET" "https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQD3o6M_j01OWlolSdx7muL1OaLXrKzkwd60YKR1KkY5jGfuiaUAs3Bjbe8lX9_H6DfmM4VdFC0g7J3y4Ms0pmsgud43C2k2HWboSYpQg5xn04zarRDI5EsaAgYWb3t8LMtlpPQEEi0Ftz1x_BO6Bp5DNgHOgZ0"

/*
https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
*/

// console.log(window.location.hash.substr(1));
const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));

console.log()
const access_token = urlParams.get('access_token');
// console.log(urlParams.getAll());
// for (let p of urlParams.entries()) {
//   console.log(p);
// }
// console.log(urlParams);

const offset = 5;

// fetch('url')
//   .then((res) => res.json())
//   .then((res) => {
//     console.log('AUTH RESPONSE', res);

fetch(`https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=${offset}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    }
  }).then((res) => res.json())
  .then(res => {
    console.log("RES", res);
  });
// });