/*
  Here you can execute your first task code, call your function:
  Open a terminal
  Enter to the project folder
  Write "npm run playground"
  Look at the output in your terminal

  Once you are done, move your code to API.js and helper.js files
* */

import fetch from 'node-fetch';

const FETCH_CANDIDATES_URL =
  "https://randomuser.me/api/?seed=abcd&nat=us,dk,fr,gb&results=50&page=1";
const fetchCandidates = async () => {

}

(async function () {

  console.log("Playground Area\n***************\n");

  // Add your logic here

  // An example of executing code from API.js file:
  const candidates = await fetchCandidates();
  console.log("candidates data: ",candidates);

})()

