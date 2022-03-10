import "./Favorite.css";
import {Card} from "../../components/Card/Card";
import React, {useEffect, useState} from "react";
import {getPersistentCandidatesData} from "../../utils/helper";

export const Favorite = () => {
    const [candidates, setCandidatesFunction] = useState([]);

    useEffect(() => {
        runOnFavoritePageLoad();
    }, []);

    const runOnFavoritePageLoad = async () => {
        const data = getPersistentCandidatesData();
        if (data.length != 0) {
            setCandidatesFunction(data.filter((candidate) => candidate.isFavorite));
        }
    }

    return (
        <div id="favorite">
            <div className="favorite-title">Favorite candidates</div>
            <div className="favorite-subtitle">Doron Avramov</div>
            <div className="favorite-candidates-list">
                {candidates.map((candidate) => (
                    <Card key={candidate.email} firstName={candidate.firstName} lastName={candidate.lastName} email={candidate.email} city={candidate.city} country={candidate.country} picture={candidate.picture} isFavorite={candidate.isFavorite} isPreferred={candidate.isPreferred}/>))}
            </div>
        </div>
    );
};