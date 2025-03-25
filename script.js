// fetching cat images from The Cat API and displaying them in the document body
fetch("https://api.thecatapi.com/v1/images/search?limit=100")
// the Cat API provides a random cat image URL  
.then((response) => response.json())
// parsing the JSON response to extract the image URLs
  .then((data) => {
    // loop through the data array and create an image element for each cat image
    for (let i = 0; i < data.length; i++) {
      // create an image element and set its src attribute to the cat image URL
      let img = document.createElement("img");
      // set the src attribute to the cat image URL
      img.src = data[i].url;
      // set the alt attribute and class name for styling
      img.alt = "Cute cat";
      // set the class name for styling
      img.className = "cat-image";
      // set the width and height of the image
      document.body.appendChild(img);
    }
  })
  // handle any errors that occur during the fetch operation
  .catch((error) => console.error("error fetching cat images:", error));
