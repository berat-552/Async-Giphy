require("dotenv").config();

async function getImage(query) {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`;

    const response = await fetch(endpoint);

    const data = await response.json();

    const imageUrl = data.data[0]?.images?.original?.url;

    console.log(`GIF URL: ${imageUrl}`);

    return imageUrl;
  } catch (error) {
    console.log(error);
  }
}

// Print out value of API key stored in .env file
console.log(process.env.API_KEY);
