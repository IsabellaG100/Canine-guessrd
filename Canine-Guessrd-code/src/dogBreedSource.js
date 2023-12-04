import { BASE_URL, API_KEY, RAPIDAPI_APP_KEY } from "./apiConfig.js";

export function getDogBreed(){
    return (
        fetch(BASE_URL, 
        {headers: 
            {"X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "dogbreeddb.p.rapidapi.com",
            "X-RapidAPI-App": RAPIDAPI_APP_KEY},}).then(gotResponseACB)
            );
    
    function gotResponseACB(response){
        if (!response.ok){
            throw new Error("Response from was api not okay  ")
        }
        return response.json();
    }
}

try {
    const response = await fetch(BASE_URL, {headers: 
        {"X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "dogbreeddb.p.rapidapi.com",
        "X-RapidAPI-App": RAPIDAPI_APP_KEY},});
  
    // Log the response status
    console.log('Response Status:', response.status);
  
    // Log the JSON response
    const result = await response.json();
    console.log('JSON Response:', result);
  } catch (error) {
    console.error(error);
  }