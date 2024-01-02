document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('image-container');
  
    // API end point
    const unsplashApiKey = 'HQhfmMx-55s1d-Gp69C6ccEeGVxTNyBMGyemmwB7wGI';
    const unsplashApiUrl = `https://api.unsplash.com/photos/random?query=landscape&client_id=${unsplashApiKey}`;
  
    // Fetch a random landscape image from Unsplash
    fetch(unsplashApiUrl)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.urls.regular;
        imageContainer.style.backgroundImage = `url(${imageUrl})`;
      })
      .catch(error => console.error('Error fetching Unsplash image:', error));
  });
  