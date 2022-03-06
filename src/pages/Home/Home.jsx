import React, {useEffect, useState} from "react";
import "./Home.css";
import {fetchCandidates} from "../../utils/API.js";
import {
    convertCandidatesDataFromArrayToJson,
    getPersistentCandidatesData, setPersistentCandidatesData,
    transformCandidatesData
} from "../../utils/helper.js";
import {Card} from "../../components/Card/Card";


export const Home = () => {
    const [candidates, setCandidatesFunction] = useState([]);

    useEffect(() => {
        runOnHomePageLoad();
    }, []);

    const runOnHomePageLoad = async () => {
        const data = getPersistentCandidatesData();
        if (data.length != 0) {
            setCandidatesFunction(data);
        } else {
            const fetchedData = await fetchCandidates();
            const transformedData = transformCandidatesData(fetchedData);
            setCandidatesFunction(transformedData);
        }
    }

    const changeFavoriteFlag = async (email) => {
        for (let i=0;i<candidates.length;i++){
            if(candidates[i]["email"] == email){
                if(candidates[i]["isFavorite"]){
                   candidates[i]["isFavorite"] = false;
                }
                else{
                   candidates[i]["isFavorite"] = true;
                }
            }
        }
        setPersistentCandidatesData(convertCandidatesDataFromArrayToJson(candidates));
        runOnHomePageLoad();
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
