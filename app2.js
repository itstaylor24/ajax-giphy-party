const $gifForm = $("#gif-form");
const $searchInput = $("#input");
const $button = $("#submit-button");
const $gifContainer = $("gif-container");

function appendGif(results) {
  let Allresults = results.data.length;
  if (Allresults) {
    let randomGifNum = Math.floor(Allresults * Math.random());

    let $newGif = $("<img>", {
      src: results.data[randomGifNum].images.original.url,
    });

    $gifContainer.append($newGif);
  }
}

$gifForm.on("submit", async function (event) {
  event.preventDefault();

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: $searchInput.val(),
      api_key: "5oUe0eFTBNxZjKLTnM7H6TWEbLxPv3SZ",
    },
  });

  appendGif(response.data);
});

$("#remove").on("click", function () {
  $gifContainer.empty();
});

// const $gifArea = $("#gif-area");
// const $searchInput = $("#search");

/* use ajax result to add a gif */

// function addGif(res) {
//   let numResults = res.data.length;
//   if (numResults) {
//     let randomIdx = Math.floor(Math.random() * numResults);
//     // select a random index from the res
//     let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
//     let $newGif = $("<img>", {
//       // add image with a source of the API's gif url
//       src: res.data[randomIdx].images.original.url,
//       class: "w-100",
//     });
//     $newCol.append($newGif);
//     // append the gif to the column
//     $gifArea.append($newCol);
//     // append the gif to the gif area
//   }
// }

// /* handle form submission: clear search box & make ajax call */

// $("form").on("submit", async function (evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
//     },
//   });
//   addGif(response.data);
// });

// /* remove gif */

// $("#remove").on("click", function () {
//   $gifArea.empty();
// });
