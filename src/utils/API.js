
const FETCH_CANDIDATES_URL =
  "https://randomuser.me/api/?seed=abcd&nat=us,dk,fr,gb&results=50&page=1";

export const fetchCandidates = async () => {
    const response = await fetch(FETCH_CANDIDATES_URL);
    const data = await response.json();
    const candidatesList = data["results"];
    return candidatesList;
}
