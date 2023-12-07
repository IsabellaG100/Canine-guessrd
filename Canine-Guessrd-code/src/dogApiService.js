// dogApiService.js
// This service file handles all interactions with the DogBreedDB API for the CanineGuessrd app.
// It includes functions to fetch data about dog breeds.

// Function to fetch breed information from the DogBreedDB API
export const fetchBreedInfo = async () => {
    // The URL to access the DogBreedDB API
    const url = 'https://dogbreeddb.p.rapidapi.com/?ordering=-breedName';

    // Options including the method type and necessary headers for the API request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '***REMOVED***',
            'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
        }
    };

    try {
        // Make the API request
        const response = await fetch(url, options);

        // If the request was successful, convert the response to JSON format
        const data = await response.json();

        // Return the fetched data
        return data;
    } catch (error) {
        // If an error occurs, throw the error to be handled by the caller
        throw error;
    }
};

// This function can be imported and used in other parts of the app (like Redux actions)
// to fetch and handle dog breed data from the DogBreedDB API.
