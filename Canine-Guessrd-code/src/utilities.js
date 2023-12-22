
function sortAlpabeticByAttribute(arr, attribute) {
    // Use the Array.sort() method to sort the array based on the attribute
    const modified_arr = [...arr]
    modified_arr.sort((a, b) => {
        // Convert both breed names to lowercase to ensure case-insensitive sorting
        const ValueA = a[attribute].toLowerCase();
        const ValueB = b[attribute].toLowerCase();

        // Compare the breed names and return the appropriate value for sorting
        if (ValueA < ValueB) {
            return -1;
        }
        if (ValueA > ValueB) {
            return 1;
        }
        // If breed names are equal, no change in order
        return 0;
    });

    return modified_arr;
}

function filterDuplicateValues(array, attribute){
    const uniqueValues = [];
    return array.filter((obj) => {
        if (!uniqueValues.includes(obj[attribute])) {
                uniqueValues.push(obj[attribute]);
                return true;
        }
        return false;
    });
}
/*
    A function that generate an array of 100 random ints that
    will choose 100 (check the number after length:) random dogbreeds from the data from the API
    */ 
function generateRandomArrayOfIndex(){
    return Array.from({length:50}, ()=> {
        return Math.floor(Math.random()*317)
    });
}


export {filterDuplicateValues, generateRandomArrayOfIndex, sortAlpabeticByAttribute}