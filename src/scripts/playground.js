/*
  Here you can execute your first task code, call your function:
  Open a terminal
  Enter to the project folder
  Write "npm run playground"
  Look at the output in your terminal
* */
import {fetchCandidates} from "../utils/API";

console.log("Playground Area:");
//An example of executing code from API.js file:
console.log(await fetchCandidates());
