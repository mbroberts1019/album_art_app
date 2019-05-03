// jshint esversion: 6

/*Curl we were analyzing
    curl -X "GET" "https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQD3o6M_j01OWlolSdx7muL1OaLXrKzkwd60YKR1KkY5jGfuiaUAs3Bjbe8lX9_H6DfmM4VdFC0g7J3y4Ms0pmsgud43C2k2HWboSYpQg5xn04zarRDI5EsaAgYWb3t8LMtlpPQEEi0Ftz1x_BO6Bp5DNgHOgZ0"
*/

// get access token out of url returned from spotify
const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
const access_token = urlParams.get('access_token');

/* don't know if we need this
  const urlify = function(str) {
  return str.trim().replace(/\s+/g, '%20');
};*/


$("#search-form").submit(function(event) {
  event.preventDefault(); //prevent from refreshing
  let artist = $("#searchedName").val(); // use searched name
  console.log(artist);
  fetch(`https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=5&offset=0`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    }).then((res) => res.json())
    .then(res => {
      console.log("RES", res); // show result in console

      // populate images boxes with search result images and names
      for (let i = 1; i <= 5; i++) {
        if (res.artists.items[i - 1].images.length === 0) {
          $('#searchImg' + i).attr('src', '/images/noPic.jpg');
        } else {
          $('#searchImg' + i).attr('src', res.artists.items[i - 1].images[1].url);
          let name_string = res.artists.items[i - 1].name;
          $('#searchImgName' + i).html(name_string);
        }
      }
    });
});