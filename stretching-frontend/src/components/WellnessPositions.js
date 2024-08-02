import axios from "axios";
import { useState,useEffect } from "react";
import WellnessItem from "./WellnessItem";


const WellnessPositions=()=>{
    const [programs, setPrograms]=useState([]);

    useEffect(()=>{
        const instance = axios.create({
            baseURL: 'https://hermi.danjam.site/api/v1/spots',
            timeout: 500000,
            headers: {
                "Cache-Control": "no-cache",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });
    
        const success = (position) => {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            getposition(lat,lng);
        }
    
        function error() {
            alert("현재 위치를 가져올 수 없음");
        }
    
        if (!navigator.geolocation) {
            alert("브라우저가 위치 정보를 지원하지 않음");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    
        function getposition(lat,lng){
            try {
                const response = instance.get('', {
                    params: {
                        username: "ksb",
                        x_pos: lng,
                        y_pos: lat
                    }
                });
                response.then(response => {
                    var programs = response.data.wellnessProgramPlaces;
                    setPrograms(programs);
                })
            } catch (e) {
                console.error(e);
            }
        }
    },[]);

    return (
        <div id='program-list'>
            {programs && programs.map((program, index) => (
                <WellnessItem key={index} program={program}></WellnessItem>
            ))}
        </div>
    );

}

export default WellnessPositions;