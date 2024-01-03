document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("image-container");

  // API end point
  const unsplashApiKey = "HQhfmMx-55s1d-Gp69C6ccEeGVxTNyBMGyemmwB7wGI";
  const unsplashApiUrl = `https://api.unsplash.com/photos/random?query=landscape&client_id=${unsplashApiKey}`;

  // Fetch a random landscape image from Unsplash
  fetch(unsplashApiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imageUrl = data.urls.regular;
      imageContainer.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch((error) => console.error("Error fetching Unsplash image:", error));

  const quoteContainer = document.getElementById("quote-container");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  // Fetch a random quote from Quotable API
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.content;
      const author = data.author;

      // Display the quote on the new tab page
      quoteText.textContent = `${quote}`;
      quoteAuthor.textContent = `- ${author}`;
      quoteContainer.style.opacity = 0.4; // Make the container visible
    })
    .catch((error) => console.error("Error fetching quote:", error));
});
