import React, {useEffect, useState} from "react";
import "./Home.css";
import {fetchCandidates} from "../../utils/API.js";
import {getPersistentCandidatesData, transformCandidatesData} from "../../utils/helper.js";
import {FavoriteIcon} from "../../components/FavoriteIcon/FavoriteIcon";
import {Card} from "../../components/Card/Card";

/*
  This is a "React component", you don't really need to know react in dept,
*/
export const Home = () => {

    // once you populated candidates variable with data
    // search online how to "render an array of items in react" and add your implementation below (line 41)
    // to update the candidates variable, you need to use setCandidatesFunction
    const [candidates, setCandidatesFunction] = useState([
        {firstName: "Doron",
          lastName: "Avramov",
          email: "doronavramov1993@gmail.com",
          city: "Holon",
          country: "Israel",
          picture: "https://randomuser.me/api/portraits/med/women/24.jpg",
          uuid: "IS",
          isFavorite: false,
          isPreferred: true},
        {firstName: "Doron",
            lastName: "Avramov",
            email: "example@gmail.com",
            city: "Holon",
            country: "Israel",
            picture: "https://randomuser.me/api/portraits/med/women/24.jpg",
            uuid: "IS",
            isFavorite: false,
            isPreferred: false}]);

    // this is "React Hook", a function that will be called ONCE, on every page load
    useEffect(() => {
      //  runOnHomePageLoad();
    }, []);

    const runOnHomePageLoad = async () => {
        // once you will succeed getting the data, make it persistent as required.
        // if the data is already fetched and persistent - don't fetch it again, use the condition below
        const data = getPersistentCandidatesData();
        if (data.length != 0) {
            setCandidatesFunction(data);
        } else {
            // replace the empty array once you implemented the fetching code with: await fetchCandidates()
            const fetchedData = await fetchCandidates();

            // replace the empty array once the data is transformed
            const transformedData = transformCandidatesData(fetchedData);

            //this function will save a "React State" and allow you to use the data via candidates variable outside.
            setCandidatesFunction(transformedData);
        }
    }

    const changeFavoriteFlag = (email) =>{
        for (let i=0;i<candidates.length;i++){
            console.log(candidates[i]["isFavorite"])
            if(candidates[i]["email"] == email){
                candidates[i]["isFavorite"] = true;
                console.log(email);
                console.log(candidates[i]["isFavorite"]);
            }
        }
    }

    return (
        <div id="home">
            <div className="home-title">Firm's candidates</div>
            <div className="home-subtitle">Doron Avramov</div>
            <div className="candidates-list">
                {candidates.map((candidate) => (
                    <Card key={candidate.email} changeFavoriteFlag={changeFavoriteFlag} firstName={candidate.firstName} lastName={candidate.lastName} email={candidate.email} city={candidate.city} country={candidate.country} picture={candidate.picture} isFavorite={candidate.isFavorite} isPreferred={candidate.isPreferred}/>))}

            </div>
        </div>
    );
};
