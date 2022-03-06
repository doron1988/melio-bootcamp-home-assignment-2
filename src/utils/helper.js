export const getPersistentCandidatesData = () => {
    let jsonNormalizedCandidatesList = JSON.parse(localStorage.getItem("normalizedCandidatesList"))
    return convertCandidatesDataFromJsonToArray(jsonNormalizedCandidatesList);
}

export const setPersistentCandidatesData = (normalizedCandidatesList) => {
    localStorage.setItem("normalizedCandidatesList",JSON.stringify(normalizedCandidatesList));
}

export const transformCandidatesData = (fetchData) => {
    let normalizedCandidatesList = {};
    let candidatesList = fetchData;
    for(let candidateIndex = 0 ; candidateIndex < candidatesList.length ; candidateIndex++){

        let candidateFirstName = candidatesList[candidateIndex]["name"]["first"];
        let candidateLastName = candidatesList[candidateIndex]["name"]["last"];
        let candidateEmail = candidatesList[candidateIndex]["email"];
        let candidateCity = candidatesList[candidateIndex]["location"]["city"];
        let candidateCountry = candidatesList[candidateIndex]["location"]["country"];
        let candidatePicture = candidatesList[candidateIndex]["picture"]["medium"];
        let candidateUuid = candidatesList[candidateIndex]["login"]["uuid"];
        let candidateCountryCode = candidatesList[candidateIndex]["nat"];
        let candidateIsPreferred = isPreferred(candidateCountryCode);

        let candidate = {
            firstName: candidateFirstName,
            lastName: candidateLastName,
            email: candidateEmail,
            city: candidateCity,
            country: candidateCountry,
            picture: candidatePicture,
            uuid: candidateUuid,
            isFavorite: false,
            isPreferred: candidateIsPreferred
        }

        let firstLetterName = candidateFirstName.charAt(0);
        if (keyExistInObject(firstLetterName, normalizedCandidatesList)){
            normalizedCandidatesList[firstLetterName].push(candidate);
        }
        else{
            normalizedCandidatesList[firstLetterName] = [candidate];
        }
    }
    setPersistentCandidatesData(normalizedCandidatesList);
    return convertCandidatesDataFromJsonToArray(normalizedCandidatesList);
}

function isPreferred(countryCode){
    if (countryCode == "US" || countryCode == "GB"){
        return true;
    }
    else{
        return false;
    }
}

function keyExistInObject (firstLetter, object){
    return (firstLetter in object);
}

function convertCandidatesDataFromJsonToArray(jsonNormalizedCandidatesList){
    let arrayNormalizedCandidatesList= [];
    for (const key in jsonNormalizedCandidatesList){
        for(const candidate of jsonNormalizedCandidatesList[key]){
            arrayNormalizedCandidatesList.push(candidate);
        }
    }
    return arrayNormalizedCandidatesList;
}

export const convertCandidatesDataFromArrayToJson = (arrayNormalizedCandidatesList) => {
    let jsonNormalizedCandidatesList= {};
    for (let candidateIndex = 0 ; candidateIndex < arrayNormalizedCandidatesList.length ; candidateIndex++){
        let firstLetterFirstName = arrayNormalizedCandidatesList[candidateIndex]["firstName"].charAt(0);

        if (keyExistInObject(firstLetterFirstName,jsonNormalizedCandidatesList)){
            let candidate = arrayNormalizedCandidatesList[candidateIndex];
            jsonNormalizedCandidatesList[firstLetterFirstName].push(candidate);
        }
        else {
            jsonNormalizedCandidatesList[firstLetterFirstName] = [arrayNormalizedCandidatesList[candidateIndex]];
        }
    }
    return jsonNormalizedCandidatesList;
}