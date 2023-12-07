import { BASE_URL, API_KEY, RAPIDAPI_APP_KEY } from "./apiConfig.js";

function removeNoRequiredDataCB(obj){
    return (obj.imgThumb !== null && obj.imgThumb !== "https://s3.us-west-004.backblazeb2.com/encurate/static/dogbreed/dog-default.jpg" && obj.imgThumb !== "https://s3.us-west-004.backblazeb2.com/encurate/static/dogbreed/dog-default_ifzHte8.jpg" 
            && Number.isInteger(obj.id) === true && obj.breedName !== null && obj.origin !== null && obj.origin !== "N/A");//, "N/A");
}

export function getDogBreed(){
    return (
        fetch(BASE_URL, 
        {headers: 
            {"X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "dogbreeddb.p.rapidapi.com",
            "X-RapidAPI-App": RAPIDAPI_APP_KEY},}).then(gotResponseACB).catch(error=>{console.error('Error happend', error)})
            );


    function gotResponseACB(response){
        if (!response.ok){
            throw new Error("Response from was api not okay  ")
        }
        return response.json().then((jsonData)=> {
            console.log("Parsed JSON data: ", jsonData.filter(removeNoRequiredDataCB));
            return jsonData.filter(removeNoRequiredDataCB);
        });
    }
}
/*

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
  }*/