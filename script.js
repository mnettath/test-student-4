var requestURL = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status); // 200 means it was successful
      return response.json();
      // Make sure to display the response on the page
    })
    .then(function (data) {
      var imageURL = data.message;
      console.log(imageURL);
    });
}

getApi(requestURL);
