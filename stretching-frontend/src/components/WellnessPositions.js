import axios from "axios";
import { useState,useEffect } from "react";
import WellnessItem from "./WellnessItem";


const WellnessPositions=()=>{
    const [programs, setPrograms]=useState([]);
    const [lat,setLat]=useState(0);
    const [lng,setLng]=useState(0);

    // const success = (position) => {
    //     var lat = position.coords.latitude;
    //     var lng = position.coords.longitude;
    //     setLat(lat);
    //     setLng(lng);
    // }

    function error() {
        alert("현재 위치를 가져올 수 없음");
    }

    // if (!navigator.geolocation) {
    //     alert("브라우저가 위치 정보를 지원하지 않음");
    // } else {
    //     navigator.geolocation.getCurrentPosition(success, error);
    // }

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
    
        // function getposition(lat,lng){
            try {
                const response = instance.get('', {
                    params: {
                        username: "ksb",
                        x_pos: 127.2855931,
                        y_pos: 36.6090228
                    }
                });
                response.then(response => {
                    var programs = response.data.wellnessProgramPlaces;
                    setPrograms(programs);
                })
            } catch (e) {
                console.error(e);
            }
        // }
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