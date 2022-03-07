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
        let candidateData = candidatesList[candidateIndex];
        let candidateFirstName = candidateData.name.first;
        let candidateLastName = candidateData.name.last;
        let candidateEmail = candidateData.email;
        let candidateCity = candidateData.location.city;
        let candidateCountry = candidateData.location.country;
        let candidatePicture = candidateData.picture.medium;
        let candidateUuid = candidateData.login.uuid;
        let candidateCountryCode = candidateData.nat;
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